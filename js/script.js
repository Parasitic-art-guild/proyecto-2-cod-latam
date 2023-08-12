const menuBtn = document.querySelector('#menu-btn')
console.log(menuBtn);

menuBtn.addEventListener
    ('click', function() {
        document.querySelector("body > header > nav > ul > li > button").classList.toggle('movile-menu-active')
    }
)

