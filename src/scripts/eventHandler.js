import apiHandler from "./apiHandler.js";
import htmlFactory from "./htmlFactory.js";
import refresh from './main.js'
import domManager from "./domManager.js";

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
    addSaveReviewEventListener(){
        const saveBtn = document.querySelector(".save-review-button");
        saveBtn.addEventListener("click", () => {
            const poiReviewObject = htmlFactory.poi.makePoiReviewObject()
            apiHandler.savePoiReview(poiReviewObject)
                .then(apiHandler.clearReviewForm())
                .then(refresh.poiList)
                .then(domManager.form.removePoiReviewForm)
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
    addEditReviewEventListener() {
        const editBtns = document.querySelectorAll(".edit-review-button");
        editBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const poiId = e.target.id.split("--")[1]
                apiHandler.getPoi(poiId)
                    .then(domManager.form.renderPoiReviewForm)
                    .then(apiHandler.editReview)
                    .then(eventListeners.addSaveReviewEventListener)
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