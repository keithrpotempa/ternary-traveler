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
    }
}

export default domManager