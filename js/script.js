const menuBtn = document.querySelector('#menu-btn')
console.log(menuBtn);

menuBtn.addEventListener
    ('click', function() {
        document.querySelector("body > header").classList.toggle('movile-menu-active');
        /*document.querySelector("body > header > nav > ul > li > button").classList.toggle('movile-menu-active');*/
        /*document.querySelector("body > header > nav > ul").classList.toggle('movile-menu-active')*/
    }
)

