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