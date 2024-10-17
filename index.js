// TODO: this file! :)

// create object with empty arrays to push to
const state = {
    numberBank: [],
    Odds: [],
    Evens: [],
}

// delcare all variables referencing DOM elements on the HTML
const sectionBank = document.querySelector('#numberBank');
const bankOutput = sectionBank.querySelector('output');
const sortOne = document.querySelector('#sortOne');
const form = document.querySelector('form');
const inputNum = document.querySelector('#number');
const sectionOdds = document.querySelector('#odds');
const oddsOutput = sectionOdds.querySelector('output');
const sectionEvens = document.querySelector('#evens');
const evensOutput = sectionEvens.querySelector('output');
const sortAll = document.querySelector('#sortAll');

// Updates HTML in the browser to show modified array
function showState() {
    bankOutput.textContent = state.numberBank;
    oddsOutput.textContent = state.Odds;
    evensOutput.textContent = state.Evens;
}

form.addEventListener("submit", (event) => {
    event.preventDefault(); //keeps the page from refreshing when you click the buttons

    if (!inputNum.value) {
        return;
    } else {
        state.numberBank.push(inputNum.value);
    }
    showState();
})

sortOne.addEventListener('click', (event) => {
    event.preventDefault();
    if (state.numberBank.length == 0) {
        return;
    }
    const one = state.numberBank.shift();
    if (one % 2 === 0) {
        state.Evens.push(one)
    } else {
        state.Odds.push(one);
    }
    showState();
})

sortAll.addEventListener('click', (event) => {
    event.preventDefault();
    if (state.numberBank.length == 0) {
        return;
    }
    while (state.numberBank.length > 0) {
        const one = state.numberBank.shift();
        if (one % 2 == 0) {
            state.Evens.push(one)
        } else {
            state.Odds.push(one);
        }
    }
    showState();
})