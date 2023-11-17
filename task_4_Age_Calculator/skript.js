function calculateAge() {
    const birthdateInput = document.getElementById("birthdate");
    const yearsDisplay = document.getElementById("years");
    const monthsDisplay = document.getElementById("months");
    const daysDisplay = document.getElementById("days");

    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();

    if (isNaN(birthdate.getTime())) {
        alert("Invalid Date of Birth");
        return;
    }

    const ageInMilliseconds = currentDate - birthdate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    const ageYears = Math.floor(ageInYears);
    const ageMonths = Math.floor((ageInYears - ageYears) * 12);
    const ageDays = Math.floor((ageInYears - ageYears) * 365.25);

    yearsDisplay.textContent = ageYears;
    monthsDisplay.textContent = ageMonths;
    daysDisplay.textContent = ageDays;
}

const birthdateInput = document.getElementById("birthdate");
const calculateButton = document.querySelector("button");

birthdateInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        calculateAge();
    }
});

calculateButton.addEventListener("click", calculateAge);
