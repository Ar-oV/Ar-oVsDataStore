const CLIENT_ID = 'm_GwHyAP4-AIfdJnXK0SnwLiwdaZzYjSnq8ukDj4ra4';
const slider = document.getElementById('slider');
let state = [];
let currentSlide;
const fetchPhotos = async() => {
    try {
        const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=4`;
    const response = await fetch(url);
    const data = await response.json();
    if(response.ok && data.length) {
        state = data;
        currentSlide = data[0].id
        setPhotos();
    };
    } catch (err) {
        console.log(err);
    }

    console.log(data);
};
const renderItem = () => {
    return state
        .map(({ urls: { regular }, user: { name}, id }) => {
            const inActive = currentSlide === id ? 'active' : ''
            return `<div class="slide ${inActive}" style="background-image: url(${regular}) cover no-repeat">
                        <div class="slide-text" >
                            <span>photo by</span>
                            <div class="name">${name}</div>
                        </div>
                    </div>`
        }).join("");
};
const handleClick = ({ currentTarget }) => {
    console.log(currentTarget);
};
const setPhotos = () => {
    slider.innerHTML = renderItem();
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) =>{
        slide.addEventListener("click", handleClick);
    });
    console.log(slides);
};
fetchPhotos();