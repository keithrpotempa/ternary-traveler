
const apiHandler = {
    baseUrl: 'http://localhost:8088',
    getPlaces () {
        return fetch(`${this.baseUrl}/places`)
            .then(response => response.json())
    },
    getPoiList () {
        return fetch(`${this.baseUrl}/interests`)
            .then(response => response.json())
    },
    savePoi (poiObject) {
        // If there is an id, the user is editing an existing entry
        if (poiObject.id) {
            return fetch(`${this.baseUrl}/interests/${poiObject.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(poiObject)
            })
        // If there is no id, the user is saving a new entry
        } else {
            return fetch(`${this.baseUrl}/interests/`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(poiObject)
            })
        } 
    }
}

export default apiHandler