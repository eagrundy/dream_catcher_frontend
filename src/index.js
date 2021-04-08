const endPoint = 'http://localhost:3000'
const dreamApi = new DreamApi(endPoint)
const list = document.getElementById('dream-list')



dreamApi.getDreams()