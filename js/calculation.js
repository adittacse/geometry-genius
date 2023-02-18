//triangle calculation
document.getElementById("triangle-btn").addEventListener("click", function () {
    const firstValue = getValueFromInput("triangle-first");
    const secondValue = getValueFromInput("triangle-second");
    const area = 0.5 * firstValue * secondValue;
    setValueFormula("tri-a", "tri-b", firstValue, secondValue);
});