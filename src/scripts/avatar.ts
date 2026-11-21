interface AvatarConfig {
    containerSelector: string;
    headX?: number;
    headY?: number;
    parallax?: number;
    parallaxMax?: number;
    margin?: number;
}

export function initAvatar(config: AvatarConfig): () => void {
    const {
        containerSelector,
        headX = 0.5,
        headY = 0.38,
        parallax = 0.035,
        parallaxMax = 14,
        margin = 14,
    } = config;

    const box = document.querySelector<HTMLElement>(containerSelector);
    if (!box) return () => {};

    const poses = Array.from(box.querySelectorAll<HTMLImageElement>('.pose'));
    let mx: number | null = null;
    let my: number | null = null;
    let base: { x: number; y: number; width: number; height: number } | null = null;
    let curX = 0;
    let curY = 0;
    let current = 'N';
    let near = false;

    function measure(): void {
        const r = box!.getBoundingClientRect();
        base = { x: r.left - curX, y: r.top - curY, width: r.width, height: r.height };
    }

    function setPose(pose: string): void {
        if (pose === current) return;
        current = pose;
        poses.forEach(el => el.classList.toggle('on', el.dataset.pose === pose));
    }

    function update(): void {
        if (!base || mx === null || my === null) return;
        if (base.y > window.innerHeight || base.y + base.height < 0) return;

        const gx = mx - (base.x + base.width * headX);
        const gy = my - (base.y + base.height * headY);

        const tx = Math.max(-parallaxMax, Math.min(parallaxMax, gx * parallax));
        const ty = Math.max(-parallaxMax, Math.min(parallaxMax, gy * parallax));

        if (tx !== curX || ty !== curY) {
            curX = tx;
            curY = ty;
            box!.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        }

        const dist = Math.hypot(gx, gy);
        const deadIn = base.width * 0.18;
        const deadOut = base.width * 0.26;

        if (near) {
            if (dist <= deadOut) {
                setPose('N');
                return;
            }
            near = false;
        } else if (dist < deadIn) {
            near = true;
            setPose('N');
            return;
        }

        const angle = ((Math.atan2(-gy, gx) * 180) / Math.PI + 360) % 360;

        if (angle >= 315 + margin || angle < 45 - margin) setPose('R');
        else if (angle >= 45 + margin && angle < 135 - margin) setPose('U');
        else if (angle >= 135 + margin && angle < 225 - margin) setPose('L');
        else if (angle >= 225 + margin && angle < 315 - margin) setPose('D');
    }

    const handleMouseMove = (e: MouseEvent): void => {
        mx = e.clientX;
        my = e.clientY;
        update();
    };

    const handleTouchMove = (e: TouchEvent): void => {
        const touch = e.touches[0];
        if (touch) {
            mx = touch.clientX;
            my = touch.clientY;
            update();
        }
    };

    const handleScrollResize = (): void => {
        measure();
        update();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', handleScrollResize, { passive: true });
    window.addEventListener('resize', handleScrollResize);

    const hero = document.querySelector('.hero');
    if (hero) hero.addEventListener('transitionend', handleScrollResize);

    measure();
    update();

    setTimeout(() => {
        measure();
        update();
    }, 700);

    return (): void => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('scroll', handleScrollResize);
        window.removeEventListener('resize', handleScrollResize);
        if (hero) hero.removeEventListener('transitionend', handleScrollResize);
    };
}
