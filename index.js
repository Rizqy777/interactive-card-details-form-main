const inputCardholder = document.querySelector(".input_cardholder");
const inputCardNumber = document.querySelector(".input_card-number");
const inputMonth = document.querySelector(".month");
const inputYear = document.querySelector(".year");
const inputCvc = document.querySelector(".cvc");
const submit = document.querySelector(".submit");
const spanCardholderEmpty = document.querySelector(".span_cardholder_empty");
const spanCardNumberEmpty = document.querySelector(".span_cardnumber_empty");
const spanEmptyMonth = document.querySelector(".span_month_empty");
const spanEmptyYear = document.querySelector(".span_year_empty");
const spanEmptyCvc = document.querySelector(".span_cvc_empty");
const spanWrongFormat = document.querySelector(".span_wrong_format");
const spanInvalidCardholder = document.querySelector(".invalid_cardholder");
const nameCard = document.querySelector(".name-card");
const cardNumber = document.querySelector(".number-front-card");
const cvcCard = document.querySelector(".number-back-card");
const dateMonth = document.querySelector(".date-month");
const dateYear = document.querySelector(".date-year");
const containerForm = document.querySelector(".container_form");
const containerHidden= document.querySelector(".container_hidden");

function inputDateMonth(){
    dateMonth.innerHTML = inputMonth.value;
    if (dateMonth.innerHTML === ""){
        dateMonth.innerHTML = inputMonth.ariaPlaceholder;
    }
}

function inputDateYear(){
    dateYear.innerHTML = inputYear.value;
    if (dateYear.innerHTML === ""){
        dateYear.innerHTML = inputYear.ariaPlaceholder;
    }
}

function inputName() {
    nameCard.innerHTML = inputCardholder.value;
    if (nameCard.innerHTML === "") {
        nameCard.innerHTML = inputCardholder.ariaPlaceholder;
    }
}
function inputCv () {
    cvcCard.innerHTML = inputCvc.value;
    if (cvcCard.innerHTML === ""){
        cvcCard.innerHTML = inputCvc.ariaPlaceholder;
    }
}

function formatAndShowCardNumber(event) {
    const cardInput = event.target;
    const formattedNumber = cardInput.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');

    cardNumber.textContent = formattedNumber || cardInput.ariaPlaceholder;
}


submit.addEventListener("click", () => {
    let confirmation = true;
    function validateField(input,stringEmpty){
        
        if (input.value === ""){
            stringEmpty.style.display = "block";
            input.style.border = "1px solid red";
            confirmation = false

            
        } else {
            input.style.border = "";
            stringEmpty.style.display = "none";
        }     

        if (inputCardholder.value !== "" && !isNaN(inputCardholder.value))  {
            inputCardholder.style.border = "1px solid red";
            spanInvalidCardholder.style.display = "block";
            confirmation = false

            
            } else {
            spanInvalidCardholder.style.display = "none";
        }

        if (inputCardNumber.value !== "" && !/^\d{16}$/.test(inputCardNumber.value)){
            inputCardNumber.style.border = "1px solid red";
            spanWrongFormat.style.display = "block"
            confirmation = false
        } else{
            spanWrongFormat.style.display = "none"
        }
            
                
                        
        
    }
    
    validateField(inputCardholder,spanCardholderEmpty);   
    validateField(inputCardNumber,spanCardNumberEmpty);
    validateField(inputMonth,spanEmptyMonth );
    validateField(inputYear,spanEmptyYear);
    validateField(inputCvc,spanEmptyCvc);

    if (confirmation === true){
        containerForm.style.display = "none";
        containerHidden.style.display = "flex";
    }
})


