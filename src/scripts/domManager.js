import htmlFactory from './htmlFactory.js'

const domManager = {
    form: {
        renderPoiForm (poiId) {
            let container;
            // Passing this "new" if it is the initial "new form" creation
            if (poiId == "new") {
                container = document.querySelector("#poi-form__div")
            // Otherwise, this will be passed the id of the poi being edited
            } else {
                container = document.querySelector(`#poi-container__${poiId}`)
            }
            let formHTML = htmlFactory.form.makePoiForm();
            container.innerHTML = formHTML;
            return poiId
        },
        renderPlaceOptions (places) {
            const container = document.querySelector("#place-options__container")
            let html = htmlFactory.form.makePlaceOptions(places);
            container.innerHTML = html;
        },
        renderPoiReviewForm (poiObject) {
            const container = document.querySelector(`#poi-container__${poiObject.id}`);
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
            container.innerHTML = ""
            poiList.forEach(poi => {
                let poiHTML = htmlFactory.poi.makePoiHtml(poi);
                container.innerHTML += poiHTML;
            });
        }
    }
}

export default domManager