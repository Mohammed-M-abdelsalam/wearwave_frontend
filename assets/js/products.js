//binding featured products

function loadingAnimation(item){
    item.innerHTML = `
    <div class="balls">
    <div></div>
    <div></div>
    <div></div>
    </div>
    `;
}
function featuredProducts(cardStructure){
    const featured = document.querySelector('.featured-products .cards');
    loadingAnimation(featured);
    document.addEventListener('DOMContentLoaded', 
        fetchUrl('https://fakestoreapi.com/products?limit=3', data => {
            if(data){
                const cards = document.querySelector('.featured-products .cards');
                cardStructure(data, cards);
            }
    }));
}
featuredProducts(cardStructure)



//binding new products
function newProducts(cardStructure){  
    const newProducts = document.querySelector('.new-products .cards');
    loadingAnimation(newProducts);  
    document.addEventListener('DOMContentLoaded', 
        fetchUrl('https://fakestoreapi.com/products?limit=6&sort=desc', data => {
            if(data){
                const cards = document.querySelector('.new-products .cards');
                cardStructure(data, cards);
            }
        }));
}
newProducts(cardStructure);


