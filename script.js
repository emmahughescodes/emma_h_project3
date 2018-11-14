// answer key
const poses = {
    a: [{name: 'downward dog', desc: 'whatever' }, {name: 'upward dog', desc: 'upwhatever'}],
    b: [{name: 'eagle', desc: 'bird'}, {name: 'pigeon', desc: 'fat bird'}],
    c: [{name: 'cow', desc: 'moo'}, {name: 'cat', desc: 'meow'}],
}

const quizApp = {};

quizApp.init = function(){
    quizApp.getResults();
};

quizApp.getResults = function(){
    $('form').on('submit', function (event) {
    //this is code only to be run when the form is submitted 
    event.preventDefault();
    //print this out to check what the event is
    // console.log(event, "hola");

    // Capture the values of the radio buttons into an array
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
    const letterMajority = analyzeResults(results);

    });
};

quizApp.analyzeResults = function(resultsArray) {
    const aCount = 0;
    const bCount = 0;
    const cCount = 0;
    const dCount = 0;
    const eCount = 0;
    for (let i = 0; i < resultsArray.lenth; i++) {
        if (resultsArray[i] === "A") {
            aCount++; 
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
};

$(function(){
    quizApp.init();

    
});

