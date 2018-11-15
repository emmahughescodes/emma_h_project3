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

    const letterObject = {
        A: aCount, B: bCount, C: cCount, D: dCount, E: eCount};

    console.log("checkobject");
    console.log(Object.keys(letterObject));

    console.log(letterObject);
    
    //call function to get the letter that occurs the most (A, B, C, D, E)
    const maxLetterValue = quizApp.maxLetter(letterObject);
    console.log(maxLetterValue);
    
};

quizApp.maxLetter = function (letterObject) {
    const letterArr = Object.values(letterObject);
    const letterAnswers = [];
    if (Math.max(...letterArr) == 1 ) {
        return "you're unique";
    } else if (Math.max(...letterArr) == 2 ) {
        for (key in letterObject) {
            if (letterObject[key] == 2) {
                letterAnswers.push(key);
            }  
        };
        return quizApp.randomize(letterAnswers);
        
    } else if (Math.max(...letterArr) == 3 ) {
        for (key in letterObject) {
            if (letterObject[key] == 3) {
                letterAnswers.push(key);
            }
        };
        return quizApp.randomize(letterAnswers);
    }
};

quizApp.randomize = function (letterAnswers) {
    const total = letterAnswers.length;
    const randLetter = letterAnswers[Math.floor(Math.random() * Math.floor(total))];
    return randLetter;
};

quizApp.getResults = function(){
    $('form').on('submit', function (event) {
    //this is code only to be run when the form is submitted 
    event.preventDefault();
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
    const poseCategory = quizApp.analyzeResults(results);
    console.log("i escaped");

    });
};



$(function(){
    quizApp.init();

    
});

