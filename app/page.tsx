"use client";

import { useEffect } from "react";

const campaigns = [
  {
    number: "01",
    title: "WHITE/OUT",
    client: "OAKLEY",
    discipline: "ART DIRECTION / POSTER",
    image: "work/oakley.webp",
    tone: "red",
  },
  {
    number: "02",
    title: "NO SIGNAL",
    client: "ARC’TERYX",
    discipline: "CAMPAIGN / OUTDOOR",
    image: "work/arcteryx.webp",
    tone: "acid",
  },
  {
    number: "03",
    title: "QUIET FORM",
    client: "SONY",
    discipline: "VISUAL CAMPAIGN",
    image: "work/sony.webp",
    tone: "blue",
  },
  {
    number: "04",
    title: "SECOND SKIN",
    client: "MUGLER",
    discipline: "FASHION / EDITORIAL",
    image: "work/mugler.webp",
    tone: "peach",
  },
  {
    number: "05",
    title: "UMBRAL",
    client: "FESTIVAL DE MÚSICA",
    discipline: "CULTURAL IDENTITY / POSTER",
    image: "work/umbral.webp",
    tone: "pink",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg className={`logo-mark ${className}`} viewBox="0 0 140 100" aria-hidden="true">
      <path
        className="logo-primary"
        fillRule="evenodd"
        d="M7 90 39 10h20l32 80H68l-7-20H33l-7 20H7Zm32-38h16l-8-23-8 23Z"
      />
      <path
        className="logo-accent"
        d="M73 10h60v19h-19v35c0 20-12 30-32 30-15 0-26-6-33-16l15-13c5 7 10 10 17 10 8 0 12-4 12-12V29H73V10Z"
      />
    </svg>
  );
}

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    const cursor = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let raf = 0;

    const animateCursor = () => {
      ringX += (pointerX - ringX) * 0.14;
      ringY += (pointerY - ringY) * 0.14;
      if (cursor) cursor.style.transform = "translate3d(" + pointerX + "px," + pointerY + "px,0)";
      if (ring) ring.style.transform = "translate3d(" + ringX + "px," + ringY + "px,0)";
      raf = requestAnimationFrame(animateCursor);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      root.style.setProperty("--mx", String(event.clientX / window.innerWidth - 0.5));
      root.style.setProperty("--my", String(event.clientY / window.innerHeight - 0.5));
    };

    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = height > 0 ? window.scrollY / height : 0;
      if (progress) progress.style.transform = "scaleX(" + ratio + ")";
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }),
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    document.querySelectorAll<HTMLElement>("a, .project-card").forEach((element) => {
      element.addEventListener("mouseenter", () => root.classList.add("cursor-active"));
      element.addEventListener("mouseleave", () => root.classList.remove("cursor-active"));
    });

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    animateCursor();
    onScroll();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main>
      <div className="loader" aria-hidden="true">
        <LogoMark className="loader-logo" />
        <i />
      </div>
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Volver al inicio">
          <LogoMark />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#about">Perfil</a>
          <a href="#work">Trabajo</a>
          <a href="#web">Web</a>
          <a href="#three-d">3D</a>
          <a href="#interior">Interior</a>
          <a href="#contact">Contacto</a>
        </nav>
        <p>PERÚ / 2026</p>
      </header>

      <section className="hero" id="top">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-meta">
          <p>PORTFOLIO / SELECTED WORK</p>
          <p>VISUAL DESIGNER<br />CHICLAYO / PERÚ</p>
        </div>
        <h1 className="hero-name" aria-label="Anderson Julca">
          <span>ANDERSON</span>
          <span className="outline">JULCA</span>
        </h1>
        <div className="portrait-frame">
          <div className="portrait-code">AJ—09 / VISUAL STUDIES</div>
          <img src="anderson-portrait.webp" alt="Retrato editorial de Anderson Julca" />
        </div>
        <div className="hero-bottom">
          <p>
            DIRECCIÓN DE ARTE<br />
            DISEÑO WEB<br />
            FOTOGRAFÍA / 3D
          </p>
          <a href="#work">EXPLORAR TRABAJO <span>↘</span></a>
        </div>
      </section>

      <div className="marquee" aria-label="Disciplinas creativas">
        <div className="marquee-track">
          <div className="marquee-group">
            <span>DIRECCIÓN DE ARTE</span><i>✦</i>
            <span>DISEÑO VISUAL</span><i>✦</i>
            <span>WEB DESIGN</span><i>✦</i>
            <span>MODELADO 3D</span><i>✦</i>
            <span>FOTOGRAFÍA</span><i>✦</i>
          </div>
          <div className="marquee-group" aria-hidden="true">
            <span>DIRECCIÓN DE ARTE</span><i>✦</i>
            <span>DISEÑO VISUAL</span><i>✦</i>
            <span>WEB DESIGN</span><i>✦</i>
            <span>MODELADO 3D</span><i>✦</i>
            <span>FOTOGRAFÍA</span><i>✦</i>
          </div>
        </div>
      </div>

      <section className="about section-pad" id="about">
        <div className="section-index reveal">01 / PERFIL</div>
        <div className="about-title reveal">
          <h2>IDEAS QUE<br />SE PUEDEN<br /><em>VER</em></h2>
        </div>
        <div className="about-copy reveal">
          <p className="lead">
            Soy Anderson Julca, diseñador visual en formación. Trabajo entre imagen, espacio y movimiento para construir piezas con concepto e identidad
          </p>
          <p>
            Me interesa que cada proyecto tenga un lenguaje propio: desde campañas editoriales y fotografía hasta experiencias web y personajes 3D
          </p>
        </div>
        <div className="about-list reveal">
          <p>ENFOQUE</p>
          <div><span>01</span><strong>Dirección de arte</strong></div>
          <div><span>02</span><strong>Diseño editorial</strong></div>
          <div><span>03</span><strong>Web y experiencia</strong></div>
          <div><span>04</span><strong>Modelado 3D</strong></div>
        </div>
        <div className="about-note reveal">
          <LogoMark className="about-logo" />
          <p>DISEÑO VISUAL<br />CHICLAYO<br />PERÚ</p>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="work-heading reveal">
          <p>02 / SELECTED WORK</p>
          <h2>TRABAJO<br /><span>SELECCIONADO</span></h2>
          <small>CAMPAÑA / EDITORIAL / CULTURA</small>
        </div>
        <div className="projects-grid">
          {campaigns.map((project) => (
            <article className={"project-card reveal " + project.tone} key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title + " — " + project.client} />
                <span className="project-view"><Arrow /></span>
              </div>
              <div className="project-info">
                <span>{project.number}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.client}</p>
                </div>
                <small>{project.discipline}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="web-case" id="web">
        <div className="web-background">
          <img src="work/mali.webp" alt="MALI — Museo en movimiento" />
        </div>
        <div className="web-overlay" />
        <div className="web-copy reveal">
          <p>06 / WEB DESIGN / EXPERIENCE</p>
          <h2>MUSEO<br />EN <em>MOVIMIENTO</em></h2>
          <span>REDISEÑO CONCEPTUAL DEL MUSEO DE ARTE DE LIMA</span>
          <a href="https://mali-museo-vivo.andersonj.chatgpt.site" target="_blank" rel="noreferrer">
            VISITAR EXPERIENCIA <Arrow />
          </a>
        </div>
        <div className="web-device reveal">
          <div className="browser-bar"><i /><i /><i /><span>mali.pe / conceptual</span></div>
          <img src="work/mali.webp" alt="" />
        </div>
      </section>

      <section className="characters section-pad" id="three-d">
        <div className="characters-heading reveal">
          <p>07 / CHARACTER DESIGN / 3D</p>
          <h2>VOLUMEN<br /><span>Y CARÁCTER</span></h2>
          <small>MODELADO / TEXTURA / ILUMINACIÓN<br />TRES ESTUDIOS DE PERSONAJE</small>
        </div>
        <div className="render-pair">
          <figure className="reveal">
            <img src="work/character-baker.webp" alt="Render 3D del personaje The Baker" />
            <figcaption><span>01</span> THE BAKER</figcaption>
          </figure>
          <figure className="reveal">
            <img src="work/character-everyday.webp" alt="Render 3D del personaje Everyday" />
            <figcaption><span>02</span> EVERYDAY</figcaption>
          </figure>
          <figure className="reveal">
            <img src="work/forest-warden-render.jpg" alt="Render 3D del personaje Forest Warden en un bosque" />
            <figcaption><span>03</span> FOREST WARDEN</figcaption>
          </figure>
        </div>
        <div className="sketch-section reveal">
          <div>
            <p>PROCESS / TURNAROUNDS</p>
            <h3>LA FORMA ANTES DEL MATERIAL</h3>
            <span>Proporción / silueta / vestuario / accesorios</span>
          </div>
          <figure>
            <img src="work/sketch-baker-2026.jpg" alt="Turnaround actualizado del personaje The Baker" />
            <figcaption>THE BAKER / TURNAROUND</figcaption>
          </figure>
          <figure>
            <img src="work/sketch-everyday-2026.jpg" alt="Hoja de diseño actualizada del personaje Everyday" />
            <figcaption>EVERYDAY / CHARACTER SHEET</figcaption>
          </figure>
          <figure>
            <img src="work/forest-warden-concept.jpg" alt="Bocetos conceptuales del personaje Forest Warden" />
            <figcaption>FOREST WARDEN / CONCEPT SHEET</figcaption>
          </figure>
        </div>
      </section>

      <section className="interior-case section-pad" id="interior">
        <div className="interior-heading reveal">
          <p>08 / INTERIOR DESIGN / ARCHVIZ</p>
          <h2>CALMA<br /><em>HABITADA</em></h2>
          <div>
            <p>Un estudio de interior contemporáneo construido desde la forma, los materiales y la luz.</p>
            <span>MODELADO 3D / MATERIALES / ILUMINACIÓN / RENDER</span>
          </div>
        </div>

        <figure className="interior-hero reveal">
          <img src="work/interior-day-wide.jpg" alt="Sala contemporánea renderizada con iluminación natural" />
          <figcaption><span>01</span> VISTA GENERAL / DAYLIGHT</figcaption>
        </figure>

        <div className="interior-process reveal">
          <figure>
            <img src="work/interior-clay.jpg" alt="Clay render del modelado de la sala" />
            <figcaption><span>02</span> FORMA / CLAY RENDER</figcaption>
          </figure>
          <figure>
            <img src="work/interior-day-front.jpg" alt="Vista frontal de la sala con materiales e iluminación cálida" />
            <figcaption><span>03</span> MATERIAL / LIGHT STUDY</figcaption>
          </figure>
        </div>

        <figure className="interior-evening reveal">
          <img src="work/interior-evening.jpg" alt="Render nocturno de la sala con chimenea e iluminación ambiental" />
          <figcaption>
            <span>04 / EVENING SCENE</span>
            <strong>LA LUZ CAMBIA EL ESPACIO</strong>
          </figcaption>
        </figure>

        <div className="interior-film reveal">
          <div>
            <p>05 / FULL RENDER</p>
            <h3>RECORRIDO<br />DEL ESPACIO</h3>
            <span>Video renderizado / dirección de cámara / atmósfera</span>
          </div>
          <video
            controls
            playsInline
            preload="metadata"
            poster="work/interior-day-wide.jpg"
            aria-label="Recorrido renderizado del diseño interior"
          >
            <source src="work/interior-walkthrough.mp4" type="video/mp4" />
            Tu navegador no puede reproducir este video.
          </video>
        </div>
      </section>

      <section className="closing" id="contact">
        <p className="reveal">09 / CONTACTO</p>
        <h2 className="reveal">HAGAMOS<br /><span>ALGO BUENO</span></h2>
        <div className="contact-links reveal">
          <a href="mailto:andersonlbvlk@hotmail.com">
            <small>CORREO</small>
            <strong>andersonlbvlk@hotmail.com</strong>
            <Arrow />
          </a>
          <a href="https://www.instagram.com/andersonjulca15/" target="_blank" rel="noreferrer">
            <small>INSTAGRAM</small>
            <strong>@andersonjulca15</strong>
            <Arrow />
          </a>
          <a href="https://wa.me/51935983711" target="_blank" rel="noreferrer">
            <small>WHATSAPP</small>
            <strong>+51 935 983 711</strong>
            <Arrow />
          </a>
        </div>
        <div className="closing-meta reveal">
          <p>DISPONIBLE PARA<br />PRÁCTICAS Y COLABORACIONES</p>
          <p>CHICLAYO / PERÚ</p>
          <a href="#top">VOLVER ARRIBA ↑</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><LogoMark /><strong>ANDERSON JULCA</strong></div>
        <span>VISUAL DESIGNER / 2026</span>
        <span>IDEAS HECHAS VISIBLES</span>
      </footer>
    </main>
  );
}
