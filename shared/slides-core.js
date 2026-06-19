// vi-slides 共用 JS：閱讀版切換、位置同步、換頁播報

function initSlides() {
    // ── aria-live 換頁播報 ──────────────────────────────
    function announceSlide() {
        const slide = Reveal.getCurrentSlide();
        const idx   = Reveal.getIndices().h + 1;
        const total = Reveal.getTotalSlides();
        const heading = slide.querySelector('h1, h2');
        const title = heading ? heading.textContent.replace(/\p{Emoji}/gu, '').trim() : '';
        const live = document.getElementById('a11y-live');
        if (!live) return;
        live.textContent = '';
        requestAnimationFrame(() => { live.textContent = `第 ${idx} 頁，共 ${total} 頁：${title}`; });
    }
    Reveal.on('ready', announceSlide);
    Reveal.on('slidechanged', announceSlide);

    // ── 閱讀版 ──────────────────────────────────────────
    const revealEl  = document.querySelector('.reveal');
    const readingEl = document.getElementById('reading-view');
    const toggleBtn = document.getElementById('toggle-reading');
    if (!readingEl || !toggleBtn) return;

    // 給每個 section 加 id、data-slide，插入「切換至投影片」連結
    const rvSections = Array.from(document.querySelectorAll('#reading-view section'));
    let currentReadingSlide = 1;

    rvSections.forEach((sec, i) => {
        const n = i + 1;
        sec.id = 'rv-' + n;
        sec.dataset.slide = n;
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'rv-slide-link';
        a.textContent = '↑ 切換至投影片第 ' + n + ' 頁';
        a.addEventListener('click', e => { e.preventDefault(); toPresentation(n); });
        sec.appendChild(a);
    });

    // IntersectionObserver：追蹤目前閱讀到哪一頁
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) currentReadingSlide = +e.target.dataset.slide; });
    }, { rootMargin: '-35% 0px -35% 0px', threshold: 0 });
    rvSections.forEach(s => io.observe(s));

    function toPresentation(slideNum) {
        readingEl.hidden = true;
        revealEl.hidden  = false;
        toggleBtn.textContent = '切換閱讀版';
        toggleBtn.setAttribute('aria-pressed', 'false');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        if (slideNum != null) Reveal.slide(slideNum - 1);
    }

    toggleBtn.addEventListener('click', function () {
        const goReading = readingEl.hidden;
        if (goReading) {
            const cur = Reveal.getIndices().h + 1;
            readingEl.hidden = false;
            revealEl.hidden  = true;
            this.textContent = '切換簡報版';
            this.setAttribute('aria-pressed', 'true');
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflow = 'auto';
            const target = document.getElementById('rv-' + cur);
            if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);
            readingEl.focus();
        } else {
            toPresentation(currentReadingSlide);
        }
    });

    // 窄螢幕（平板直式／手機）自動切閱讀版
    function applyNarrowMode() {
        if (window.innerWidth <= 900 && readingEl.hidden) {
            readingEl.hidden = false;
            revealEl.hidden  = true;
            toggleBtn.textContent = '切換簡報版';
            toggleBtn.setAttribute('aria-pressed', 'true');
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflow = 'auto';
        } else if (window.innerWidth > 900 && !readingEl.hidden &&
                   toggleBtn.getAttribute('aria-pressed') !== 'true') {
            // 只有非手動切換時才自動還原
            readingEl.hidden = true;
            revealEl.hidden  = false;
            toggleBtn.textContent = '切換閱讀版';
            toggleBtn.setAttribute('aria-pressed', 'false');
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
    }
    applyNarrowMode();
    window.addEventListener('resize', applyNarrowMode);
}
