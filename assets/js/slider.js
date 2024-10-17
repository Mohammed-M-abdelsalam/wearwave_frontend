//slider
function sliding(){
    const slidesContainer = document.querySelector('.slider ul');
    const slides = [...slidesContainer.children];

    function moveToSlide(offset){
        const activeSlide = document.querySelector('[data-active]');
        let newIndex = slides.indexOf(activeSlide) + offset;
        if(newIndex >= slides.length) newIndex = 0;
        if(newIndex < 0) newIndex = slides.length - 1;
        slides[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    }
    
    let interval; 
    function startInterval(){
        interval = setInterval(()=>{
            moveToSlide(1)
        }, 6000)
    }
    
    function stopInterval(){
        clearInterval(interval)
    }

    startInterval();
    const sliderButtons = document.querySelectorAll('[data-slider-button]');
    sliderButtons.forEach(el => {
        el.addEventListener('pointerdown', ()=>{
            stopInterval()
            const offset = el.className === 'next' ? 1 : -1;
            moveToSlide(offset)
            startInterval()
        });
    });
}


sliding();
