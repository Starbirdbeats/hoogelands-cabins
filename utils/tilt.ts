class Vec2 {
  constructor(public x = 0, public y = 0) {}

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  lerp(v: Vec2, t: number) {
    this.x = this.x + (v.x - this.x) * t;
    this.y = this.y + (v.y - this.y) * t;
  }
}

export function createTiltEffect(element: HTMLElement, targets: HTMLElement[]) {
  // Only apply tilt effect on desktop
  if (window.matchMedia('(max-width: 767px)').matches) {
    return () => {};
  }

  const rotDeg = { current: new Vec2(), target: new Vec2() };
  const bgPos = { current: new Vec2(), target: new Vec2() };
  let lerpAmount = 0.06;
  let rafId: number;

  const update = () => {
    rotDeg.current.lerp(rotDeg.target, lerpAmount);
    bgPos.current.lerp(bgPos.target, lerpAmount);

    targets.forEach((target) => {
      target.style.setProperty('--rotX', `${rotDeg.current.y.toFixed(2)}deg`);
      target.style.setProperty('--rotY', `${rotDeg.current.x.toFixed(2)}deg`);
      target.style.setProperty('--bgPosX', `${bgPos.current.x.toFixed(2)}%`);
      target.style.setProperty('--bgPosY', `${bgPos.current.y.toFixed(2)}%`);
    });

    rafId = requestAnimationFrame(update);
  };

  const onMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    lerpAmount = 0.1;

    const ox = (offsetX - element.clientWidth * 0.5) / (Math.PI * 3);
    const oy = -(offsetY - element.clientHeight * 0.5) / (Math.PI * 4);

    rotDeg.target.set(ox, oy);
    bgPos.target.set(-ox * 0.3, oy * 0.3);
  };

  const onMouseLeave = () => {
    lerpAmount = 0.06;
    rotDeg.target.set(0, 0);
    bgPos.target.set(0, 0);
  };

  element.addEventListener('mousemove', onMouseMove);
  element.addEventListener('mouseleave', onMouseLeave);
  update();

  return () => {
    element.removeEventListener('mousemove', onMouseMove);
    element.removeEventListener('mouseleave', onMouseLeave);
    cancelAnimationFrame(rafId);
  };
}
