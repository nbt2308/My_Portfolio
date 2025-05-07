window.addEventListener('scroll', function () {
    const header = this.document.querySelector('header')
    const logo= document.getElementById("logo-header")
    const action_btn = document.getElementById("action")
    const menu_bar=this.document.getElementById("menu-header__icon")
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        logo.classList.add('scrolled_logo');
        action_btn.classList.add('scrolled_action');
        menu_bar.classList.add("scrolled_navbar");
    } else {
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled_logo');
        action_btn.classList.remove('scrolled_action');
        menu_bar.classList.remove("scrolled_navbar");
    }
});