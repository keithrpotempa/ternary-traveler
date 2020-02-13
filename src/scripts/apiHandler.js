
const apiHandler = {
    baseUrl: 'http://localhost:8088',
    getPlaces () {
        return fetch(`${this.baseUrl}/places`)
            .then(response => response.json())
    }
}

export default apiHandler