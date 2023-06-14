  var isPlaying = false;
    var playButton = document.getElementById("btn1");

    function toggleSound() {
        var audio = document.getElementById("sound");

        if (isPlaying) {
            btn1.textContent = "INICIAR LIMPEZA"
            audio.pause();
            audio.currentTime = 0; // Reinicia o som do início
            isPlaying = false;
            playButton.classList.remove("playing");
        } else {
            btn1.textContent = "INICIADO"
            audio.play();
            isPlaying = true;
            playButton.classList.add("playing");
        }
    }

    function soundEnded() {
        isPlaying = false;
        playButton.classList.remove("playing");
    }

class MobileNav {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";

        this.handleeClick = this.handleeClick.bind(this);
    }

    handleeClick() {
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleeClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNav = new MobileNav(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNav.init();
