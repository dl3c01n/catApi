let catUrl;

const getNewCat = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(resp=>resp.json())
    .then(json=>json.forEach(cat => {
        setImageUrl(json[0].url);
    }))
}