
let sectionsTitle = document.querySelectorAll("h1.title"),
    // ###############
    overAllTimeInputs = document.querySelectorAll(".overAllTime input"),
    timePerLapSpan = document.querySelector(".overAllTime .sec"),
    lapsNumSpan = document.querySelector(".overAllTime .laps"),
    finalTimeSpan = document.querySelector(".overAllTime .final"),
    timePerLap,
    lapsNum,
    finalTime,
    // ##########
    // calcFinalTimeSection = document.querySelector("section.timePerLap"),
    timePerLapInputs = document.querySelectorAll(".timePerLap input"),
    minutesSpan = document.querySelector(".timePerLap span.minutes"),
    kilosSpan = document.querySelector(".timePerLap span.kilos"),
    finalTimeSpanSecSection = document.querySelector(".timePerLap span.final"),
    overAllFinalTime = document.querySelector(".timePerLap span.overAllFinalTime");

function mainFirstFunction() {
    overAllTimeInputs[0].oninput = () => {
        lapsNum = overAllTimeInputs[0].value
        lapsNumSpan.innerHTML = overAllTimeInputs[0].value
        if (overAllTimeInputs[0].value === "") {
            lapsNumSpan.innerHTML = 0
        }
        calcFinalTime()
    }

    overAllTimeInputs[1].oninput = () => {
        timePerLap = overAllTimeInputs[1].value
        timePerLapSpan.innerHTML = `${overAllTimeInputs[1].value}/min`
        if (overAllTimeInputs[1].value === "") {
            timePerLapSpan.innerHTML = 0
        }
        calcFinalTime()
    }

    function calcFinalTime() {
        let seconds,
            minutes,
            calc;

        if (timePerLap % 1 !== 0 && overAllTimeInputs[1].value.length !== 0) {
            calc = (+timePerLap.split(".")[1] + 60) * (lapsNum)
            minutes = Math.trunc(calc / 60)
            seconds = calc % 60
            finalTimeSpan.innerHTML = `${minutes}.${seconds}/Min`
        } else if (overAllTimeInputs[1].value.length !== 0) {
            calc = 60 * (lapsNum)
            minutes = Math.trunc(calc / 60)
            seconds = calc % 60
            finalTimeSpan.innerHTML = `${minutes}.${seconds}/Min`
        }

    }
}
mainFirstFunction()

function mainSecondFunction() {
    timePerLapInputs[0].oninput = () => {
        kilosSpan.innerHTML = timePerLapInputs[0].value
        timePerLapSec()
    }

    timePerLapInputs[1].oninput = () => {
        minutesSpan.innerHTML = `${timePerLapInputs[1].value}/min`
        if (timePerLapInputs[1].value === '') {
            minutesSpan.innerHTML = `0/min`
        }
        timePerLapSec()
    }

    function timePerLapSec() {
        let numberOfLaps,
            secondsPerKilo,
            secondsOfAllKilos,
            secondsPerLap,
            finalNumber;
        numberOfLaps = timePerLapInputs[0].value * 2.5
        secondsPerKilo = +(Math.trunc(timePerLapInputs[1].value) * 60) + +(timePerLapInputs[1].value % 1 !== 0 ? timePerLapInputs[1].value.split(".")[1] : "");
        secondsOfAllKilos = secondsPerKilo * timePerLapInputs[0].value;
        secondsPerLap = secondsOfAllKilos / numberOfLaps;
        finalNumber = `${Math.trunc(secondsPerLap / 60)}.${secondsPerLap % 60 !== 0 ? secondsPerLap % 60 : ""}/Min`
        finalTimeSpanSecSection.innerHTML = finalNumber
        overAllFinalTime.innerHTML = `${Math.trunc(secondsOfAllKilos / 60)}.${secondsOfAllKilos % 60 !== 0 ? secondsOfAllKilos % 60 : 0}/Min`
    }
    timePerLapSec()

    if (timePerLapInputs[1].value === "" && timePerLapInputs[0].value === "") {
        finalTimeSpanSecSection.innerHTML = "0/Min"
        overAllFinalTime.innerHTML = "0/Min"
    }
}
mainSecondFunction()

function handleSection() {
    sectionsTitle.forEach(element => {
        element.onclick = () => {
            if (element.classList.contains(element.nextElementSibling.classList[0])) {
                element.nextElementSibling.classList.toggle("hide")
            }
        }
    });
}
handleSection()
