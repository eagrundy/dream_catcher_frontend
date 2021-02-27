class Dreams {
    constructor() {
        this.dreams = []
        this.adapter = new DreamsAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadDreams()
    }

    initiBindingsAndEventListeners() {
        this.dreamsContainer = document.getElementById('dreams-container')
        this.dreamForm = document.getElementById('new-dream-form')
        this.dreamForm = addEventListener('submit', this.createDream.bind(this))
    }

    createDream(e) {
        e.preventDefault()
        const value = this.newDreamName.value
        
    }

    fetchAndLoadDreams() {
        this.adapter.getDreams().then(dreams => {
            dreams.forEach(dream => this.dreams.push(new Dream(dream)))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        this.dreamsContainer.innerHTML = this.dreams.map(dream => dream.renderLi()).join(``)
    }
}