import htmlFactory from './htmlFactory.js'

const domManager = {
    form: {
        renderForm () {
            const formContainer = document.querySelector("#poi-form__div")
            let formHTML = htmlFactory.form.makePoiForm();
            formContainer.innerHTML = formHTML;
        },
        renderPlaceOptions (places) {
            const container = document.querySelector("#place-options__container")
            let html = htmlFactory.form.makePlaceOptions(places);
            container.innerHTML = html;
        }
    },
    poi: {
        renderPoiList (poiList) {
            const container = document.querySelector("#poi-list__div")
            container.innerHTML = "<h2>Point of Interest List</h2>"
            poiList.forEach(poi => {
                let poiHTML = htmlFactory.poi.makePoiHtml(poi);
                container.innerHTML += poiHTML;
            });
        }
    }
}

export default domManager