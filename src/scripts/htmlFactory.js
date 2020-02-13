const htmlFactory = {
    form: {
        makePlaceOptions (places) {
            let placeOptionsHtml = ""; 
            places.forEach(place => {
                placeOptionsHtml += `<option value="${place.id}">${place.name}</option>`
            })
            return `
                <fieldset>
                    <label for="place-options">Places</label>
                    <select name="place-options" id="place-options">
                        ${placeOptionsHtml}
                    </select> 
                </fieldset>
            `
        },
        makePoiForm() {
            return `
                <article id="article__form">
                    <input type="hidden" id="poi-id" value="">
                    <h2>New Point of Interest</h2>
                    <form action="">
                        <div id="place-options__container"></div>
                        <div>
                            <fieldset>
                                <label for="poi-name__field">Name</label>
                                <input type="text" name="poi-name__field" id="poi-name__field" placeholder="Enter name here...">
                            </fieldset>
                            <fieldset>
                                <label for="poi-description__field">Description</label>
                                <textarea name="poi-description__field" id="poi-description__field" placeholder="Enter description here..."></textarea>
                            </fieldset>
                            <fieldset>
                                <label for="poi-cost__field">Cost</label>
                                <input type="number" name="poi-cost__field" id="poi-cost__field"></input>
                            </fieldset>
                            <fieldset>
                                <label for="poi-review__field">Review</label>
                                <textarea name="poi-review__field" id="poi-review__field" placeholder="Enter review here..."></textarea>
                            </fieldset>
                            <fieldset>
                                <label for="poi-rating__field">Rating (1-5)</label>
                                <input type="number" name="poi-rating__field" id="poi-rating__field" min="1" max="5"></input>
                            </fieldset>
                        </div>
                    </form>
                    <div class="buttons">       
                        <button class="save-button">Save</button>
                        <button class="reset-button">Reset</button>
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
            let review = document.querySelector("#poi-review__field").value;
            let rating = document.querySelector("#poi-rating__field").value;

            return {
                "id": id,
                "placeId": parseInt(placeId),
                "name": name,
                "description": description,
                "cost": parseInt(cost),
                "review": review,
                "rating": parseInt(rating)
            }
        },
        makePoiHtml (poiObject) {
            let reviewHtml = ""
            if (poiObject.review) {
                reviewHtml += `
                    <h3>Review: ${poiObject.review}</h3>
                `
            }
            if (poiObject.rating) {
                reviewHtml += `
                    <h3>Review: ${poiObject.rating}</h3>
                `
            }

            return `
                <article>                
                    <h2>${poiObject.name}</h2>
                    <div>
                        <h3>Location: ${poiObject.place.name}</h3>
                        <h3>Description: ${poiObject.description}</h3>
                        <h3>Cost: ${poiObject.cost}</h3>
                        ${reviewHtml}
                    </div>
                    <button class="delete-button" id="delete-button--${poiObject.id}">DELETE</button>
                    <button class="edit-button" id="edit-button--${poiObject.id}">EDIT</button>
                </article>
                `
        },
    }
}

export default htmlFactory