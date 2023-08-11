const menuBtn = document.querySelector('#menu-btn')
console.log(menuBtn);
const menuBtn1 = document.querySelector('#menu-btn-1')
console.log(menuBtn1);

/*menuBtn.addEventListener('click', function () {
    document.body.header.nav.ul.li.button.classList.toggle('movile-menu-active')
}*/
menuBtn.addEventListener('click', function () {document.querySelector("body > header > nav > ul > li > button").classList.toggle('movile-menu-active')
})

/*menuBtn1.addEventListener('click', function () {
    document.body.header.nav.ul.li.button.classList.toggle('movile-menu-active-1')  
}
)*/
