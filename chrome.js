/* ============================================================
   Shared chrome (nav + footer) — injected into each page.
   Pass a `basePath` via data-base on <body> (default "./").
   ============================================================ */
(function(){
  const page = document.body.dataset.page || "";
  const base = document.body.dataset.base || "./";

  // ───── NAV ─────
  const nav = document.createElement("header");
  nav.className = "nav";
  nav.id = "siteNav";
  nav.innerHTML = `
    <div class="container nav-inner">
      <a href="${base}index.html" class="brand">Deepen Vora</a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="primaryNav" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
      <nav id="primaryNav" class="primary-nav">
        <a href="${base}index.html#work" class="nav-link ${page==='work'?'is-active':''}">Projects</a>
        <a href="${base}about.html" class="nav-link ${page==='about'?'is-active':''}">About</a>
        <a href="${base}experiments.html" class="nav-link ${page==='experiments'?'is-active':''}">Experiments</a>
        <a href="${base}assets/deepen_resume.pdf" class="btn btn-primary btn-sm" id="resumeBtn" target="_blank" download="deepen_resume.pdf">
          Resume
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </a>
      </nav>
    </div>`;
  document.body.prepend(nav);

  // ───── FOOTER ─────
  const ft = document.createElement("div");
  ft.innerHTML = `
    <section class="status">
      <div class="container status-inner">
        <span class="avail-chip avail-chip-lg"><span class="dot"></span> Available for work</span>
        <button class="back-top" id="backTop">Back to top <span class="back-arrow" style="background-color: rgb(255, 168, 97)">↑</span></button>
      </div>
    </section>
    <footer class="footer" id="contact">
      <div class="container">
        <div class="row footer-row">
          <div class="col-md-6 footer-me">
            <div class="me-card">
          <img src="${base}assets/about/profile.png" alt="" class="me-avatar"/>
          <div>
            <p class="me-name">Deepen Vora</p>
            <p class="me-role muted">Product Design Leader</p>
          </div>
        </div>
        <div class="contact-block">
          <p class="contact-label muted">Contact me</p>
          <div class="contact-rows">
            <a href="mailto:uxdeepen@gmail.com" class="contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              uxdeepen@gmail.com
            </a>
            <a href="tel:9980210859" class="contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              9980210859
            </a>
          </div>
        </div>
          </div>
          <div class="col-md-6 footer-connect">
            <h3 class="connect-title">Let's Connect</h3>
            <p class="connect-sub">Feel free to reach out for collaborations or just a friendly hello.</p>
            <div class="connect-socials">
              <a href="https://www.linkedin.com/in/deepenvora/" target="_blank" rel="noopener" class="social-ic social-ic-lg" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              <a href="https://x.com/deepenv" target="_blank" rel="noopener" class="social-ic social-ic-lg" aria-label="Twitter / X"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="https://www.instagram.com/deepenv/" target="_blank" rel="noopener" class="social-ic social-ic-lg" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="https://medium.com/@deepenv" target="_blank" rel="noopener" class="social-ic social-ic-lg" aria-label="Medium"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg></a>
              <a href="https://www.behance.net/deepenvora" target="_blank" rel="noopener" class="social-ic social-ic-lg" aria-label="Behance"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029zm-7.686-4.386h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.386c3.42 0 5.465-1.537 5.465-4.522 0-1.882-.83-3.205-2.303-3.681 1.07-.543 1.649-1.53 1.649-2.797 0-2.777-2.07-3.999-4.905-3.999H0V19zM3 6h3.584c1.391 0 2.44.388 2.44 1.73 0 1.14-.672 1.645-2.114 1.645H3zm0 6h3.879c1.551 0 2.564.563 2.564 2.104 0 1.597-1.164 2.044-2.613 2.044H3z"/></svg></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Made with <span class="heart">♥</span> by Deepen using AI</p>
        </div>
      </div>
    </footer>`;
  while(ft.firstChild) document.body.appendChild(ft.firstChild);

  // Nav toggle
  const toggle = nav.querySelector(".nav-toggle");
  const menu   = nav.querySelector("#primaryNav");
  toggle.addEventListener("click", ()=>{
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    menu.classList.remove("open"); toggle.setAttribute("aria-expanded","false");
  }));

  // Back to top
  const bt = document.getElementById("backTop");
  if(bt) bt.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));

  // Resume now uses a real download link — no stub needed
  const rb = document.getElementById("resumeBtn");
  if(rb && rb.tagName === 'BUTTON') rb.addEventListener("click", (e)=>{
    e.preventDefault();
    window.open(rb.closest('[data-base]')?.dataset?.base + 'assets/deepen_resume.pdf', '_blank');
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
    });
  },{threshold:.12});
  document.querySelectorAll(".reveal-on-scroll, .work-card, .leader-card, .testi, .section-head, .article-card, .exp-card, .image-card")
    .forEach(n=>{ n.classList.add("reveal"); io.observe(n); });
})();
