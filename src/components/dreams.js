class Dreams {
    constructor() {
        this.dreams = []
        this.adapter = new DreamsAdapter()
        this.addEventListenersAndBindings()
        this.loadDreams()
    }

    addEventListenersAndBindings() {
        // document.addEventListener("DOMContentLoaded", () => this.loadDreams())
        this.dreamsContainer = document.getElementById('dreams-container')
        this.newDreamName = document.getElementById("new-dream-name")
        this.dreamForm = document.getElementById('new-dream-form')
        // this.categoryForm = addEventListener('submit', this.addCategory.bind(this))
        this.dreamForm.addEventListener('submit', this.createDream.bind(this))
    }

    createDream(e) {
        e.preventDefault()
        const value = this.newDreamName.value

        this.adapter.createDream(value).then(dream => {
            this.dreams.push(new Dream(dream))
            this.newDreamName.value = ''
            this.render()
        })
    }

    loadDreams() {
        this.adapter.getDreams().then(dreams => {
            dreams.forEach(dream => this.dreams.push(new Dream(dream)))
        })
        .then(() => {
            this.render()
        })

    }

    render() {
        // const dreamsContainer = document.getElementById('dreams-container')
        this.dreamsContainer.innerHTML = this.dreams.map(dream => dream.renderLi()).join(``)
    }
}