/* EduConnect USA — header behavior
   - Desktop: hover (with a small close delay) + click to open mega panels
   - Keyboard: Enter/Space toggles, Esc closes, focus moves naturally
   - Mobile drawer: burger toggles, scrim/close button shut it, body scroll locks
   - Accordions inside the drawer expand on tap
*/
(function () {
  'use strict';

  const header = document.getElementById('ecHeader');
  if (!header) return;

  // ---------- Desktop mega menus ----------
  const items = header.querySelectorAll('.ec-nav__item--has-mega');
  let closeTimer = null;

  function openItem(item) {
    items.forEach(i => {
      if (i !== item) {
        i.classList.remove('ec-nav__item--open');
        const t = i.querySelector('.ec-nav__trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    });
    item.classList.add('ec-nav__item--open');
    const trigger = item.querySelector('.ec-nav__trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
  }
  function closeItem(item) {
    item.classList.remove('ec-nav__item--open');
    const trigger = item.querySelector('.ec-nav__trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  }
  function closeAll() {
    items.forEach(closeItem);
  }

  items.forEach(item => {
    const trigger = item.querySelector('.ec-nav__trigger');

    item.addEventListener('mouseenter', () => {
      if (window.matchMedia('(max-width: 1023px)').matches) return;
      clearTimeout(closeTimer);
      openItem(item);
    });
    item.addEventListener('mouseleave', () => {
      if (window.matchMedia('(max-width: 1023px)').matches) return;
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => closeItem(item), 140);
    });

    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = item.classList.contains('ec-nav__item--open');
        if (isOpen) closeItem(item); else openItem(item);
      });
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { closeItem(item); trigger.focus(); }
      });
    }
  });

  // Close mega on outside click
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) closeAll();
  });
  // Esc closes everything
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAll();
      if (header.dataset.state === 'open') closeDrawer();
    }
  });

  // ---------- Scroll shadow ----------
  const onScroll = () => {
    header.dataset.scrolled = window.scrollY > 4 ? 'true' : 'false';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Mobile drawer ----------
  const burger = document.getElementById('ecBurger');
  const closeBtn = document.getElementById('ecMobileClose');
  const scrim = document.getElementById('ecScrim');
  const drawer = document.getElementById('ecMobile');

  function openDrawer() {
    header.dataset.state = 'open';
    document.body.classList.add('ec-lock');
    burger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    closeAll();
  }
  function closeDrawer() {
    header.dataset.state = 'closed';
    document.body.classList.remove('ec-lock');
    burger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  }

  if (burger)   burger.addEventListener('click', () => {
    header.dataset.state === 'open' ? closeDrawer() : openDrawer();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (scrim)    scrim.addEventListener('click', closeDrawer);

  // ---------- Mobile accordions ----------
  drawer.querySelectorAll('.ec-acc').forEach(acc => {
    const head = acc.querySelector('.ec-acc__head');
    if (!head) return;
    head.addEventListener('click', () => {
      const isOpen = acc.dataset.open === 'true';
      // Optional: close siblings — comment out to allow multiple open
      drawer.querySelectorAll('.ec-acc').forEach(a => {
        a.dataset.open = 'false';
        const h = a.querySelector('.ec-acc__head');
        if (h) h.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        acc.dataset.open = 'true';
        head.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close drawer when window grows beyond mobile breakpoint
  const mq = window.matchMedia('(min-width: 1024px)');
  const onMQ = (e) => { if (e.matches) closeDrawer(); };
  if (mq.addEventListener) mq.addEventListener('change', onMQ);
  else                     mq.addListener(onMQ); // older Safari
})();
