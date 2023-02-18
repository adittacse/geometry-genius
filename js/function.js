// blog button
document.getElementById("blog").addEventListener("click",function() {
    window.location.href = "blog.html";
})

//take value from input
function getValueFromInput(id) {
    const mainId = document.getElementById(id);
    const inputValueString = mainId.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

//set value function
function setValueInText (id, returnValue) {
    const mainId = document.getElementById(id)
    mainId.innerText = returnValue;
}

//set value in formula
function setValueFormula (input1, input2, setValue1, setValue2) {
    const formulaA = document.getElementById(input1);
    const formulaB = document.getElementById(input2);
    if(isNaN(setValue1) || isNaN(setValue2)){
        alert("Enter a valid number")
        return;
    }
    formulaA.innerText = setValue1;
    formulaB.innerText = setValue2;
}
