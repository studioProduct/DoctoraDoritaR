# Sitio web Dra. Dorita Olarte

Sitio estático responsive listo para Cloudflare Pages, GitHub Pages o cualquier hosting estático.

## Páginas
- `/` Inicio
- `/sobre-mi/`
- `/servicios/`
- `/contacto/`
- `/privacidad/` (plantilla que debe revisarse antes de publicar)

## Antes de publicar
Editar `assets/js/config.js` y completar:
- `email`
- `whatsapp` (con código de país)
- `phone`
- `doctoraliaUrl` si aplica

Ejemplo:
```js
window.DORITA_SITE = {
  email: 'correo@ejemplo.com',
  whatsapp: '+573001234567',
  phone: '+57 300 123 4567',
  doctoraliaUrl: 'https://...',
  location: 'Rionegro, Antioquia'
};
```

## Notas importantes
- El formulario no envía información a un servidor propio. Cuando se configure WhatsApp, abre un mensaje prellenado; si no, usa email si está configurado.
- La política de privacidad es una plantilla, no asesoría legal. Debe completarse y revisarse antes de publicar.
- Confirmar con la Dra. Dorita las modalidades de atención, horarios, teléfono, correo y acreditación/formación específica en EMDR antes de añadir afirmaciones más concretas.
- Las imágenes están optimizadas a WebP para reducir peso.
