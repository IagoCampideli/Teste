function initTabnav () {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');


        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMneu, index) =>{
            itemMneu.addEventListener('click', () => {
                activeTab(index);
            })
        });
    }
}
initTabnav();


function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    if (accordionList.length) {
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion () {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();


function initScrollSmooth() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    function scrollToSection(event) {
        event.preventDefault ();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);   
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth'
        })
    }
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

initScrollSmooth();