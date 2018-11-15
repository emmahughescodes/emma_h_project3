// answer key
const poses = {
    a: [{name: 'downward dog', desc: 'whatever' }, {name: 'upward dog', desc: 'upwhatever'}],
    b: [{name: 'eagle', desc: 'bird'}, {name: 'pigeon', desc: 'fat bird'}],
    c: [{name: 'cow', desc: 'moo'}, {name: 'cat', desc: 'meow'}],
    unique: [{ name: 'unicorn', desc: 'yippy' }, { name: 'cat', desc: 'meow' }]
}

const quizApp = {};

quizApp.init = function(){
    quizApp.getResults();
};

quizApp.analyzeResults = function (resultsArray) {
    let aCount = 0;
    let bCount = 0;
    let cCount = 0;
    let dCount = 0;
    let eCount = 0;
    for (let i = 0; i < resultsArray.length; i++) {
        if (resultsArray[i] === "A") {
            aCount = aCount + 1; 
        } else if (resultsArray[i] === "B") {
            bCount++;
        } else if (resultsArray[i] === "C") {
            cCount++;
        } else if (resultsArray[i] === "D") {
            dCount++;
        } else if (resultsArray[i] === "E") {
            eCount++;
        }
    }
    console.log(aCount, bCount, cCount, dCount, eCount);
    // which letter appears the most? Put letter count and the value into an object
    const letterObject = {
        A:aCount, 
        B:bCount, 
        C:cCount, 
        D:dCount, 
        E:eCount
    }; 

    //check if the user selected one of each letter: 
    if (aCount === bCount === cCount === dCount === eCount) {
        //return unique pose answer
    }
    // call function to get the letter that occurs the most
    
    const letterCount = quizApp.maxLetter(letterObject);
    
    // console.log("yay lettercount");
    // console.log(letterCount);
    // return letterCount;
};

// quizApp.maxLetter = function (letterObject) {
//     const keys = Object.keys(letterObject);
//     console.log(letterObject.A + "what;s this?");
//     if (letterObject['A'] == letterObject['B'] == letterObject['C'] == letterObject['D'] == letterObject['A'] == 'E') {
//         console.log("theyre all the same");
//         return "same";
//     }
    
//     let maxVal = keys[0];
//     for (let i = 1; i < keys.length; i++) {
//         compareVal = keys[i];
//         if (letterObject[compareVal] >= letterObject[maxVal]) {
//             maxVal = compareVal;
//         }
//     }
//     // if (maxVal === compareVal) {
//     //     //call randomizer function 

//     // }
//     // if () {

//     // }
//     return maxVal;
// };

quizApp.getResults = function(){
    $('form').on('submit', function (event) {
    //this is code only to be run when the form is submitted 
    event.preventDefault();
    //print this out to check what the event is
    // console.log(event, "hola");

    // Capture the values of the radio buttons into an object where the keys are the letter names and the values will be the count throughout the quiz
    const results = [];
    //function to push the user's answers to the array after they click submit
    // const addResults = function () {};
    // console.log("hellloooooo");
    const resultsObject = $('input:checked');
    console.log(resultsObject);
    // console.log("byeeeeeeeee");

    for (let i = 0; i < resultsObject.length; i++) {
        results.push(resultsObject[i].value);
        // console.log(resultsObject[i].value);
    };

    //print out array of results ie. [A,B,B,C,D]
    console.log(results);

    //Analyze results
    //the analyzeResults function returns back the majority letter that the user answered
    const letterMajority = quizApp.analyzeResults(results);
    //output majority letter
    //console.log(letterMajority + "letter majority");

    });
};



$(function(){
    quizApp.init();

    
});

