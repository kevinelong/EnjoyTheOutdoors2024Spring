
function option(text) {
    const o = document.createElement("option");
    o.innerText = text;
    return o;
}

document.addEventListener("DOMContentLoaded", () => {
    function showResults() {
        if (locationRadio.checked) {

        } else {

        }
    }
    locations.addEventListener("change", showResults);
    parkTypes.addEventListener("change", showResults);

    function handleSearchBy(e) {
        if (locationRadio.checked) {
            locationLabel.style.display = "block";
            parkTypeLabel.style.display = "none";
        } else {
            locationLabel.style.display = "none";
            parkTypeLabel.style.display = "block";
        }
    }
    locationRadio.addEventListener("click", handleSearchBy)
    parkTypeRadio.addEventListener("click", handleSearchBy)

    locationsArray
        .map(option)
        .forEach(oe => locations.appendChild(oe));

    parkTypesArray
        .map(option)
        .forEach(pto => parkTypes.appendChild(pto));


});//end loaded 