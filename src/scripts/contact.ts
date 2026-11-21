interface ContactConfig {
    copyButtonSelector: string;
    email: string;
    successText: string;
    successIcon: string;
    resetDelay?: number;
}

export function initContact(config: ContactConfig): () => void {
    const { copyButtonSelector, email, successText, successIcon, resetDelay = 2000 } = config;

    const button = document.querySelector<HTMLButtonElement>(copyButtonSelector);
    if (!button) return () => {};

    const originalHTML = button.innerHTML;

    async function copyEmail(): Promise<void> {
        try {
            await navigator.clipboard.writeText(email);
            button!.innerHTML = `${successIcon} ${successText}`;
            setTimeout(() => {
                button!.innerHTML = originalHTML;
            }, resetDelay);
        } catch {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            button!.innerHTML = `${successIcon} ${successText}`;
            setTimeout(() => {
                button!.innerHTML = originalHTML;
            }, resetDelay);
        }
    }

    button!.addEventListener('click', copyEmail);

    return (): void => {
        button!.removeEventListener('click', copyEmail);
    };
}
