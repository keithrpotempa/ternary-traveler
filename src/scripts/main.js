import apiHandler from './apiHandler.js'
import domManager from './domManager.js'

const refresh = {
    form() {
        domManager.form.renderForm();
        apiHandler.getPlaces()
            .then(domManager.form.renderPlaceOptions)
    }
}

refresh.form();