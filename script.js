const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");

const result = document.getElementById("result");
const errorMessage = document.getElementById("errorMessage");


convertBtn.addEventListener("click", convertTemperature);


function convertTemperature() {

    const temperature = parseFloat(temperatureInput.value);

    const from = fromUnit.value;
    const to = toUnit.value;


    // Input validation
    if (temperatureInput.value.trim() === "" || isNaN(temperature)) {

        errorMessage.textContent =
            "Please enter a valid number.";

        result.textContent = "--";

        return;
    }


    errorMessage.textContent = "";


    let celsius;


    // Step 1: Convert input temperature to Celsius

    if (from === "celsius") {

        celsius = temperature;

    }

    else if (from === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;

    }

    else if (from === "kelvin") {

        celsius = temperature - 273.15;

    }


    let convertedTemperature;
    let symbol;


    // Step 2: Convert Celsius to target unit

    if (to === "celsius") {

        convertedTemperature = celsius;
        symbol = "°C";

    }

    else if (to === "fahrenheit") {

        convertedTemperature =
            (celsius * 9 / 5) + 32;

        symbol = "°F";

    }

    else if (to === "kelvin") {

        convertedTemperature =
            celsius + 273.15;

        symbol = "K";

    }


    // Display result

    result.textContent =
        convertedTemperature.toFixed(2) + " " + symbol;

}


// Allow conversion using Enter key

temperatureInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        convertTemperature();

    }

});