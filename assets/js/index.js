document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});

const setImageUrl = (url) => {
    document.querySelector('#catImg').src = url;
}

const setInfos = (infos) => {
    document.querySelector('#catDetails').textContent = infos.toString();
}

window.addEventListener('load', getNewCat);
window.addEventListener('load', displayInfo);
document.querySelector('#buttonNext').addEventListener('click', getNewCat)
document.querySelector('#buttonNext').addEventListener('click', displayInfo)