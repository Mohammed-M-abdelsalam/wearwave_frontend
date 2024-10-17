//moblie navbar
const menu = document.querySelector('.menu button');
const close = document.querySelector('.close button');
function showNav(){
    if(window.innerWidth <= 500){
        const nav = document.querySelector('nav');
        menu.style.display = 'none';
        nav.style.display = 'block';
        close.style.display = 'block';
        menu.removeEventListener('click', showNav);
    }
}
function closeNav(){
    if(window.innerWidth <= 500){
        const nav = document.querySelector('nav');
        nav.style.display = 'none';
        close.style.display = 'none';
        menu.style.display = 'inline';
        close.removeEventListener('click', closeNav);
    }
}
menu.addEventListener('click', (e)=>{
    e.preventDefault();
    showNav();
});

close.addEventListener('click', (e)=>{
    e.preventDefault();
    closeNav();
});

//fetch and bind categories into the nav
function setActiveCategory(){
    const a = document.querySelectorAll('nav>ul>li>a')
    a.forEach(el => {
        el.classList.remove('link-line')
    })
    this.children[0].classList.add('link-line');
}

function getCategoryProducts(e, setActiveCategory, cardStructure){
    e.preventDefault();
    setActiveCategory.call(this);
    // document.querySelector('main').style.display = 'none';
    document.querySelector('.featured-products').style.display = 'none';
    document.querySelector('.new-products').style.display = 'none';
    const cards = document.querySelector('.category-section .cards');
    cards.style.display = 'flex';
    cards.textContent = "";
    fetchUrl(`https://fakestoreapi.com/products/category/${this.className}`, data => {
        cardStructure(data, cards);
    })       
}

document.addEventListener('DOMContentLoaded', 
    fetchUrl('https://fakestoreapi.com/products/categories', data => {
        if(data){
            const ul = document.querySelector('nav ul')
            const fragmant = document.createDocumentFragment();
            data.forEach(el =>{
                const li = document.createElement('li');
                const a = document.createElement('a');
                li.className = el;
                a.textContent = el;
                li.appendChild(a);
                li.addEventListener('click', function(e){
                    getCategoryProducts.call(this, e, setActiveCategory, cardStructure)
                });
                fragmant.appendChild(li);
            });
            ul.appendChild(fragmant);
        }
}))

//get home
document.addEventListener('DOMContentLoaded', getHome());
function getHome(){
    const home = document.querySelector('#home');
    setActiveCategory.call(home);
    home.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveCategory.call(home);
        document.querySelector('main').style.display = 'block';
        document.querySelector('.featured-products').style.display = 'block';
        document.querySelector('.new-products').style.display = 'block';
        document.querySelector('.category-section .cards').style.display = 'none'; 
    })
}