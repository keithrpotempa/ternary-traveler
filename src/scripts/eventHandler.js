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
    },
    addEditEventListener() {
        const editBtns = document.querySelectorAll(".edit-button");
        editBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const poiId = e.target.id.split("--")[1]
                apiHandler.getPoi(poiId)
                    .then(apiHandler.editPoi)
            })
        })
    },
}

export default eventListeners 