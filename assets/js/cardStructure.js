//card structure
function cardStructure(data, parent){
    if(data){
        const cards = parent;
        const fragment = document.createDocumentFragment();
        data.forEach(el => {
            const card = document.createElement('div');
            const text = document.createElement('div');
            const img = document.createElement('img');
            const p = document.createElement('p');
            const strong = document.createElement('strong');
            card.className = 'card';
            text.className = 'text';
            img.setAttribute('src', '');
            img.setAttribute('data-src', el.image);
            img.setAttribute('alt', 'img');
            img.setAttribute('loading', 'lazy');
            let dots;
            dots = (el.description.length > 30) ? "..." : "";
            p.textContent = el.description.substr(0, 30) + dots;
            strong.textContent = String(el.price).match(/^\d+\.00/)? '$'+parseInt(el.price): '$'+el.price;
            text.append(p, strong);
            card.append(img, text);
            fragment.appendChild(card);
            lazyLoading(img);
            smoothLoading(img);
            // get card details
            card.addEventListener('click', getProductDetails.bind(el, closeProductDialog));
            card.removeEventListener('click', getProductDetails.bind(el, closeProductDialog));
        })
        setTimeout(() => { 
            cards.innerHTML = "";
            cards.appendChild(fragment);
        }, 1000);
    }
}