import type { Project } from '@/types';
import { qs, qsa } from './utils';

interface ArchiveConfig {
    gridSelector: string;
    searchSelector: string;
    filterSelector: string;
    projects: Project[];
}

export function initArchive(config: ArchiveConfig): () => void {
    const { gridSelector, searchSelector, filterSelector, projects } = config;

    const grid = qs<HTMLDivElement>(gridSelector);
    const searchInput = qs<HTMLInputElement>(searchSelector);
    const filterButtons = qsa<HTMLButtonElement>(filterSelector);

    if (!grid || !searchInput || filterButtons.length === 0) return () => {};

    let activeFilter = 'all';

    function renderProjects(filter = 'all', search = ''): void {
        grid!.innerHTML = '';

        const filtered = projects.filter(p => {
            const matchesSearch =
                p.name.toLowerCase().includes(search.toLowerCase()) ||
                p.desc.toLowerCase().includes(search.toLowerCase()) ||
                p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()));

            if (filter === 'all') return matchesSearch;
            if (filter === 'Outros') {
                return (
                    matchesSearch &&
                    !p.tech.includes('Python') &&
                    !p.tech.includes('JavaScript') &&
                    !p.tech.includes('Django')
                );
            }
            return matchesSearch && p.tech.includes(filter);
        });

        if (filtered.length === 0) {
            grid!.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 48px 16px; color: var(--text-dim);">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 16px; opacity: 0.5;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <p>Nenhum projeto encontrado</p>
        </div>
      `;
            return;
        }

        filtered.forEach(p => {
            const card = document.createElement('a');
            card.href = p.url;
            card.target = '_blank';
            card.className = 'archive-card';
            card.innerHTML = `
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
        <div class="tech-tags">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      `;
            grid!.appendChild(card);
        });
    }

    const handleSearch = (): void => {
        renderProjects(activeFilter, searchInput.value);
    };

    const handleFilter = (btn: HTMLButtonElement): void => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter ?? 'all';
        renderProjects(activeFilter, searchInput.value);
    };

    searchInput.addEventListener('input', handleSearch);

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn));
    });

    renderProjects();

    return (): void => {
        searchInput.removeEventListener('input', handleSearch);
        filterButtons.forEach(btn => {
            btn.removeEventListener('click', () => handleFilter(btn));
        });
    };
}
