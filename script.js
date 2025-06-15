function profile(){
    const profile=document.getElementById("user");
    const project=document.getElementById("Project");
    const certificate=document.getElementById("certificate");

    profile.style.display="block"
    project.style.display="none"
    certificate.style.display="none"
}

function project(){
    const profile=document.getElementById("user");
    const project=document.getElementById("Project");
    const certificate=document.getElementById("certificate");

    profile.style.display="none"
    project.style.display="block"
    certificate.style.display="none"
}

function certificate(){
    const profile=document.getElementById("user");
    const project=document.getElementById("Project");
    const certificate=document.getElementById("certificate");

    profile.style.display="none"
    project.style.display="none"
    certificate.style.display="block"
}

 // Simple animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach((card, index) => {
                // Add staggered animation
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 200 + (index * 100));
            });
        });

        const images = document.querySelectorAll('#show img');
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('overlay');
        const popupImage = document.getElementById('popupImage');
        const popupDescription = document.getElementById('popupDescription');

        images.forEach(image => {
            image.addEventListener('click', () => {
                const src = image.getAttribute('src');
                const description = image.getAttribute('data-description');

                popupImage.src = src;
                popupDescription.textContent = description;

                popup.style.display = 'block';
                overlay.style.display = 'block';
            });
        });

        overlay.addEventListener('click', () => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });