/* DE A DOS — barra de compra fija en mobile.
   Aparece cuando el botón de compra original sale de pantalla.
   No duplica lógica de carrito: reenvía el click al form real de Dawn. */
(function () {
  var bar = document.querySelector('[data-dad-sticky]');
  if (!bar) return;

  var anchor =
    document.querySelector('product-info .product-form__buttons') ||
    document.querySelector('.product-form__buttons');

  var trigger = bar.querySelector('[data-dad-sticky-add]');

  if (trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var realBtn =
        document.querySelector('product-info .product-form__submit') ||
        document.querySelector('.product-form__submit');
      if (realBtn) {
        realBtn.click();
      } else {
        window.location.href = trigger.getAttribute('data-fallback-url') || '/cart';
      }
    });
  }

  if (!anchor || !('IntersectionObserver' in window)) {
    bar.classList.add('is-visible');
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        bar.classList.toggle('is-visible', !entry.isIntersecting && entry.boundingClientRect.top < 0);
      });
    },
    { rootMargin: '0px 0px -20% 0px', threshold: 0 }
  );

  io.observe(anchor);
})();
