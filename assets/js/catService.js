const getNewCat = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(resp=>resp.json())
    .then(json=>json.forEach(cat => {
        setImageUrl(json[0].url);
    }))
}

const displayInfo = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(resp=>resp.json())
    .then(json=>json.forEach(cat => {
        console.log(cat);
        if(cat.breeds.length>0){
            if(cat.breeds[0].hasOwnProperty('name')){
                setInfos(cat.breeds[0].name);
            }
        }else{
            setInfos("Il n'y pas de détails disponibles");
        }
        
    }))
}