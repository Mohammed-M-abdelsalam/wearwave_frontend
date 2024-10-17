//binding featured products
function featuredProducts(cardStructure){
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
    document.addEventListener('DOMContentLoaded', 
        fetchUrl('https://fakestoreapi.com/products?limit=6&sort=desc', data => {
            if(data){
                const cards = document.querySelector('.new-products .cards');
                cardStructure(data, cards);
            }
        }));
}
newProducts(cardStructure);