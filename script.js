let openMenu = document.querySelector('.OpenMenu');
let closeMenu = document.querySelector('.closeMenu');
let navUL = document.querySelector('ul');

const openMenus = () => {
    openMenu.style = 'display:none';
    closeMenu.style = 'display:inline-block';

    navUL.style = 'transform:translateX(0)';
    navUL.classList.add('.active');
};

const closeMenus = () => {
    closeMenu.style = 'display:none';
    openMenu.style = 'display:inline-block';
    
    navUL.style = 'transform:translateX(100%)';
};

openMenu.addEventListener("click", openMenus);
closeMenu.addEventListener("click", closeMenus);