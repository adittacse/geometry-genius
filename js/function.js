// blog button
document.getElementById("blog").addEventListener("click",function() {
    window.location.href = "blog.html"
})

// get the value from input
function getValueFromInput(id) {
    const mainId = document.getElementById(id);
    const inputValueString = mainId.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

// set the value
function setValueInText (id, returnValue) {
    const mainId = document.getElementById(id)
    mainId.innerText = returnValue;
}


