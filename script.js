document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checking');
    const navLinks = document.querySelector('.nav-l');
    const checkIcon = document.querySelector('.check-icon i');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            navLinks.style.right = '0';
            checkIcon.classList.remove('fa-bars');
            checkIcon.classList.add('fa-times');
        } else {
            navLinks.style.right = '-100%';
            checkIcon.classList.remove('fa-times');
            checkIcon.classList.add('fa-bars');
        }
    });
});