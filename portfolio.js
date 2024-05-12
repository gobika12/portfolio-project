document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Hide all sections except the about section
    sections.forEach(section => {
        if (section.id !== 'about') {
            section.style.display = 'none';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the target section
            document.getElementById(targetId).style.display = 'block';
        });
    });
});
