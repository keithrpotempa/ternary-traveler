
const apiHandler = {
    baseUrl: 'http://localhost:8088',
    getPlaces () {
        return fetch(`${this.baseUrl}/places`)
            .then(response => response.json())
    },
    getPoiList () {
        return fetch(`${this.baseUrl}/interests?_expand=place`)
            .then(response => response.json())
    },
    getPoi (poiId) {
        return fetch(`${this.baseUrl}/interests/${poiId}?_expand=place`)
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
    },
    savePoiReview(poiReviewObject) {
        return fetch(`${this.baseUrl}/interests/${poiReviewObject.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(poiReviewObject)
        })
    },
    deletePoi (poiId) {
        return fetch(`${this.baseUrl}/interests/${poiId}`, {method: "DELETE"})
            .then(response => response.json())
    },
    editPoi (poiObject) {
        document.querySelector("#poi-id").value = poiObject.id;
        document.querySelector("#place-options").value = poiObject.placeId;
        document.querySelector("#poi-name__field").value = poiObject.name;
        document.querySelector("#poi-description__field").value = poiObject.description;
    },
    editReview (poiObject) {
        document.querySelector("#poi-review-cost__field").value = poiObject.cost;
        document.querySelector("#poi-review__field").value = poiObject.review;
        document.querySelector("#poi-rating__field").value = poiObject.rating;
    },
    clearForm () {
        const fields = ["#poi-id", "#place-options", "#poi-name__field", "#poi-description__field", "#poi-cost__field"]

        fields.forEach(field => {
            document.querySelector(field).value = document.querySelector(field).defaultValue;
        })
    },
    clearReviewForm () {
        const fields = ["#poi-review-cost__field", "#poi-review__field", "#poi-rating__field"]

        fields.forEach(field => {
            document.querySelector(field).value = document.querySelector(field).defaultValue;
        })
    }
}

export default apiHandler