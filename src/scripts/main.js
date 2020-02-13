import apiHandler from './apiHandler.js'
import domManager from './domManager.js'
import eventListeners from './eventHandler.js'

const refresh = {
    form(poId) {
        domManager.form.renderPoiForm(poId);
        apiHandler.getPlaces()
            .then(console.log)
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

// FIXME: Will have to add this back at the click of an "add new" button
// refresh.form("new");
refresh.poiList();

export default refresh