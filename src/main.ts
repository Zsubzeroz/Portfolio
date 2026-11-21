import './styles/main.css';
import { createIcons } from 'lucide';
import { initAvatar } from './scripts/avatar';
import { initArchive } from './scripts/archive';
import { initScrollEffects } from './scripts/scroll-effects';
import { initTyping } from './scripts/typing';
import { initContact } from './scripts/contact';
import { projects, archiveProjects } from './data/projects';
import { onReady } from './scripts/utils';

onReady(() => {
    createIcons();

    initTyping({
        selector: '#typing-text',
        text: 'Luan Estifer |',
        speed: 80,
    });

    initAvatar({
        containerSelector: '#hero-avatar',
    });

    initScrollEffects({
        progressSelector: '#progress-bar',
        revealSelector: '.reveal',
        revealThreshold: 150,
    });

    initArchive({
        gridSelector: '#archive-grid',
        searchSelector: '#repo-search',
        filterSelector: '.filter-btn',
        projects: archiveProjects,
    });

    initContact({
        copyButtonSelector: '#copy-email-btn',
        email: 'luanestiferpy@gmail.com',
        successText: 'Copiado!',
        successIcon:
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    });
});
