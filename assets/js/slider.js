//slider
function sliding(){
    let interval; 
    function startInterval(){
        interval = setInterval(()=>{
            const slidesContainer = document.querySelector('.slider ul');
            const activeSlide = slidesContainer.querySelector('[data-active]');
            let newIndex = [...slidesContainer.children].indexOf(activeSlide) + 1;
            if(newIndex >= slidesContainer.children.length) newIndex = 0;
            slidesContainer.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        }, 6000)
    }
    function stopInterval(){
        clearInterval(interval)
    }
    startInterval();
    const sliderButtons = document.querySelectorAll('[data-slider-button]');
    sliderButtons.forEach(el => {
        el.addEventListener('click', ()=>{
            stopInterval()
            const slidesContainer = document.querySelector('.slider ul');
            const activeSlide = slidesContainer.querySelector('[data-active]');
            const offset = el.className === 'next' ? 1 : -1;
            let newIndex = [...slidesContainer.children].indexOf(activeSlide)+offset;
            if(newIndex >= slidesContainer.children.length) newIndex = 0;
            if(newIndex < 0) newIndex = slidesContainer.children.length - 1;
            slidesContainer.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
            startInterval()
        })
    })
}
sliding();
