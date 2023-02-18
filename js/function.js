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

// add new element
let result = 0;
function addNewElement(area , areaName) {
    const areaContainer = document.getElementById("table-container");
    const tr = document.createElement("tr");
    let fixedArea = area.toFixed(2);
    result += 1;
    tr.innerHTML = `
        <td>${result}</td>
        <td class="pl-2 text-sm w-8 text-left">${areaName}</td>
        <td class="px-2 text-sm">${fixedArea}</td>
        <td><button class="btn-primary">Convert to M<sup>2</sup></button></td>
    `;
    if(isNaN(area)) {
        return;
    }
    areaContainer.appendChild(tr);
}
