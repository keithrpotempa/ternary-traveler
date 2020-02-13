import htmlFactory from './htmlFactory.js'

const domManager = {
    form: {
        renderPoiForm () {
            const formContainer = document.querySelector("#poi-form__div")
            let formHTML = htmlFactory.form.makePoiForm();
            formContainer.innerHTML = formHTML;
        },
        renderPlaceOptions (places) {
            const container = document.querySelector("#place-options__container")
            let html = htmlFactory.form.makePlaceOptions(places);
            container.innerHTML = html;
        },
        renderPoiReviewForm (poiObject) {
            //TODO: update this container so its next to the entry...
            const container = document.querySelector("#poi-review__placeholder");
            let formHTML = htmlFactory.form.makePoiReviewForm(poiObject);
            container.innerHTML = formHTML;
            return poiObject;
        },
        removePoiReviewForm () {
            const container = document.querySelector("#poi-review__placeholder");
            container.innerHTML = ""
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