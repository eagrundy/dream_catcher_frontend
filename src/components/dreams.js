class Dreams {
    constructor() {
        this.dreams = []
        this.adapter = new DreamsAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadDreams()
    }

    initiBindingsAndEventListeners() {
        this.dreamsContainer = document.getElementById('dreams-container')
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