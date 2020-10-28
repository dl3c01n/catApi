const setImageUrl = (url) => {
    document.querySelector('#catImg').src = url;
}

window.addEventListener('load', getNewCat);
document.querySelector('#buttonNext').addEventListener('click', getNewCat)