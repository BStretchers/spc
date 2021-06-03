
let checkboxes = document.querySelectorAll(".check-buttons input");
let levers = document.querySelectorAll(".levers input");
let launchButton = document.querySelector(".control-panel__inner input[type=\"button\"]:last-child");

let password = document.querySelector("input[type=password]");
let rocket = document.querySelector(".rocket");


checkboxes.forEach(element => element
    .setAttribute("disabled", ""));
levers.forEach(element => element
    .setAttribute("disabled", ""));
launchButton.setAttribute("disabled", "");

document.querySelector(".control-panel__inner input:nth-child(2)")
    .addEventListener("click", function () {
        let passwordValue = password.value;
        if (passwordValue === "TrustNo1") {
            checkboxes.forEach(element => element
                .removeAttribute("disabled"));
            levers.forEach(element => element
                .removeAttribute("disabled"));
        }
    });

function wat() {
    let allValuesChecked = true;
    checkboxes.forEach(c => {if (c.checked == false) allValuesChecked = false;});
    levers.forEach(l => {if (l.value != 100) allValuesChecked = false;});
    if (allValuesChecked)
        launchButton.removeAttribute("disabled");
    else {
            launchButton.setAttribute("disabled", "");
    }
}

checkboxes.forEach(c => c.onchange = wat);
levers.forEach(c => c.onchange = wat);


launchButton.addEventListener("click", function wat(e){
    let left = 50;
    let top = 40;

    function flight(){
        left += 0.7;
        top--;
        rocket.style.left = left + "%";
        rocket.style.top = top + "%";
    }

    let flightInterval = setInterval(flight, 15);
    setTimeout(() => clearInterval(flightInterval), 3000);
})