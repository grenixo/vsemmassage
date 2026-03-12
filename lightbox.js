(function() {
  var items = Array.from(document.querySelectorAll('.cert-item'));
  var lightbox = document.getElementById('lightbox');
  var img = lightbox.querySelector('.lightbox-img');
  var current = 0;

  function open(index) {
    current = index;
    img.src = items[current].dataset.src;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function prev() { open((current - 1 + items.length) % items.length); }
  function next() { open((current + 1) % items.length); }

  items.forEach(function(el, i) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', function() { open(i); });
  });

  lightbox.querySelector('.lightbox-close').addEventListener('click', close);
  lightbox.querySelector('.lightbox-prev').addEventListener('click', prev);
  lightbox.querySelector('.lightbox-next').addEventListener('click', next);
  lightbox.querySelector('.lightbox-overlay').addEventListener('click', close);

  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
})();
