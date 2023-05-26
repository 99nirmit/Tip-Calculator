// global access to all inputs / divs? here 

const billTotalInput = document.getElementById('billInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

// Get number of pepole from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// calculate the total bill per person

const calculateBill = () =>{
    // console.log(numberOfPeople);
    // console.log(billTotalInput.value);

    // get bill from user input and convert it into number
    const bill = Number(billTotalInput.value)
    // console.log(bill);

    // get the tip from user & convert it into a percentage(divide by 100)
    const tipPercentage = Number(tipInput.value) / 100;
    // console.log(tipPercentage);

    // get the total tip amount
    const tipAmount = bill * tipPercentage;
    // console.log({tipAmount});

    // calculate the total (tipAmount + bill)
    const total = tipAmount + bill;
    // console.log({total});

    // calculate per person total (total divided by number of poeple)
    const perPersonTotal = total / numberOfPeople;
    // console.log(perPersonTotal);

    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

// spilts the bill between more people  

const increase = () =>{

    // increment the amount of people
    numberOfPeople++;

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople;

    // calculate the bill based on the new number of people
    calculateBill();
}

const decrease = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you cant't decrease)
    if(numberOfPeople <= 1){
        alert("Hey cannot have less than one person")
        return;
    }

    // decrement the amount of people
    numberOfPeople--;

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople;

    // calculate the bill based on the new number of people
    calculateBill();
    
}