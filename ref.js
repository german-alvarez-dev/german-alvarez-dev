
let mobilescreens = document.querySelectorAll('.mouse-inertia'), speedVertical = 0, speedHorizontal = 0, spaceLeft;



const applyScrollEffects = () => {

    // Navbar morph
    window.scrollY > 100 ?
        document.querySelector('.navigation').classList.add('sticky') :
        document.querySelector('.navigation').classList.remove('sticky')



    // Parallax transition effects
    document.querySelectorAll('.parallax').forEach(elm => {

        spaceLeft = elm.getBoundingClientRect().top     // Returns remaining space between the element and viewport's top

        elm.dataset.axis === 'vertical' ? speedVertical = elm.dataset.speed * spaceLeft : speedVertical = 0
        elm.dataset.axis === 'horizontal' ? speedHorizontal = elm.dataset.speed * spaceLeft : speedHorizontal = 0

        elm.style.transform = `translate(${speedHorizontal}px, ${speedVertical}px)`
    })
}




document.addEventListener('scroll', applyScrollEffects)




// Isometric mobile layers mouse inertia
document.querySelector('.contact').onmousemove = e => {
    mobilescreens[0].style.transform = `translate(${e.x * .03}px, ${-e.y * .03}px)`
    mobilescreens[1].style.transform = `translate(${e.x * .06}px, ${-e.y * .06}px)`
    mobilescreens[2].style.transform = `translate(${e.x * .09}px, ${-e.y * .09}px)`
    mobilescreens[3].style.transform = `translate(${e.x * .12}px, ${-e.y * .12}px)`
}

