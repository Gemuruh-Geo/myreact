FetchAlbum = (url) =>{
    fetch(url).then(response => response.json())
    .then(value => console.log(value))
    .catch(err => console.log(err));
}

FetchDataAsyncAwait = async function (url) {
    try{
        let response = await fetch(url);
        let json = await response.json();
        return json;
    }catch(err){

    }
}

export {FetchDataAsyncAwait}