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

  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroVideo.pause();
    heroVideo.removeAttribute('autoplay');
  }


  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const rotatingWord = document.querySelector('#hero-rotating-word');
  if (rotatingWord && !reduceMotion) {
    const words = ['comprender.', 'acompañar.', 'transformar.'];
    let wordIndex = 0;
    window.setInterval(() => {
      rotatingWord.classList.add('is-changing');
      window.setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        rotatingWord.textContent = words[wordIndex];
        rotatingWord.classList.remove('is-changing');
      }, 260);
    }, 2800);
  }

  const pathway = document.querySelector('[data-pathway]');
  if (pathway) {
    const content = {
      comprender: {
        kicker: 'Psicoterapia · EMDR',
        title: 'Un espacio para darle sentido a lo que estás viviendo.',
        copy: 'Si hay experiencias, emociones o recuerdos que siguen generando malestar, podemos explorar un proceso psicoterapéutico adaptado a tus necesidades.',
        href: 'servicios/#emdr',
        link: 'Conocer este enfoque →'
      },
      evaluacion: {
        kicker: 'Evaluación neuropsicológica',
        title: 'Comprender tu funcionamiento cognitivo puede darte un punto de partida más claro.',
        copy: 'Cuando existen cambios en memoria, atención, organización o funcionamiento diario, una evaluación puede ayudar a identificar fortalezas, dificultades y próximos pasos.',
        href: 'servicios/#neuropsicologia',
        link: 'Conocer la evaluación →'
      },
      neurologico: {
        kicker: 'Neuropsicología clínica',
        title: 'Acompañamiento especializado para procesos neurológicos complejos.',
        copy: 'En Parkinson, trastornos del movimiento, condiciones neurodegenerativas y otros procesos neurológicos, el acompañamiento integra evaluación, rehabilitación y orientación clínica.',
        href: 'servicios/#neuropsicologia',
        link: 'Conocer este acompañamiento →'
      }
    };
    const tabs = pathway.querySelectorAll('[data-path]');
    const result = pathway.querySelector('.pathway-result');
    const kicker = pathway.querySelector('.pathway-kicker');
    const title = pathway.querySelector('[data-path-title]');
    const copy = pathway.querySelector('[data-path-copy]');
    const link = pathway.querySelector('[data-path-link]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const item = content[tab.dataset.path];
        if (!item) return;
        tabs.forEach(t => {
          const active = t === tab;
          t.classList.toggle('active', active);
          t.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        result.classList.remove('is-changing');
        void result.offsetWidth;
        kicker.textContent = item.kicker;
        title.textContent = item.title;
        copy.textContent = item.copy;
        link.href = item.href;
        link.textContent = item.link;
        result.classList.add('is-changing');
      });
    });
  }

  const locationSwitcher = document.querySelector('[data-location-switcher]');
  if (locationSwitcher) {
    const content = {
      usa: { title: 'Atención virtual en español desde Estados Unidos', copy: 'Consulta desde tu casa y en tu idioma. Antes de iniciar, confirmamos que el servicio sea apropiado para tu ubicación y tus necesidades clínicas.' },
      espana: { title: 'Atención virtual en español desde España', copy: 'Un espacio clínico en español, sin importar que estés lejos de Colombia. La disponibilidad se confirma de acuerdo con tu motivo de consulta y ubicación.' },
      otros: { title: 'Atención virtual para hispanohablantes en otros países', copy: 'Si vives fuera de Colombia, puedes escribirnos indicando tu país. Revisaremos contigo si la modalidad virtual es adecuada y qué tipo de acompañamiento puede corresponder.' },
      colombia: { title: 'Atención virtual y presencial en Colombia', copy: 'En Colombia puedes consultar de manera virtual y, según disponibilidad, también de forma presencial. Indica tu modalidad preferida al solicitar la cita.' }
    };
    const tabs = locationSwitcher.querySelectorAll('[data-location-tab]');
    const card = locationSwitcher.querySelector('.location-card');
    const title = locationSwitcher.querySelector('[data-location-title]');
    const copy = locationSwitcher.querySelector('[data-location-copy]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const item = content[tab.dataset.locationTab];
        if (!item) return;
        tabs.forEach(t => {
          const active = t === tab;
          t.classList.toggle('active', active);
          t.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        card.classList.remove('is-changing');
        void card.offsetWidth;
        title.textContent = item.title;
        copy.textContent = item.copy;
        card.classList.add('is-changing');
      });
    });
  }

  const faqDetails = document.querySelectorAll('.faq-list details');
  faqDetails.forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      faqDetails.forEach(other => { if (other !== detail) other.open = false; });
    });
  });

  const parallax = document.querySelector('.parallax-media img');
  if (parallax && !reduceMotion && window.matchMedia('(min-width: 901px)').matches) {
    let ticking = false;
    const updateParallax = () => {
      const rect = parallax.parentElement.getBoundingClientRect();
      const view = window.innerHeight || document.documentElement.clientHeight;
      const center = rect.top + rect.height / 2;
      const progress = Math.max(-1, Math.min(1, (center - view / 2) / view));
      parallax.style.transform = `scale(1.05) translateY(${progress * -18}px)`;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
    updateParallax();
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
      const country = data.get('pais') || '';
      const phone = data.get('telefono') || '';
      const email = data.get('email') || '';
      const reason = data.get('motivo') || '';
      const modality = data.get('modalidad') || '';
      const message = data.get('mensaje') || '';
      const body = `Hola, soy ${name}.%0A%0APaís: ${country}%0AMotivo de consulta: ${reason}%0AModalidad: ${modality}%0ATeléfono: ${phone}%0AEmail: ${email}%0A%0A${message}`;
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
