
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.brand').forEach(brand => {
    brand.addEventListener('click', event => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const target = brand.getAttribute('href');
      if (target === '#top') event.preventDefault();

      brand.classList.remove('brand-bounce');
      void brand.offsetWidth;
      brand.classList.add('brand-bounce');

      setTimeout(() => {
        brand.classList.remove('brand-bounce');
        if (target === '#top') {
          document.querySelector('#top')?.scrollIntoView({ behavior: 'smooth' });
          history.replaceState(null, '', '#top');
        }
      }, 760);
    });
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const copyEmailButton = document.querySelector('#copy-email');
  if (copyEmailButton) {
    copyEmailButton.addEventListener('click', async () => {
      const email = document.querySelector('#email-address')?.textContent?.trim() || 'mail@ricardorusso.com';
      try {
        await navigator.clipboard.writeText(email);
        const original = copyEmailButton.textContent;
        copyEmailButton.textContent = 'Copied';
        setTimeout(() => { copyEmailButton.textContent = original; }, 1600);
      } catch {
        window.prompt('Copy this email address:', email);
      }
    });
  }

  // Close native mobile menu after choosing an item.
  const mobileNav = document.querySelector('.mobile-nav');
  mobileNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.removeAttribute('open'));
  });
});


/* v8 modular content renderer */
document.addEventListener('DOMContentLoaded', () => {
  const esc = (value = '') => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const careerMount = document.querySelector('#career-content');
  const career = window.rrCareerContent;

  if (careerMount && career) {
    const pattern = career.pattern.map(item => `
      <div>
        <span>${esc(item.label)}</span>
        <strong>${esc(item.value)}</strong>
      </div>
    `).join('');

    const entries = career.entries.map((item, index) => `
      <article class="career-chapter${item.current ? ' career-chapter-current' : ''}">
        <div class="career-rail"><span class="career-dot"></span></div>
        <div class="career-meta">
          <span>${esc(item.years)}</span>
          <strong>${esc(item.employer)}</strong>
          ${item.client ? `<em class="career-client">${esc(item.client)}</em>` : ''}
        </div>
        <div class="career-story">
          <p class="career-signal">${esc(item.signal)}</p>
          <h3>${esc(item.role)}</h3>
          <p>${esc(item.text)}</p>
          ${item.proof ? `<p class="career-proof"><strong>${esc(item.proofLabel || 'Proof')}:</strong> ${esc(item.proof)}</p>` : ''}
        </div>
      </article>
    `).join('');

    careerMount.innerHTML = `
      <div class="section-head career-head">
        <p class="eyebrow">${esc(career.eyebrow)}</p>
        <h2>${esc(career.heading)}</h2>
        <p class="lead">${esc(career.lead)}</p>
      </div>

      <div class="career-pattern" aria-label="Career progression pattern">
        ${pattern}
      </div>

      <div class="career-timeline">
        ${entries}
      </div>

      <div class="career-conclusion">
        <div>
          <p class="eyebrow">${esc(career.conclusionEyebrow)}</p>
          <h3>${esc(career.conclusionHeading)}</h3>
          <p>${esc(career.conclusionText)}</p>
        </div>
        <a class="button primary" href="Ricardo_Russo_Executive_Profile.pdf" download>Download executive profile ↓</a>
      </div>
    `;
  }

  const transformationMount = document.querySelector('#transformation-content');
  const transformation = window.rrTransformationContent;

  if (transformationMount && transformation) {
    const lenses = transformation.lenses.map((item, index) => `
      <article class="consequence-card">
        <span>${String(index + 1).padStart(2, '0')}</span>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.text)}</p>
      </article>
    `).join('');

    transformationMount.innerHTML = `
      <div class="transformation-intro">
        <div class="section-head compact">
          <p class="eyebrow">${esc(transformation.eyebrow)}</p>
          <h2>${esc(transformation.heading)}</h2>
        </div>
        <div class="transformation-copy">
          <p class="transformation-lead">${esc(transformation.lead)}</p>
          <p>${esc(transformation.statement)}</p>
        </div>
      </div>

      <div class="consequence-grid">
        ${lenses}
      </div>

      <div class="economic-test">
        <span>${esc(transformation.testTitle)}</span>
        <p>${esc(transformation.test)}</p>
      </div>
    `;
  }

  const perspectivesSection = document.querySelector('#perspectives');
  const perspectivesMount = document.querySelector('#perspectives-content');
  const perspectives = window.rrPerspectivesContent;

  if (perspectivesSection && perspectivesMount && perspectives?.items?.length) {
    const items = perspectives.items.map(item => `
      <article class="perspective-card">
        ${item.date ? `<span>${esc(item.date)}</span>` : ''}
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.summary)}</p>
      </article>
    `).join('');

    perspectivesMount.innerHTML = `
      <div class="section-head">
        <p class="eyebrow">${esc(perspectives.eyebrow)}</p>
        <h2>${esc(perspectives.heading)}</h2>
      </div>
      <div class="perspectives-grid">${items}</div>
    `;
    perspectivesSection.hidden = false;
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const mount = document.querySelector('#capabilities-content');
  const data = window.rrCapabilitiesContent;
  if (!mount || !data) return;

  const esc2 = (value = '') => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const items = data.items.map((item, index) => `
    <article class="capability-card">
      <span>${String(index + 1).padStart(2, '0')}</span>
      <h3>${esc2(item.title)}</h3>
      <p>${esc2(item.text)}</p>
    </article>
  `).join('');

  mount.innerHTML = `
    <div class="section-head capability-head">
      <p class="eyebrow">${esc2(data.eyebrow)}</p>
      <h2>${esc2(data.heading)}</h2>
      <p class="lead">${esc2(data.lead)}</p>
    </div>
    <div class="capability-grid">${items}</div>
    <div class="capability-foundation">
      <span>${esc2(data.foundationTitle)}</span>
      <p>${esc2(data.foundation)}</p>
    </div>
  `;
});
