fetch('./components/header/header.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('div-header').innerHTML = html
    }).then(other => {
      const toggle = document.querySelector('.menuToggle');
      const menu = document.getElementById('menu');
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('is-menu-visible');
      });
    })

    