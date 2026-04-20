# 🔎 CyberQuest — Sitio Web Oficial

Sitio web profesional de **CyberQuest**, agencia de investigación digital y OSINT.

> **Tagline:** *"Descubrimos lo que otros no pueden ver."*
> **Cobertura:** EE.UU. · Colombia · Mundial
> **Contacto:** +1 862 812 098

---

## 📁 Estructura del proyecto

```
cyberquest-website/
├── index.html              ← Página principal (single-page)
├── css/
│   └── styles.css          ← Sistema de diseño completo
├── js/
│   └── main.js             ← Formulario, animaciones, scroll
├── assets/
│   ├── investigator-profile.jpg
│   └── brand-card.jpg
├── .nojekyll               ← Evita que GitHub procese con Jekyll
└── README.md               ← Este archivo
```

---

## 🚀 Cómo subir a GitHub y publicar (paso a paso)

### ✅ Opción A — Método fácil (sin instalar nada, desde el navegador)

Esta es la forma más rápida si no tienes Git instalado.

**1. Crear el repositorio**
- Entra a https://github.com/ e inicia sesión (o crea cuenta gratis)
- Arriba a la derecha haz click en **"+" → "New repository"**
- Nombre sugerido: `cyberquest-website`
- Marca **Public** (obligatorio para usar GitHub Pages gratis)
- **NO marques** "Add a README file" (ya tienes uno)
- Click en **"Create repository"**

**2. Subir los archivos**
- En la página del repositorio recién creado verás un enlace que dice **"uploading an existing file"** — haz click ahí
- Arrastra TODOS los archivos y carpetas del proyecto (`index.html`, `css/`, `js/`, `assets/`, `.nojekyll`, `README.md`)
- Abajo escribe un mensaje como *"Sitio inicial CyberQuest"*
- Click en **"Commit changes"**

**3. Activar GitHub Pages**
- En tu repositorio, ve a **Settings** (arriba a la derecha)
- En el menú izquierdo, click en **Pages**
- En **"Source"** selecciona: `Deploy from a branch`
- En **"Branch"** selecciona: `main` → carpeta `/ (root)` → **Save**
- Espera 1–2 minutos

**4. ¡Listo!** Tu sitio estará en:
```
https://TU-USUARIO.github.io/cyberquest-website/
```

---

### ⚡ Opción B — Con Git (terminal)

Si ya tienes Git instalado:

```bash
cd cyberquest-website
git init
git add .
git commit -m "Sitio inicial CyberQuest"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/cyberquest-website.git
git push -u origin main
```

Luego activa Pages como en el paso 3 de la Opción A.

---

## 🌐 Dominio personalizado (opcional)

Si quieres usar un dominio propio tipo `cyberquest.com` en vez de `github.io`:

1. Compra el dominio en Namecheap, GoDaddy, etc.
2. En GitHub Pages → **Custom domain** → escribe tu dominio
3. En tu proveedor de dominio, agrega estos registros DNS:
   - `A` → `185.199.108.153`
   - `A` → `185.199.109.153`
   - `A` → `185.199.110.153`
   - `A` → `185.199.111.153`
   - `CNAME` → `TU-USUARIO.github.io`
4. Espera unas horas a que propague

---

## ✏️ Cómo editar el contenido

### Cambiar el número de WhatsApp
Reemplaza `1862812098` por el tuyo (formato internacional sin `+`, sin espacios) en:
- `index.html` → buscar `wa.me/1862812098` (aparece 3 veces)
- `js/main.js` → buscar `wa.me/1862812098` (1 vez)

### Cambiar los servicios, textos, colores
- **Textos y servicios:** Edita `index.html`
- **Colores, tipografías, espaciado:** Edita las variables al inicio de `css/styles.css`
- **Lógica del formulario:** Edita `js/main.js`

### Cambiar las imágenes
Reemplaza los archivos en `assets/` manteniendo los mismos nombres, o actualiza las referencias en `index.html`.

---

## 🎨 Sistema de diseño

Colores principales:
- **Fondo:** `#0A0A0A` (negro profundo)
- **Acento:** `#00D4FF` (cyan eléctrico)
- **Texto:** `#FFFFFF` / `#C0C0C0`

Tipografías (desde Google Fonts):
- **Display:** Orbitron (marca)
- **Títulos:** Rajdhani
- **Cuerpo:** Inter
- **Mono/Datos:** JetBrains Mono

---

## 📱 Secciones del sitio

1. **Hero** — Título, eslogan, CTAs principales, foto del investigador
2. **Stats** — Contadores animados (casos, respuesta, confidencialidad)
3. **Servicios** — 6 servicios con iconos (OSINT, Person Tracing, etc.)
4. **Nosotros** — Features + ficha de datos estilo "case file"
5. **Proceso** — 4 pasos de trabajo
6. **Contacto** — Formulario que abre WhatsApp con el mensaje armado
7. **Footer** — Navegación + contacto + redes

---

## 💬 Cómo funciona el formulario

Cuando un visitante llena el formulario:
1. Se valida que los campos estén correctos
2. Se genera una referencia única del caso
3. Se abre WhatsApp automáticamente con un mensaje pre-armado con todos sus datos
4. Tú recibes el mensaje directamente en tu WhatsApp

**Ventaja:** No necesitas backend, base de datos ni servicio de correo. 100% gratis.

---

## 📄 Licencia

© 2026 CyberQuest. Todos los derechos reservados.

---

**¿Dudas o problemas?** Revisa la consola del navegador (F12) para ver errores, o abre un issue en el repositorio.
