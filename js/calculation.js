// triangle calculation
document.getElementById("triangle-btn").addEventListener("click", function () {
    const firstValue = getValueFromInput("triangle-first");
    const secondValue = getValueFromInput("triangle-second");
    const area = 0.5 * firstValue * secondValue;
    setValueFormula("tri-a", "tri-b", firstValue, secondValue);
});

// rectangle calculation
document.getElementById("rectangle-btn").addEventListener("click", function () {
    const firstValue = getValueFromInput("rectangle-first");
    const secondValue = getValueFromInput("rectangle-second");
    const area = firstValue * secondValue;
    setValueFormula("rec-a", "rec-b", firstValue, secondValue);
});

// parallelogram calculation
document.getElementById("para-btn").addEventListener("click", function () {
    const firstValue = getValueFromInput("para-first");
    const secondValue = getValueFromInput("para-second");
    const area = firstValue * secondValue;
    setValueFormula("par-a", "par-b", firstValue, secondValue);
});

// rhombus calculation
document.getElementById("rhombus-btn").addEventListener("click",function() {
    const firstValue = getValueFromInput("rhombus-first");
    const secondValue = getValueFromInput("rhombus-second");
    const area = 0.5 * firstValue * secondValue;
    setValueFormula("rom-a","rom-b", firstValue, secondValue);
})