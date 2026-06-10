/* ============================================================
   CYBER QUEST — Configuración de checkout (Hotmart)
   ============================================================
   ÚNICO lugar donde se configuran los enlaces de pago.
   Cuando crees cada producto en Hotmart, pega aquí su enlace
   de checkout (formato: https://pay.hotmart.com/XXXXXXXX).
   Mientras un enlace esté vacío, el botón usa su destino
   provisional (WhatsApp / formulario de contacto).
   ============================================================ */

const CQ_CHECKOUT = {
  /* Manual Digital Vivo — $49 USD */
  manual: '',

  /* Curso Cómo ser Investigador Privado — $397 USD */
  curso: '',

  /* Libro PDF directo — $19.99 USD (opcional) */
  libro: ''
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-checkout]').forEach(function (el) {
    var url = CQ_CHECKOUT[el.getAttribute('data-checkout')];
    if (url) {
      el.setAttribute('href', url);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    }
  });
});
