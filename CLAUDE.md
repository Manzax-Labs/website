# Website (www.manzax.com)

Sitio de marketing **público** de Manzax. Es el repo `Manzax-Labs/website`.

## Stack
- **Vite + React 19 + TypeScript**, React Router, Framer Motion, Bootstrap/react-bootstrap, lucide-react.
- Tests con Jest + Testing Library. Lint con ESLint, formato con Prettier (husky + lint-staged corren en cada commit → re-Read los archivos después de commitear).

## Correr local
```bash
cd /Users/agents/Documents/manzax-agent/repos/website
npm install      # primera vez
npm run dev      # Vite dev server
npm run build    # tsc && vite build → dist/
```

## Deploy (CRÍTICO: push ≠ publicar)
El sitio se sirve por **GitHub Pages** desde la branch `gh-pages`, NO desde `main`.

- **Pushear a `main` NO publica nada.** Para que los cambios salgan a www.manzax.com hay que correr el deploy explícito:
  ```bash
  cd /Users/agents/Documents/manzax-agent/repos/website
  npm run deploy   # = predeploy (build + .nojekyll + 404=index) y luego gh-pages -d dist
  ```
- `npm run deploy` buildea, copia `index.html`→`404.html` (para SPA routing en gh-pages) y pushea `dist/` a la branch `gh-pages`.
- Flujo normal: commit + push a `main` (historial/código) **y además** `npm run deploy` (publicar).

## Diseño
- Es la cara pública de la marca: tiene que verse como un **producto terminado**, nunca "en beta".
- Dirección de diseño Manzax (de-boxed, jerarquía por tipografía/color, iconos propios) — ver la memoria `[[feedback_no_cajas]]` y el handbook (`empresa/marketing/`). El logo de Manzax arriba de todo se mantiene como está salvo pedido explícito.
- Antes de entregar cualquier cambio visual: render → screenshot a `.screenshots/` → mirá el PNG con vision → auto-crítica → iterá (ver "Browser access" en el CLAUDE.md raíz del agente).
