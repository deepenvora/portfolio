/* ============================================================
   Deepen Vora — Portfolio interactions
   ============================================================ */

// ---------- Data ----------
const PROJECTS = [
  {
    id:"famli", title:"Famli App",
    desc:"Simplified a family wealth management app by turning complex financial data into clear, intuitive experiences.",
    img:"assets/home/famli-app.png", thumbClass:"thumb-famli",
    tags:[{l:"B2C",c:"purple"},{l:"0→1",c:""},{l:"Fintech",c:""}],
    outcomes:[
      {v:"28%↑", l:"Decisions Made"},
      {v:"User Trust", l:"& Clarity"},
      {v:"User Control", l:"& Guidance"}
    ],
    long:{
      tagline:"Making complex family finances feel approachable.",
      problem:"Families struggled to get a single, intuitive view of investments, insurance, and wealth planning across multiple advisors and products.",
      approach:"I led research with 20+ high-income households, mapped the family wealth lifecycle, and built a modular dashboard that layered clarity over complexity — progressive disclosure, plain-language framings, and a shared 'family view' for decision-making.",
      outcomes:["Improved decision-making velocity by 28% across tested households","Raised user trust scores on 'I understand my money' from 4.2 → 7.6","Activation on goal-planning flows doubled in month one"]
    }
  },
  {
    id:"otc", title:"OTC Marketplace Seller Portal",
    desc:"Enable Sellers to List Products and Process Orders on the Platform at scale.",
    img:"assets/home/otc-sp.png", thumbClass:"thumb-otc",
    tags:[{l:"B2B",c:"green"},{l:"Scale",c:""},{l:"Marketplace",c:""}],
    outcomes:[
      {v:"10 → 236", l:"Scaled Sellers"},
      {v:"8,960", l:"Orders / day"},
      {v:"₹850", l:"Increased AOV"}
    ],
    long:{
      tagline:"From 10 sellers to 236, and growing.",
      problem:"Sellers had no self-serve path to list, manage inventory, and process orders — every change funneled through ops, creating bottlenecks.",
      approach:"Designed a modular seller portal with bulk-upload, order-state machines, and a clarity-first dashboard. Ran weekly shadow sessions with sellers to refine workflows and kill dead clicks.",
      outcomes:["Reduced time-to-list from 48h → 12 minutes","Cut seller-ops support tickets by 64%","Increased average order value by ₹850 through smarter cross-sell surfaces"]
    }
  },
  {
    id:"phlebo", title:"Phlebotomist App",
    desc:"Improving the efficiency of sample collection for Phlebotomists on home visits for Thyrocare customers.",
    img:"assets/home/phlebo.png", thumbClass:"thumb-phlebo",
    tags:[{l:"B2B2C",c:"blue"},{l:"Native",c:""},{l:"Ops",c:""}],
    outcomes:[
      {v:"45 → 25 min", l:"Avg TAT / visit"},
      {v:"₹1154 → ₹1732", l:"Revenue / user"},
      {v:"50% ↓", l:"Cancellations"}
    ],
    long:{
      tagline:"Designed for one hand, bright sunlight, and hurry.",
      problem:"Phlebotomists juggled paper forms, a clunky legacy app, and customer anxiety — leading to long turnarounds and high cancellations.",
      approach:"Shadowed 30+ field visits, redesigned the app around a single-thumb flow with offline-first sync, clear state cues, and script prompts for customer interaction.",
      outcomes:["Average visit time down from 45 to 25 minutes","Revenue per active user up 50% with better cross-test suggestions","Cancellations halved"]
    }
  },
  {
    id:"thyro", title:"Thyrocare Franchise Diagnostics Portal",
    desc:"B2B diagnostics revamp led to increased adoption, revenue and reduction in cost.",
    img:"assets/home/tc-diag.png", thumbClass:"thumb-thyro",
    tags:[{l:"Revamp",c:"amber"},{l:"Web app",c:""},{l:"Ops Efficiency",c:""}],
    outcomes:[
      {v:"10 → 236", l:"Scaled Sellers"},
      {v:"8,960", l:"Orders / day"},
      {v:"₹850", l:"Increased AOV"}
    ],
    long:{
      tagline:"A 15-year-old portal, made modern — without breaking habits.",
      problem:"A decade-old franchise portal was showing its age. Franchisees resisted new flows; operators leaned on printouts and tribal workarounds.",
      approach:"Co-designed with 12 franchisee partners across tiers. Preserved the muscle memory of core flows while rebuilding the IA, filters, and reporting.",
      outcomes:["Adoption of new reporting workflow: 86% in 6 weeks","Cost-per-report down by 22%","Support tickets for 'where is X' questions reduced by 71%"]
    }
  }
];

const LEADERS = [
  {img:"assets/home/il-advocacy.png", t:"Design Advocacy & Stakeholder Alignment", d:"Drive clarity across product, engineering, business by translating ambiguity into focused, high-impact design decisions."},
  {img:"assets/home/il-process.png", t:"Design Processes & Systems", d:"Introduced design rituals and systems that brought clarity, reduced ambiguity, and enabled teams to move faster together."},
  {img:"assets/home/il-lead.png", t:"Leading & Mentoring Designers", d:"Lead by doing — setting the quality bar through hands-on design while mentoring designers to think in systems, not screens."},
  {img:"assets/home/il-scale.png", t:"Built 0 → 1 & Made Them Scale", d:"Worked across the lifecycle — from early concepts to scaled systems — shaping products that evolved with the business."}
];

const TESTIMONIALS = [
  {q:"Deepen has been a key contributor to the design at Famli. He has a clear preference for clean, functional aesthetics and consistently backs his work with thorough competitive research. He excels at thinking in design systems, which ensures our product remains scalable as it grows. For an early-stage startup, Deepen brings a level of confidence and structure to the design process that is highly valued. I recommend Deepen to any team looking for a designer who balances practical research with a disciplined, systematic approach.", n:"Ajinkya (AJ) Ratnaparkhi", r:"Co-Founder / CPO", i:"A"},
  {q:"I worked with Deepen on a consumer fintech platform where he spearheaded the efforts to set up a new design system and visual language with scalability in mind. Overall, Deepen has a very structured approach towards solving design problems and is very easy to work with, thanks to his adaptability and range of knowledge across disciplines.", n:"Kamal Kishan", r:"Experience Designer", i:"K"},
  {q:"I had the opportunity to work with Deepen early in my time at Birla Pivot. He understood each team member's strengths and consistently assigned work that aligned with those strengths. This approach built strong ownership and gave me the space to take on meaningful projects and grow. He also emphasized continuous learning, which shaped a culture of improvement within the team. That pushed me to keep developing my skills as well. I strongly recommend him as a design leader.", n:"Soutik Mukherji", r:"Product Designer", i:"S"},
  {q:"Deepen has been a cornerstone of the B2B design team at PharmEasy, known for his strong leadership, domain expertise, and collaborative approach. As a manager and mentor, he fosters open conversations, encourages curiosity, and emphasizes building strong stakeholder relationships. His deep understanding of B2B applications and user-centered design has been invaluable in guiding teams through complex supply chain projects. Working with him has been a truly enriching learning experience.", n:"Sindhu S Rao", r:"User Experience Design & Strategy", i:"S"},
  {q:"I had the pleasure of working with Deepen as a Lead UI/UX Designer at PharmEasy. With over 15 years of experience, he brings deep expertise in solving complex design problems with intuitive, user-friendly solutions. His strong understanding of user psychology, visual design, and leadership made him an invaluable asset to the team. Calm, professional, and highly collaborative, Deepen is someone I would strongly recommend for any UI/UX leadership role.", n:"Deeptanshu Baranwal", r:"Building Capmint | Co-founder", i:"D"},
  {q:"I highly recommend Deepen as a designer and leader. I have the pleasure of working with him on various brainstorming sessions and am continually impressed by his ability to delve into the heart of a problem and devise multiple user-focused solutions. Not only is he an incredibly talented designer, but he also excels at leading and organizing his team. I found him to be a logical thinker who is unbiased and always open to new ideas. Working with Deepen is a joy, and I have no doubt that he will have a bright future ahead of him.", n:"Alok Jain", r:"Head of Design – API Holdings (PharmEasy, Thyrocare, RetailIO)", i:"A"}
];

// ---------- Render ----------
const el = (tag, cls, html)=>{const e=document.createElement(tag); if(cls) e.className=cls; if(html!=null) e.innerHTML=html; return e;};

function renderWork(){
  const list = document.getElementById("workList");
  list.innerHTML = "";
  PROJECTS.forEach((p,i)=>{
    const card = el("article", "work-card" + (i%2?" reverse":""));
    card.innerHTML = `
      <div class="work-thumb ${p.thumbClass}" data-id="${p.id}">
        <img src="${p.img}" alt="${p.title} preview" loading="lazy"/>
      </div>
      <div class="work-body">
        <h3 class="work-title"><a href="${CS_PAGE_URLS[p.id]||'case-study.html?id='+p.id}" class="work-title-link">${p.title} <span class="title-arrow">→</span></a></h3>
        <p class="work-desc">${p.desc}</p>
        <div class="tag-row">
          ${p.tags.map(t=>`<span class="tag ${t.c||""}">${t.l}</span>`).join("")}
        </div>
        <p class="outcomes-label">Key outcomes</p>
        <div class="outcomes">
          ${p.outcomes.map(o=>`<div class="outcome"><span class="outcome-val">${o.v}</span><span class="outcome-lbl">${o.l}</span></div>`).join("")}
        </div>
      </div>`;
    list.appendChild(card);
  });

  list.querySelectorAll(".work-thumb[data-id]").forEach(n=>{
    n.addEventListener("click", ()=> openModal(n.dataset.id));
  });
}

function renderLeaders(){
  const grid = document.getElementById("leaderGrid");
  grid.innerHTML = "";
  const cardStyles = [
    {card:"border-width:0px;border-radius:16px;padding:8px", ic:"background-color:rgb(255,255,255);padding:0px"},
    {card:"border-width:0px;border-radius:16px;padding:8px", ic:"background-color:rgb(255,255,255);padding:0px"},
    {card:"border-width:0px;border-radius:16px;padding:8px", ic:"background-color:rgb(255,255,255);padding:0px", col:"margin:20px 0px 0px"},
    {card:"border-width:0px;border-radius:1px;padding:8px;margin:40px 0px 0px", ic:"background-color:rgb(255,255,255);padding:0px;border-radius:0px", col:"padding:0px 0px 0px 20px;opacity:1"},
  ];
  LEADERS.forEach((l,i)=>{
    const s = cardStyles[i] || {};
    const col = el("div","col-md-6");
    if(s.col) col.setAttribute("style", s.col);
    col.innerHTML = `
      <div class="leader-card h-100" style="${s.card||''}">
        <div class="leader-ic" aria-hidden="true" style="${s.ic||''}"><img src="${l.img}" alt=""/></div>
        <div class="leader-body">
          <h3>${l.t}</h3>
          <p>${l.d}</p>
        </div>
      </div>`;
    grid.appendChild(col);
  });
}

function renderTestimonials(){
  const grid = document.getElementById("testiGrid");
  grid.innerHTML = "";

  const avatars = [
    "assets/testimonials/AJ.png",
    "assets/testimonials/kamal.png",
    "assets/testimonials/soutik.png",
    "assets/testimonials/sindhu.png",
    "assets/testimonials/deeptanshu.png",
    "assets/testimonials/alok.png"
  ];
  const durations = [15, 19, 17];

  // Split into 3 columns of 2
  const cols = [
    TESTIMONIALS.slice(0, 2),
    TESTIMONIALS.slice(2, 4),
    TESTIMONIALS.slice(4, 6)
  ];

  cols.forEach((colTestis, ci) => {
    const col = el("div", "testi-col");
    const track = el("div", "testi-track");
    track.style.setProperty("--dur", durations[ci] + "s");

    // Render items twice for seamless loop
    [0, 1].forEach(() => {
      colTestis.forEach((t, ti) => {
        const idx = ci * 2 + ti;
        const card = el("article", "testi");
        card.innerHTML = `
          <p class="testi-quote">"${t.q}"</p>
          <div class="testi-author">
            <div class="testi-avatar"><img src="${avatars[idx]}" alt="${t.n}" loading="lazy" onerror="this.parentElement.textContent='${t.i}'"/></div>
            <div>
              <p class="testi-name">${t.n}</p>
              <p class="testi-role">${t.r}</p>
            </div>
          </div>`;
        track.appendChild(card);
      });
    });

    col.appendChild(track);
    grid.appendChild(col);
  });
}

// case study link
const CS_PAGE_URLS = {famli:"famli.html",otc:"otc-seller-portal.html",phlebo:"phlebo.html",thyro:"tc-diagnostics.html"};
function openModal(id){ window.location.href = CS_PAGE_URLS[id] || "case-study.html?id=" + encodeURIComponent(id); }

// ---------- Tweaks ----------
const T = window.__TWEAKS__ || {};
function applyTweaks(){
  document.documentElement.style.setProperty("--accent", T.accent);
  document.documentElement.style.setProperty("--head-font", T.headFont);
  document.documentElement.style.setProperty("--container", T.container + "px");
  document.body.classList.toggle("dark", !!T.dark);
  const h = document.querySelector(".hero-title");
  if(h){
    // preserve accent span on the last word
    const parts = T.heroTitle.trim().split(/\s+/);
    if(parts.length > 1){
      const last = parts.pop();
      h.innerHTML = parts.join(" ") + ' <span class="accent-underline">' + last + '</span>';
    } else {
      h.innerHTML = '<span class="accent-underline">' + T.heroTitle + '</span>';
    }
  }
}
function syncTweakUI(){
  document.getElementById("twAccent").value = T.accent;
  document.getElementById("twHeadFont").value = T.headFont;
  document.getElementById("twHeroTitle").value = T.heroTitle;
  document.getElementById("twDark").checked = !!T.dark;
  document.getElementById("twContainer").value = T.container;
}
function wireTweaks(){
  const bind = (id, key, attr="value", parse=v=>v)=>{
    const node = document.getElementById(id);
    const ev = attr === "checked" ? "change" : "input";
    node.addEventListener(ev, ()=>{
      T[key] = parse(node[attr]);
      applyTweaks();
      persist({[key]: T[key]});
    });
  };
  bind("twAccent","accent");
  bind("twHeadFont","headFont");
  bind("twHeroTitle","heroTitle");
  bind("twDark","dark","checked");
  bind("twContainer","container","value", v=>Number(v));
}
function persist(edits){
  try{
    window.parent.postMessage({type:"__edit_mode_set_keys", edits}, "*");
  }catch(e){}
}

// Edit-mode host integration — register FIRST, then announce
window.addEventListener("message", (e)=>{
  const d = e.data || {};
  if(d.type === "__activate_edit_mode"){
    document.getElementById("tweaks").classList.add("open");
    document.getElementById("tweaks").setAttribute("aria-hidden","false");
  } else if (d.type === "__deactivate_edit_mode"){
    document.getElementById("tweaks").classList.remove("open");
    document.getElementById("tweaks").setAttribute("aria-hidden","true");
  }
});
try{ window.parent.postMessage({type:"__edit_mode_available"}, "*"); }catch(e){}

// ---------- Boot ----------
document.addEventListener("DOMContentLoaded", ()=>{
  if(document.getElementById("workList")) renderWork();
  if(document.getElementById("leaderGrid")) renderLeaders();
  if(document.getElementById("testiGrid")) renderTestimonials();
  if(document.getElementById("twAccent")){
    applyTweaks(); syncTweakUI(); wireTweaks();
  }
});
