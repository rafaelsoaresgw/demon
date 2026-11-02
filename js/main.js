document.querySelectorAll('.tab').forEach(function (tab) {
  tab.addEventListener('click', function () {
    var name = tab.dataset.tab;
    document.querySelectorAll('.tab').forEach(function (t) {
      var on = t === tab;
      t.classList.toggle('on', on);
      t.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.querySelectorAll('[data-panel]').forEach(function (el) {
      el.hidden = el.dataset.panel !== name;
    });
  });
});

var heroVideo = document.querySelector('video.photo');
if (heroVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  heroVideo.removeAttribute('autoplay');
  heroVideo.pause();
}
