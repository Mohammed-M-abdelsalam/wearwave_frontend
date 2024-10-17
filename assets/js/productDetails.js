// show product details
function getProductDetails(closeProductDialog){
    const dialog = document.querySelector('dialog')
    const img = document.querySelector('dialog>.img>img')
    const name = document.querySelector('dialog>.details>h3');
    const desc = document.querySelector('dialog>.details>p');
    const price = document.querySelector('dialog>.details>strong');
    img.dataset.src = this.image;
    lazyLoading(img)
    smoothLoading(img)
    name.textContent = this.title;
    desc.textContent = this.description;
    price.textContent = String(this.price).match(/^\d+\.00/)? '$'+parseInt(this.price): '$'+this.price;
    dialog.style.display = 'flex';
    makeOverlay();
    dialog.style.pointerEvents = 'auto';
    closeProductDialog();
}

function closeProductDialog(){
        const btn = document.querySelector('.close-dialog>button');
        const dialog = document.querySelector('dialog')
        btn.addEventListener('click', function(e){
        e.preventDefault();
        dialog.style.display = 'none';
        removeOverlay();
    })
}

