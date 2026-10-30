
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let expression = "";

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.dataset.value;
        const action = button.dataset.action;

        if (action === "clear") {
            expression = "";
            display.value = "";
            return;
        }

        if (action === "delete") {
            expression = expression.slice(0, -1);
            display.value = expression;
            return;
        }

        if (action === "calculate") {
            calculateResult();
            return;
        }

        if (value !== undefined) {
            expression += value;
            display.value = expression;
        }

    });

});

function calculateResult() {

    try {

        if (!/^[0-9+\-*/%.() ]+$/.test(expression)) {
            throw new Error("Invalid expression");
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        expression = String(
            Number(result.toFixed(10))
        );

        display.value = expression;

    } catch (error) {

        display.value = "Error";
        expression = "";

    }

}
