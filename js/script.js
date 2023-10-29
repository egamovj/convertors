document.addEventListener('DOMContentLoaded', function() {
    const walkSpeed = 3.6;
    const bikeSpeed = 20.1;
    const carSpeed = 70;
    const planeSpeed = 800;

    const distanceInput = document.getElementById('distance');
    const calculateButton = document.getElementById('calculate-button');
    const walkTimeSpan = document.getElementById('walk-time');
    const bikeTimeSpan = document.getElementById('bike-time');
    const carTimeSpan = document.getElementById('car-time');
    const planeTimeSpan = document.getElementById('plane-time');

    calculateButton.addEventListener('click', function(event) {
        event.preventDefault();
        const distance = parseFloat(distanceInput.value);

        const calculateTime = (speed) => {
            const hours = Math.floor(distance / speed);
            const minutes = Math.round((distance / speed - hours) * 60);
            if (minutes === 60) {
                return `${hours + 1} soat 0 minut`;
            }
            return `${hours} hours ${minutes} minutes`;
        };

        walkTimeSpan.textContent = calculateTime(walkSpeed);
        bikeTimeSpan.textContent = calculateTime(bikeSpeed);
        carTimeSpan.textContent = calculateTime(carSpeed);
        planeTimeSpan.textContent = calculateTime(planeSpeed);
    });
});


// Celcius to fahrenheit

document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsius');
    const convertButton = document.getElementById('convert');
    const resultDiv = document.getElementById('result');

    convertButton.addEventListener('click', function() {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9 / 5) + 32;
            resultDiv.textContent = `Temperature in ${celsius}°C = ${fahrenheit}°F`;
        } else {
            resultDiv.textContent = 'Please enter a valid number for Celsius temperature.';
        }
    });
});


// Will we run tomorrow

var formIdea = document.querySelector('.form-idea');
var formIdeaTemp = formIdea.querySelector('.form-idea__temp');
var checkboxRain = formIdea.querySelector('.checkbox-rain');
var checkboxTrain = formIdea.querySelector('.checkbox-train');
var yes = document.querySelector('.yes');
var no = document.querySelector('.no');

formIdea.addEventListener('change', function() {



    if (formIdeaTemp.value < 5 && checkboxTrain.checked && checkboxRain.checked) {
        no.style.color = 'red';
        yes.style.color = 'black';
    } else if (formIdeaTemp.value < 5 && checkboxTrain.checked) {
        no.style.color = 'red';
        yes.style.color = 'black';
    } else if (formIdeaTemp.value < 5 && checkboxRain.checked) {
        no.style.color = 'red';
        yes.style.color = 'black';
    } else if (checkboxTrain.checked) {
        yes.style.color = 'green';
        no.style.color = 'black';
    } else if (checkboxTrain.checked && checkboxRain.checked) {
        yes.style.color = 'green';
        no.style.color = 'black';
    } else if (formIdeaTemp.value < 5 && checkboxTrain.checked) {
        no.style.color = 'red';
        yes.style.color = 'black';
    } else if (checkboxRain.checked) {
        no.style.color = 'red';
        yes.style.color = 'black';
    } else if (formIdeaTemp.value.length === 0) {
        no.style.color = 'black';
        yes.style.color = 'black';
    } else if (formIdeaTemp.value === '') {
        no.style.color = 'red';
        yes.style.color = 'red';
    } else if (formIdeaTemp.value < 5) {
        no.style.color = 'red';
        yes.style.color = 'black';
    } else if (formIdeaTemp.value <= 5 && checkboxRain.checked && checkboxTrain.checked) {
        no.style.color = 'red';
        yes.style.color = 'black';
    } else if (isNaN(formIdeaTemp.value)) {
        no.style.color = 'red';
        yes.style.color = 'red';
    } else if (formIdeaTemp.value >= 5 && formIdeaTemp.value <= 40) {
        yes.style.color = 'green';
        no.style.color = 'black';
    } else {
        yes.style.color = 'black';
        no.style.color = 'red';
    }

});