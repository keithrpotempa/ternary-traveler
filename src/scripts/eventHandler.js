import apiHandler from "./apiHandler.js";
import htmlFactory from "./htmlFactory.js";
import refresh from './main.js'
import domManager from "./domManager.js";
import validation from "./validation.js"

const eventListeners = {
    addSaveEventListener(){
        const saveBtn = document.querySelector(".save-button");
        saveBtn.addEventListener("click", () => {
            const poiObject = htmlFactory.poi.makePoiObject()
            if (validation.poiRequiredFields(poiObject)) {
                apiHandler.savePoi(poiObject)
                    .then(apiHandler.clearForm())
                    .then(refresh.poiList);
            } else {
                alert("Please enter all required fields")
            }
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
                    .then(eventListeners.addClearReviewEventListener)
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
    addClearEventListener() {
        const clearBtn = document.querySelector(".reset-button");
        clearBtn.addEventListener("click", () => {
            apiHandler.clearForm();
        })
    },
    addClearReviewEventListener() {
        const clearBtn = document.querySelector(".reset-review-button");
        clearBtn.addEventListener("click", () => {
            apiHandler.clearReviewForm();
        })
    }
}

export default eventListeners 