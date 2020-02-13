const htmlFactory = {
    form: {
        makePlaceOptions (places) {
            let placeOptionsHtml = ""; 
            places.forEach(place => {
                placeOptionsHtml += `<option value="${place.id}">${place.name}</option>`
            })
            return `
                <fieldset>
                    <label for="place-options">Place</label>
                    <select name="place-options" id="place-options">
                        ${placeOptionsHtml}
                    </select> 
                </fieldset>
            `
        },
        makePoiForm(poiId) {
            // Passing this "new" if it is the initial "new form" creation
            let title;
            let value;
            let articleId;
            if (poiId == "new") {
                title = "New Point of Interest"
                articleId = "article-form__new"
            // Otherwise, this will be passed the id of the poi being edited
            } else {
                title = "Editing Point of Interest"
                value = poiId
                articleId = `article-form-edit__${poiId}`
            }

            return `
                <article id="${articleId}">
                    <input type="hidden" id="poi-id" value="${value}">
                    <h2>${title}</h2>
                    <form action="">
                        <div>
                            <fieldset>
                                <label for="poi-name__field">Name</label>
                                <input type="text" name="poi-name__field" id="poi-name__field" placeholder="Enter name here...">
                            </fieldset>
                            <fieldset>
                                <label for="poi-description__field">Description</label>
                                <textarea name="poi-description__field" id="poi-description__field" placeholder="Enter description here..."></textarea>
                            </fieldset>
                            <div class="row-fields">
                                <div id="place-options__container"></div>
                                <fieldset>
                                    <label for="poi-cost__field">Cost</label>
                                    <input type="number" name="poi-cost__field" id="poi-cost__field"></input>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                    <div class="buttons">       
                        <button class="save-button">Save</button>
                        <button class="reset-button">Reset</button>
                    </div>
                </article>
                `
        },
        makePoiReviewForm(poiObject) {
            let review = "";
            let rating = 1;
            if (poiObject.review !== undefined) {
                review = poiObject.review;
            }
            if (poiObject.rating) {
                rating = poiObject.rating;
            }
            return `
            <article id="poi-review__form"> 
                <input type="hidden" id="poi-review-id" value="${poiObject.id}">               
                <h2>Add/Edit Review</h2>
               
                <div>
                    <p><strong>Name:</strong>${poiObject.name}</p>
                    <p><strong>Location:</strong> ${poiObject.place.name}</p>
                    <p><strong>Description:</strong> ${poiObject.description}</p>
                </div>
                <div>
                    <fieldset>
                        <label for="poi-review-cost__field">Cost</label>
                        <input type="number" name="poi-review-cost__field" id="poi-review-cost__field" value="${poiObject.cost}"></input>
                    </fieldset>
                    <fieldset>
                        <label for="poi-review__field">Review</label>
                        <textarea name="poi-review__field" id="poi-review__field" value="${review}" placeholder="Enter review here..."></textarea>
                    </fieldset>
                    <fieldset>
                        <label for="poi-rating__field">Rating (1-5)</label>
                        <input type="number" name="poi-rating__field" id="poi-rating__field" value="${rating}" min="1" max="5"></input>
                    </fieldset>
                </div>
                <div class="buttons">       
                    <button class="save-review-button">Save</button>
                    <button class="reset-review-button">Reset</button>
                </div>
            </article>
            `
        }
    },
    poi: {
        makePoiObject() {
            let id = document.querySelector("#poi-id").value;
            let placeId = document.querySelector("#place-options").value;
            let name = document.querySelector("#poi-name__field").value;
            let description = document.querySelector("#poi-description__field").value;
            let cost = document.querySelector("#poi-cost__field").value;

            if (cost === "") {cost = 0;} 
            else {cost = parseInt(cost)}

            return {
                "id": id,
                "placeId": parseInt(placeId),
                "name": name,
                "description": description,
                "cost": cost
            }
        },
        makePoiReviewObject(){
            let id = document.querySelector("#poi-review-id").value;
            let review = document.querySelector("#poi-review__field").value;
            let rating = document.querySelector("#poi-rating__field").value;
            let cost = document.querySelector("#poi-review-cost__field").value;

            if (cost === "") {cost = 0;} 
            else {cost = parseInt(cost)}

            return {
                "id": id,
                "review": review,
                "rating": parseInt(rating),
                "cost": cost
            }
        },
        makePoiHtml (poiObject) {
            let reviewHtml = ""
            if (poiObject.review) {
                reviewHtml += `<p><strong>Review:</strong> ${poiObject.review}</p>`
            }
            if (poiObject.rating) {
                reviewHtml += `<p><strong>Rating:</strong> ${poiObject.rating}</p>`
            }

            if (poiObject.cost) {
                reviewHtml += `<p><strong>Cost:</strong> ${poiObject.cost}</p>`
            }

            return `
                <div id="poi-container__${poiObject.id}">
                    <article>                
                        <h2>${poiObject.name}</h2>
                        <div>
                            <p><strong>Location:</strong> ${poiObject.place.name}</p>
                            <p><strong>Description:</strong> ${poiObject.description}</p>
                            ${reviewHtml}
                        </div>
                        <div class="buttons"> 
                            <button class="delete-button" id="delete-button--${poiObject.id}">DELETE</button>
                            <button class="edit-button" id="edit-button--${poiObject.id}">EDIT DETAILS</button>
                            <button class="edit-review-button" id="edit-review-button--${poiObject.id}">ADD/EDIT REVIEW</button>
                        </div> 
                    </article>
                </div>
                `
        },
    }
}

export default htmlFactory