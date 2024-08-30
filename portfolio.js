document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const resumeSection = document.getElementById('resume-section');
    const resumeLink = document.getElementById('resume-link');

    // Hide all sections except the about section
    sections.forEach(section => {
        if (section.id !== 'about') {
            section.style.display = 'none';
        }
    });

    // Show/hide the resume section on clicking the Resume link
    resumeLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (resumeSection.style.display === 'block') {
            resumeSection.style.display = 'none';
        } else {
            // Hide all other sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            // Show the resume section
            resumeSection.style.display = 'block';
        }
    });

    // Handle navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');

            if (targetId) {
                // Hide all sections except the resume section
                sections.forEach(section => {
                    if (section.id !== 'resume-section') {
                        section.style.display = 'none';
                    }
                });

                // Show the target section
                document.getElementById(targetId).style.display = 'block';
                // Hide the resume section if it's visible
                resumeSection.style.display = 'none';
            }
        });
    });
});
