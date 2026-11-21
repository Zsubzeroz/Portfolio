import { qsa } from './utils';

interface ScrollEffectsConfig {
    progressSelector: string;
    revealSelector: string;
    revealThreshold?: number;
}

export function initScrollEffects(config: ScrollEffectsConfig): () => void {
    const { progressSelector, revealSelector, revealThreshold = 150 } = config;

    const progressBar = document.querySelector<HTMLDivElement>(progressSelector);
    const revealElements = qsa<HTMLElement>(revealSelector);

    if (!progressBar || revealElements.length === 0) return () => {};

    function updateProgress(): void {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar!.style.width = `${scrolled}%`;
    }

    function checkReveal(): void {
        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < window.innerHeight - revealThreshold) {
                el.classList.add('active');
            }
        });
    }

    const handleScroll = (): void => {
        updateProgress();
        checkReveal();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    checkReveal();
    updateProgress();

    return (): void => {
        window.removeEventListener('scroll', handleScroll);
    };
}
