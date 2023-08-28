
let inputs = document.querySelectorAll(".overAllTime input"),
    timePerLapSpan = document.querySelector(".overAllTime .sec"),
    lapsNumSpan = document.querySelector(".overAllTime .laps"),
    finalTimeSpan = document.querySelector(".overAllTime .final"),
    timePerLap,
    lapsNum,
    finalTime;

inputs[0].oninput = () => {
    lapsNum = inputs[0].value
    lapsNumSpan.innerHTML = inputs[0].value
    if (inputs[0].value === "") {
        lapsNumSpan.innerHTML = 0
    }
    finalResult()
}

inputs[1].oninput = () => {
    timePerLap = inputs[1].value
    timePerLapSpan.innerHTML = `${inputs[1].value}/min`
    if (inputs[1].value === "") {
        timePerLapSpan.innerHTML = 0
    }
    finalResult()
}

function finalResult() {
    if (inputs[0].value !== "" && inputs[1].value !== "") {
        var seconds,
            minutes;

        if (timePerLap % 1 !== 0) {
            seconds = +(+(timePerLap.split(".")[1]) * lapsNum);
            if (lapsNum % 1 !== 0) {

            }
            minutes = (Math.trunc(timePerLap) * lapsNum) + Math.trunc((seconds / 60));
            seconds = seconds % 60
        } else {
            minutes = (Math.trunc(timePerLap) * lapsNum)
        }

        if (seconds === undefined) {
            finalTimeSpan.innerHTML = `${minutes} min`
        } else {
            if (lapsNum % 1 !== 0) {
                if ((+Math.trunc(seconds) + (+lapsNum.split(".")[1] - 2) * 10) >= 60) {
                    minutes += Math.trunc((+Math.trunc(seconds) + (+lapsNum.split(".")[1] - 2) * 10) / 60)
                    seconds = Math.trunc((+Math.trunc(seconds) + (+lapsNum.split(".")[1] - 2) * 10) % 60)
                    finalTimeSpan.innerHTML = `${Math.trunc(minutes)}.${+Math.trunc(seconds)} min`
                }
            } else {
                finalTimeSpan.innerHTML = `${minutes}.${seconds} min`
            }
        }

    }
}
