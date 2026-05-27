/**
 * EduConnect landing — slider behavior
 * Generic slider: any element with [data-slider] gets prev/next buttons
 * and optional dot pagination wired up. Sliders use CSS scroll-snap and
 * native smooth-scroll for the actual movement.
 */
(function () {
  'use strict';

  document.querySelectorAll('[data-slider]').forEach(initSlider);

  function initSlider(track) {
    const root = track.closest('[data-slider-root]') || track.parentElement;
    if (!root) return;

    const prev = root.querySelector('[data-slider-prev]');
    const next = root.querySelector('[data-slider-next]');
    const dotsContainer = root.querySelector('[data-slider-dots]');

    function getSlides() {
      return Array.from(track.children);
    }

    function getStep() {
      const first = track.firstElementChild;
      if (!first) return track.clientWidth;
      const style = window.getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap || '0') || 0;
      return first.getBoundingClientRect().width + gap;
    }

    function currentIndex() {
      const step = getStep();
      if (!step) return 0;
      return Math.round(track.scrollLeft / step);
    }

    function scrollToIndex(i) {
      const slides = getSlides();
      if (!slides.length) return;
      const clamped = Math.max(0, Math.min(i, slides.length - 1));
      const step = getStep();
      track.scrollTo({ left: clamped * step, behavior: 'smooth' });
    }

    function go(dir) {
      scrollToIndex(currentIndex() + dir);
    }

    if (prev) prev.addEventListener('click', () => go(-1));
    if (next) next.addEventListener('click', () => go(1));

    // Build dots
    let dotButtons = [];
    if (dotsContainer) {
      const slides = getSlides();
      dotsContainer.innerHTML = '';
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        if (i === 0) dot.setAttribute('aria-current', 'true');
        dot.addEventListener('click', () => scrollToIndex(i));
        dotsContainer.appendChild(dot);
        dotButtons.push(dot);
      });
    }

    function updateState() {
      const i = currentIndex();
      const slides = getSlides();
      if (prev) prev.disabled = i <= 0;
      if (next) next.disabled = i >= slides.length - 1;
      dotButtons.forEach((dot, idx) => {
        if (idx === i) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
    }

    let scrollTimer;
    track.addEventListener('scroll', () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(updateState, 80);
    });
    window.addEventListener('resize', updateState);
    updateState();
  }
})();
