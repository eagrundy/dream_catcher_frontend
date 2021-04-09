const endPoint = 'http://localhost:3000'
const dreamApi = new DreamApi(endPoint)
const categoryApi = new CategoryApi(endPoint)
const list = document.getElementById('dream-list')
const form = document.getElementById('dream-form')
const nameInput = document.getElementById('dream-name')
const imageInput = document.getElementById('dream-image')
const descriptionInput = document.getElementById('dream-description')
const achievedInput = document.getElementById('dream-achieved')
const dateAchievedInput = document.getElementById('dream-dateachieved')
const dropdown = document.getElementById('cat-dropdown')


form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    dreamApi.createDream()
    e.target.reset()
}


dreamApi.getDreams()
categoryApi.getCategories()