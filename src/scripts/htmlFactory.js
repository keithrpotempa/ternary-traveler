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
                    <input type="hidden" id="entry-id" value="">
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
                        </div>
                    </form>
                    <div class="buttons">       
                        <button class="save-button">Save</button>
                        <button class="reset-button">Reset</button>
                    </div>
                </article>
                `
        }
    }
}

export default htmlFactory