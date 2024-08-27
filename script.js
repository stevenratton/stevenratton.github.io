document.addEventListener('scroll', function() {
    var logo = document.getElementById('logo-head');
    if (window.scrollY > 1) { // Vous pouvez ajuster cette valeur
        logo.style.opacity = '0';
    } else {
        logo.style.opacity = '1';
    }
});
