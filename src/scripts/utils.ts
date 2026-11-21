export const qs = <T extends Element>(
    selector: string,
    parent: Element | Document = document
): T | null => parent.querySelector(selector);

export const qsa = <T extends Element>(
    selector: string,
    parent: Element | Document = document
): NodeListOf<T> => parent.querySelectorAll(selector);

export const createElement = <K extends keyof HTMLElementTagNameMap>(
    tag: K,
    attrs: Partial<HTMLElementTagNameMap[K]> = {},
    children: (Node | string)[] = []
): HTMLElementTagNameMap[K] => {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => {
        if (key === 'class') el.className = value as string;
        else if (key === 'dataset')
            Object.entries(value as Record<string, string>).forEach(
                ([k, v]) => (el.dataset[k] = v)
            );
        else if (key.startsWith('on') && typeof value === 'function')
            el.addEventListener(key.slice(2).toLowerCase(), value);
        else el.setAttribute(key, value as string);
    });
    children.forEach(child =>
        el.append(child instanceof Node ? child : document.createTextNode(child))
    );
    return el;
};

export const debounce = <T extends (...args: unknown[]) => void>(
    fn: T,
    ms: number
): ((...args: Parameters<T>) => void) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), ms);
    };
};

export const throttle = <T extends (...args: unknown[]) => void>(
    fn: T,
    ms: number
): ((...args: Parameters<T>) => void) => {
    let last = 0;
    return (...args: Parameters<T>) => {
        const now = Date.now();
        if (now - last >= ms) {
            last = now;
            fn(...args);
        }
    };
};

export const onReady = (fn: () => void): void => {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
};
