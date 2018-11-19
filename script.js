// answer key
// const poses = {
//     A: [{ name: 'downward dog', desc: 'whateverA' }, { name: 'upward dog', desc: 'upwhatever' }, { name: 'sideward dog', desc: 'upwhatever' }, { name: 'lookward dog', desc: 'upwhatever' }, { name: 'leapward dog', desc: 'upwhatever' }, { name: 'backward dog', desc: 'upwhatever' }],
//     B: [{name: 'eagle', desc: 'bird'}, {name: 'pigeonB', desc: 'fat bird'}],
//     C: [{name: 'cow', desc: 'moo'}, {name: 'Cat', desc: 'meow'}],
//     D: [{ name: 'cow', desc: 'moo' }, { name: 'D', desc: 'meow' }],
//     E: [{ name: 'cow', desc: 'moo' }, { name: 'D', desc: 'meow' }],
//     U: [{ name: 'unicorn', desc: 'yippy', img: "assets/downdog.jpg" }]
// }

const poses = {
    A: [{ name: 'Tadasana / Mountain Pose', desc: 'Standing poses help you remain rooted in your beliefs and stand proudly', img: 'assets/mountain-pose.png' }, { name: 'Virabhadrasana I / Warrior 1', desc: 'Standing poses help you remain rooted in your beliefs and stand proudly', img: 'assets/warrior-1.png' }],

    B: [{ name: 'Ardha Matsyendrasana / Seated Spinal Twist', desc: 'Poses that require twisting help with supporting your back and cleansing your body', img: 'assets/seated-spinal-twist.png' }, { name: 'Trikonasana / Triangle Pose', desc: 'Poses that require twisting help with supporting your back and detoxifying your body', img: 'assets/trikonasana.png' }],

    C: [{ name: 'Parsva Bhuja Dandasana / Dragon Fly Pose', desc: 'Arm Balances require your strength and humility to take risks!', img: 'assets/dragonfly-pose.png' }, { name: 'Eka Pada Galavasana / Flying Crow Pose', desc: 'Arm Balances require your strength and humility to take risks!', img: 'assets/flying-crow-pose.png' }],

    D: [{ name: 'Ardha Chandrasana / Half Moon Pose', desc: 'Balance poses give you a theatrical sense of play and a feeling of accomplishment', img: 'assets/halfmoon-pose.png' }, { name: 'Utthita Hasta Padangustasana / Extended Hand to Big Toe Pose', desc: 'Balance poses give you a theatrical sense of play and a feeling of accomplishment', img: 'assets/Extended-hand-to-big-toe.png' }],

    E: [{ name: 'Shavasana / Corpse Pose', desc: 'Restorative poses are made for you! Take on new poses when you are feeling ready but for now concentrate on feeling rested', img: 'assets/savasana.png' }, { name: "Balasana / Child's Pose", desc: 'Restorative poses are made for you! Take on new poses when you are feeling ready but for now concentrate on feeling rested', img: 'assets / child - pose.png' }],
    
    U: [{ name: 'Camatkarasana / Wild Thing Pose', desc: 'You are a range of personality traits and poses! Try out backbends to explore how you are feeling today!', img: "assets/wild-thing-pose.png" }]
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
    console.log(maxLetterValue, "maxLetterValue");

    const poseAnswer = quizApp.poseCalculator(maxLetterValue);
    console.log(poseAnswer, "pose answer");

    $('.results').append(`<img src=${poseAnswer.img}>`)
    // console.log(poses[maxLetterValue]);
};

    quizApp.poseCalculator = function (letterInput) {
        const poseArray = poses[letterInput];
        const randPose = quizApp.randomizeAns(poseArray);
        //console.log(randPose, "randPose");
        return randPose; 
    };

quizApp.maxLetter = function (letterObject) {
    const letterArr = Object.values(letterObject);
    const letterAnswers = [];
    if (Math.max(...letterArr) == 1 ) {
        return "U";
    } else if (Math.max(...letterArr) == 2 ) {
        for (key in letterObject) {
            if (letterObject[key] == 2) {
                letterAnswers.push(key);
            }  
        };
        return quizApp.randomizeAns(letterAnswers);
        
    } else if (Math.max(...letterArr) >= 3 ) {
        for (key in letterObject) {
            if (letterObject[key] >= 3) {
                letterAnswers.push(key);
            }
        };
        return quizApp.randomizeAns(letterAnswers);
    }
};

quizApp.randomizeAns = function (letterAnswers) {
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

    for (let i = 0; i < resultsObject.length; i++) {
        results.push(resultsObject[i].value);
    };

    //print out array of results ie. [A,B,B,C,D]
    console.log(results);

    //Analyze results
    //the analyzeResults function returns back the majority letter that the user answered
    const poseCategory = quizApp.analyzeResults(results);
    console.log("i escaped");
    //initially the results section was hidden
    $('.results').show();
    //we'll need to hide the form now to display the results
    $('form').hide();
    //once the user has clicked submit also display the button to retake the quiz.
    $(".results").append(`<a class="restart" href="#"><span class="namaste">N'amaste</span> here and take the quiz again!</a>`);
    //reload the webpage
    $(".restart").on('click', function (event) {
        //the location object is related to the current URL
        //reload the current page when the user retakes the quiz.
        location.reload(); 
    });

    


    });
};



$(function(){
    $('a').smoothScroll();

    $('form').hide();
    $('.results').hide();
        $("#start-btn").on("click", function () {
            $('form').show();
            $('.start').hide();
            console.log("hello");
            return false;
        });

    


   

    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();

    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });

    quizApp.init();


});

