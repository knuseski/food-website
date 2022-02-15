document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hide-loader');
    }, 3000);


    const menuBtn = document.getElementById('menu-btn');
    const navList = document.getElementById('nav-list');

    menuBtn.addEventListener('click', () => {
        toggleMenu();
    })

    const navItems = [...document.getElementsByClassName('nav__link')];
    navItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            toggleMenu();
            navItem.classList.add('nav__item-active');
        })
    });

    function toggleMenu() {
        menuBtn.classList.toggle('bx-menu');
        menuBtn.classList.toggle('bx-x');
        navList.classList.toggle('nav-open');
    }

    const moveToTop = document.getElementById('move-to-top');
    window.addEventListener('scroll', function scrollHeader() {
        if (this.scrollY >= 200) {
            moveToTop.classList.add('move-to-top-show');
        } else {
            moveToTop.classList.remove('move-to-top-show');
        }
    })

    const sections = document.querySelectorAll('section[id]')
    window.addEventListener('scroll', function scrollActive() {
        const scrollY = window.scrollY

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 150
            const sectionId = current.getAttribute('id')

            const element = document.querySelector('.nav__item a[href*=' + sectionId + ']');
            if (!element) return;

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                element.classList.add('nav__item-active')
            } else {
                element.classList.remove('nav__item-active')
            }
        })
    })
});