let navigation = document.getElementById('nav');
let toggleOpen = document.getElementById('toggle-open');
let toggleClose = document.getElementById('toggle-close');
let bodyTag = document.getElementsByTagName('body');
let mainContent = document.getElementById('main-content');
let menuLogo = navigation.children[0];
let menuItems = navigation.children[1];



let naviStyle = getComputedStyle(nav);
let bodyStyle = getComputedStyle(bodyTag[0]);


if (parseInt(bodyStyle.width) > 800) {
    mainContent.addEventListener('click', () => {
        if (naviStyle.right == '0px') {
            navigation.style.cssText = 'right: -22rem';
            bodyTag[0].style.cssText = 'width: 100%';
            toggleOpen.style.cssText = 'display: block';
        }
    });

    toggleOpen.addEventListener('click', () => {
        navigation.style.cssText = 'right: 0';
        toggleOpen.style.cssText = 'display: none';
        bodyTag[0].style.cssText = 'width: calc(100% - 22rem)';
    });

    toggleClose.addEventListener('click', () => {
        navigation.style.cssText = 'right: -22rem';
        toggleOpen.style.cssText = 'display: block';
        bodyTag[0].style.cssText = 'width: 100%';
    });

} else {
    toggleOpen.addEventListener('click', () => {
        navigation.style.cssText = 'right: 0; width: 100%';
        toggleOpen.style.cssText = 'display: none';
    });

    toggleClose.addEventListener('click', () => {
        navigation.style.cssText = 'right: -22rem';
        toggleOpen.style.cssText = 'display: block';
    });

    menuItems.addEventListener('click', () => {
        navigation.style.cssText = 'right: -22rem';
        toggleOpen.style.cssText = 'display: block';
    });

    menuLogo.addEventListener('click', () => {
        navigation.style.cssText = 'right: -22rem';
        toggleOpen.style.cssText = 'display: block';
    });

}