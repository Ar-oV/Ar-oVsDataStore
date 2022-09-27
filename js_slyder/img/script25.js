const CLIENT_ID = 'm_GwHyAP4-AIfdJnXK0SnwLiwdaZzYjSnq8ukDj4ra4';
const slider = document.getElementById('slider');
let state = [];
const fetchPhotos = async() => {
    try {
        const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=4`;
    const response = await fetch(url);
    const data = await response.json();
    if(response.ok && data.length) {
        state = data;
        setPhotos();
    };
    } catch (err) {
        console.log(err);
    }

    console.log(data);
};
const renderItem = () => {
    return state
        .map(({ urls: { regular }, user: { name} }) => {
            return `<div class="slide" style="background-image: url(${regular})">
                        <div class="slide-text" >
                            <span>photo by</span>
                            ${name}
                        </div>
                    </div>`
        }).join("");
};
const setPhotos = () => {
    slider.innerHTML = renderItem();
};
fetchPhotos();