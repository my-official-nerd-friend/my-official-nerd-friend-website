fetch('./components/footer/footer.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('div-footer').innerHTML = html
    })