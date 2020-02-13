import apiHandler from "./apiHandler.js";
import htmlFactory from "./htmlFactory.js";
import refresh from './main.js'

const eventListeners = {
    addSaveEventListener(){
        const saveBtn = document.querySelector(".save-button");
        saveBtn.addEventListener("click", () => {
            const poiObject = htmlFactory.poi.makePoiObject()
            apiHandler.savePoi(poiObject)
                .then(apiHandler.clearForm())
                .then(refresh.poiList());
        })
    }
}

export default eventListeners 