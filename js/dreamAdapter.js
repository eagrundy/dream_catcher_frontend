class DreamAdapter

static baseURL = "http://localhost:3000/dreams/"

static fetchAndMakeDreams(){
    return fetch(DreamAdapter.baseURL)
    .then(obj => obj.json())
    .then(function(dreamsArray){
        return dreamsArray.forEach(function(dream) {
            if (dream.category_id){
                return new Dream(dream)
            }
        })
    })
}