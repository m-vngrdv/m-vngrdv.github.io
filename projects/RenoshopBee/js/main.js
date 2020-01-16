var menu = document.querySelector(".item-menu");
var mobileNav = document.querySelector(".mobile-nav");
var mobileNavItems = document.getElementsByClassName("mobile-nav__item");

menu.addEventListener('click', function() {
    event.preventDefault();
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }
});

for (var i = 0; i < mobileNavItems.length; i++) {
    mobileNavItems[i].addEventListener("click", function() {
    
    if(this.querySelector('.mobile-nav__submenu') != null) {
        var submenu = this.querySelector('.mobile-nav__submenu');
    
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    }
    
  });
}

