const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 370){ 
        nav.classList.add('border_black')

} else {
    nav.classList.remove('border_black')
}
})