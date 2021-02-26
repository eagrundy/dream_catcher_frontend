class Dreams {
    constructor() {
        this.dreams = []
        this.adapter = new DreamsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadDreams()
    }

    fetchAndLoadDreams() {
        this.adapter.getDreams().then(dreams => {
            dreams.forEach(dream => this.dreams.push(dream))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const dreamsContainer = document.getElementById('dreams-container')
        dreamsContainer.innerHTML = 'My Dreams'
    }
}