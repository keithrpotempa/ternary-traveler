import apiHandler from './apiHandler.js'
import domManager from './domManager.js'
import eventListeners from './eventHandler.js'

const refresh = {
    form() {
        domManager.form.renderForm();
        apiHandler.getPlaces()
            .then(domManager.form.renderPlaceOptions)
            .then(eventListeners.addSaveEventListener)
    },
    poiList () {
        apiHandler.getPoiList()
            .then(domManager.poi.renderPoiList)
        //TODO: Make these
        //     .then(eventListeners.addDeleteEventListener)
        //     .then(eventListeners.addEditEventListener)
    }
}

refresh.form();
refresh.poiList();

export default refresh