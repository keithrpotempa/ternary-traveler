const validation = {
    poiRequiredFields(poiObject) {
        if (
            poiObject.placeId
            && poiObject.name
            && poiObject.description
            ) {
            return true;
        } else {return false}
    }
}

export default validation