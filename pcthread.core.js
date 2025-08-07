document.addEventListener('DOMContentLoaded', function () {
  function e() {
    document.querySelectorAll('img').forEach(function (e) {
      e.dataset.errorHandled ||
        (e.addEventListener('error', function () {
          if (this.src !== 'https://cdn.jsdelivr.net/gh/annoercom/imgcdn/no-image.webp') {
            this.src = 'https://cdn.jsdelivr.net/gh/annoercom/imgcdn/no-image.webp';
            this.setAttribute('srcset',
              'https://cdn.jsdelivr.net/gh/annoercom/imgcdn/no-image.webp80 80w, ' +
              'https://cdn.jsdelivr.net/gh/annoercom/imgcdn/no-image.webp149 149w, ' +
              'https://cdn.jsdelivr.net/gh/annoercom/imgcdn/no-image.webp263 263w, ' +
              'https://cdn.jsdelivr.net/gh/annoercom/imgcdn/no-image.webp412 412w'
            );
            this.setAttribute('sizes', '(max-width: 767px) 100vw, 767px');
            this.alt = 'Gambar tidak tersedia';
          }
        }),
        e.dataset.errorHandled = 'true');
    });
  }
  e();
});
