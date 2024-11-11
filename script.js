function person() {
    console.log("heii");

    const userName = "Tom";
    const userAge = 23;
    let isOnline = true;

    isOnline = false;

    console.log(userName, userAge, isOnline);

}

//person();

const viewPersonInfo = document.querySelector("#viewPersonInfo");
console.log(viewPersonInfo);

viewPersonInfo.addEventListener("click", person);

function simpleCalculator(num1, num2) {
    const sum = num1 + num2;

    console.log(sum);
}

//simpleCalculator(5, 4);

const viewCalculation = document.querySelector("#viewCalculation");
console.log(viewCalculation);

//viewCalculation.addEventListener("click", simpleCalculator(5, 4));

viewCalculation.addEventListener("click", function simpleCalculator(num1, num2) {
    const sum = num1 + num2;

    console.log(sum);
    //simpleCalculator(4, 5);
}
)

