import apiHandler from './apiHandler.js'
import domManager from './domManager.js'
import eventListeners from './eventHandler.js'

const refresh = {
    form() {
        domManager.form.renderPoiForm();
        apiHandler.getPlaces()
            .then(domManager.form.renderPlaceOptions)
            .then(eventListeners.addSaveEventListener)
            .then(eventListeners.addClearEventListener)
    },
    poiList () {
        apiHandler.getPoiList()
            .then(domManager.poi.renderPoiList)
            .then(eventListeners.addDeleteEventListener)
            .then(eventListeners.addEditEventListener)
            .then(eventListeners.addEditReviewEventListener)
    }
}

refresh.form();
refresh.poiList();

export default refresh