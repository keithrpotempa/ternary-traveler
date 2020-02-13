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
                .then(refresh.poiList);
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
    addDeleteEventListener() {
        const deleteBtns = document.querySelectorAll(".delete-button");
        deleteBtns.forEach(btn => {
            const poiId = btn.id.split("--")[1]
            btn.addEventListener("click", () => {
                const response = confirm("Are you sure you want to delete this entry?")
                if (response) {
                    apiHandler.deletePoi(poiId)
                        .then(refresh.poiList);
                }
            })
        })
    },
}

export default eventListeners 