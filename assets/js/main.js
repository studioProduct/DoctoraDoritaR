(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  const items = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add('visible'));
  }

  const cfg = window.DORITA_SITE || {};
  document.querySelectorAll('[data-location]').forEach(el => el.textContent = cfg.location || 'Rionegro, Antioquia');
  document.querySelectorAll('[data-email]').forEach(el => {
    if (cfg.email) { el.textContent = cfg.email; el.href = 'mailto:' + cfg.email; }
  });
  document.querySelectorAll('[data-phone]').forEach(el => {
    if (cfg.phone) { el.textContent = cfg.phone; el.href = 'tel:' + cfg.phone.replace(/\s/g,''); }
  });
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    if (cfg.whatsapp) {
      const number = cfg.whatsapp.replace(/\D/g,'');
      el.href = 'https://wa.me/' + number;
      el.hidden = false;
    }
  });
  document.querySelectorAll('[data-doctoralia]').forEach(el => {
    if (cfg.doctoraliaUrl) { el.href = cfg.doctoraliaUrl; el.hidden = false; }
  });

  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('nombre') || '';
      const phone = data.get('telefono') || '';
      const email = data.get('email') || '';
      const reason = data.get('motivo') || '';
      const message = data.get('mensaje') || '';
      const body = `Hola, soy ${name}.%0A%0AMotivo de consulta: ${reason}%0ATeléfono: ${phone}%0AEmail: ${email}%0A%0A${message}`;
      if (cfg.whatsapp) {
        window.location.href = `https://wa.me/${cfg.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(body.replace(/%0A/g,'\n'))}`;
      } else if (cfg.email) {
        window.location.href = `mailto:${cfg.email}?subject=${encodeURIComponent('Solicitud de consulta - ' + name)}&body=${body}`;
      } else {
        const status = document.querySelector('#form-status');
        status.textContent = 'La información de agenda todavía no está configurada. Actualiza assets/js/config.js antes de publicar el sitio.';
        status.hidden = false;
      }
    });
  }
})();
