function setupHamburgerMenu(hamburgerSelector, navMenuSelector) {
    const hamburger = document.querySelector(hamburgerSelector);
    const navMenu = document.querySelector(navMenuSelector);

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('visible');
    });
}

// Example usage:
// setupHamburgerMenu('#hamburger-icon', '#nav-menu');

// Modal image viewer
function setupImageModal(imageSelector) {
    // Create modal elements
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.8)';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = 1000;

    const img = document.createElement('img');
    img.style.maxWidth = '90vw';
    img.style.maxHeight = '90vh';
    img.style.boxShadow = '0 0 20px #000';

    modal.appendChild(img);
    document.body.appendChild(modal);

    // Close modal on click
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
        img.src = '';
    });

    // Attach click event to images
    document.querySelectorAll(imageSelector).forEach(image => {
        image.style.cursor = 'pointer';
        image.addEventListener('click', () => {
            img.src = image.src;
            modal.style.display = 'flex';
        });
    });
}

// Example usage:
// setupImageModal('.modal-image');

// Filter feature for the "projects" section
function setupProjectFilter(filterSelector, projectsContainerSelector, projectItemSelector) {
    const filter = document.querySelector(filterSelector);
    const projectsContainer = document.querySelector(projectsContainerSelector);
    if (!filter || !projectsContainer) return;

    filter.addEventListener('change', function() {
        const selected = this.value;
        const projects = projectsContainer.querySelectorAll(projectItemSelector);
        projects.forEach(project => {
            if (selected === 'all' || project.dataset.category === selected) {
                project.style.display = '';
            } else {
                project.style.display = 'none';
            }
        });
    });
}

// Example usage:
// setupProjectFilter('#project-filter', '#projects', '.project-item');
document.querySelectorAll('#nav-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});