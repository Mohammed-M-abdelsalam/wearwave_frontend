//fetching url
function fetchUrl(url, callback, options={method: 'GET'}){
    fetch(url, options)
    .then(res => {
        if(!res.ok) throw new Error('something is wrong with response')
        return res.json();
    }).then(data => {
        callback(data);
    }).catch(e => {
        console.log(e.message);
    })
}

//lazy loading
function lazyLoading(img){
    const intersection = new IntersectionObserver(entries => {
        entries.forEach(el =>{
            if(el.isIntersecting){
                const img = el.target;
                img.src = img.dataset.src;
                intersection.unobserve(img);
            }
        })
    });
    intersection.observe(img);
}

//smooth loading
function smoothLoading(img){
    img.classList.add('blur');
    img.onload = () => {
        img.classList.remove('blur')
    }
}




//make and remove overlay
function makeOverlay(){
    if(! document.querySelector('.overlay')){
        const dialog = document.querySelector('dialog');
        const div = document.createElement('div');
        div.classList.add('overlay');
        document.querySelector('body').appendChild(div);
        //make body elements unclikable
        document.querySelector('body').style.pointerEvents = 'none';
        div.style.pointerEvents = 'auto';
    }
}
function removeOverlay(){
    const div = document.querySelector('.overlay');
    if(div){
        div.remove();
        document.querySelector('body').style.pointerEvents = 'auto';
    }
}




