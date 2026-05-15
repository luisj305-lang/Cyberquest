# Cyber Quest — Sitio Web

> **"La verdad no se adivina. Se investiga."**

Sitio web estático para **Cyber Quest Investigadores Privados**. Construido sobre el
Design System v1 de la marca (carpeta `12_Design_System/`).

---

## Estructura

```
13_Web_Site/
├── index.html         · Home — hero, sub-marcas, áreas, manifiesto, testimonios, CTA
├── servicios.html     · Áreas de investigación + paquetes Agencia + Whistleblower IRS
├── academy.html       · Curso "Cómo ser investigador privado" — temario, beneficios, FAQ
├── manifiesto.html    · Manifiesto completo + valores + lo que NO somos
├── contacto.html      · Formulario "abrir un caso" + aviso legal
└── assets/
    ├── tokens.css                    · Tokens de marca (color, type, spacing, motion)
    ├── styles.css                    · CSS consolidado del sitio
    ├── logo-*.svg                    · Sistema de logo (6 versiones)
    ├── icons.svg                     · Set de iconos propio
    ├── texture-grid.svg              · Trama blueprint
    ├── stamp-confidencial.svg
    ├── founder-luis-jimenez.jpg      · Retrato del fundador (página Academy)
    └── investigator-silhouette.jpg   · Key visual del hero
```

---

## Cómo desplegar en GitHub Pages

El repositorio actual es `luisj305-lang/Cyberquest` (https://luisj305-lang.github.io/Cyberquest/).
Para reemplazar la versión actual por esta:

1. Copia todo el contenido de la carpeta `13_Web_Site/` a la raíz del repositorio
   (los archivos `.html` deben estar en la raíz y la carpeta `assets/` al lado).
2. Commit + push a la rama configurada para Pages (normalmente `main` o `gh-pages`).
3. En *Settings → Pages* del repositorio verifica que la rama y carpeta apunten a la raíz (`/`).
4. La URL pública seguirá siendo `https://luisj305-lang.github.io/Cyberquest/`.

> Si prefieres subdominio propio (ej. `cyberquest.com`), añade un archivo `CNAME` con el dominio
> y configura los DNS de tu proveedor.

---

## Cómo probar localmente

Cualquier servidor estático sirve. La vía más simple:

```
# Python
python3 -m http.server 8080

# Node
npx http-server . -p 8080
```

Luego abre `http://localhost:8080`.

> Abrir los `.html` con doble clic también funciona, aunque algunos navegadores bloquean
> recursos cargados con `file://`.

---

## Identidad y reglas

- **Tipografía:** Oswald (display), Montserrat (UI), Inter (body), JetBrains Mono (mono).
  Cargadas vía Google Fonts en `tokens.css`.
- **Color acento:** `#0066FF` (azul eléctrico) según el Design System v1. La variable
  `--cq-red` se mantiene por compatibilidad con los mockups, pero su valor actual es azul.
  Si quieres volver al rojo `#A8112A` (versión brief), edita `assets/tokens.css` y
  reemplaza el valor de `--cq-red`.
- **Voz:** seria pero no solemne. Vocabulario propio: caso, expediente, pista, evidencia,
  observación, OSINT, cronología, sala de operaciones. Sin emojis. Sin signos de exclamación.

---

## Pendientes / siguientes mejoras

- [ ] Conectar el formulario de contacto a un backend real
      (Formspree, Netlify Forms o función serverless).
- [ ] Añadir página de blog y conectar artículos del directorio `05_Blog/`.
- [ ] Crear página de gracias + entrega del lead magnet `06_Lead_Magnet/Guia_OSINT_10_Pasos.pdf`.
- [ ] Añadir Open Graph images (1200×630) específicas para cada página.
- [ ] Sitemap.xml + robots.txt cuando se mueva a dominio propio.
- [ ] Integrar Plausible o GA4 para analítica básica.

---

*La verdad no se adivina. Se investiga.*
