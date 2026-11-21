interface TypingConfig {
    selector: string;
    text: string;
    speed?: number;
}

export function initTyping(config: TypingConfig): void {
    const { selector, text, speed = 80 } = config;

    const element = document.querySelector<HTMLElement>(selector);
    if (!element) return;

    let index = 0;

    function type(): void {
        if (index < text.length) {
            element!.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}
