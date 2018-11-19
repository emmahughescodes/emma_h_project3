// answer key

const poses = {
    A: [{ name: 'Tadasana / Mountain Pose', desc: 'Standing poses help you remain rooted in your beliefs and stand proudly', img: 'assets/mountain-pose.png', text: "Yogi standing"}, { name: 'Virabhadrasana I / Warrior 1', desc: 'Standing poses help you remain rooted in your beliefs and stand proudly', img: 'assets/warrior-1.png', text: "Yogi standing in a lunge with both arms above head" }],

    B: [{ name: 'Ardha Matsyendrasana / Seated Spinal Twist', desc: 'Poses that require twisting help with supporting your back and cleansing your body', img: 'assets/seated-spinal-twist.png', text: "Yogi seated with one leg extended and the other crossed over and opposite elbow crosses knee"}, { name: 'Trikonasana / Triangle Pose', desc: 'Poses that require twisting help with supporting your back and detoxifying your body', img: 'assets/trikonasana.png', text: "Yogi in a wide legged stance bending over resting one hand on the shin of the front leg"}],

    C: [{ name: 'Parsva Bhuja Dandasana / Dragon Fly Pose', desc: 'Arm balances require your strength and humility to take risks!', img: 'assets/dragonfly-pose.png', text: "Yogi balancing on two hands with one leg kicked out to the side and the other leg bent resting a top the other leg"}, { name: 'Eka Pada Galavasana / Flying Crow Pose', desc: 'Arm balances require the strength and humility you have to take risks!', img: 'assets/flying-crow-pose.png', text: "Yogi balancing on two hands with one leg bent resting on the respective arm and the other leg extended straight up and back"}],

    D: [{ name: 'Ardha Chandrasana / Half Moon Pose', desc: 'Balance poses give you a theatrical sense of play and a feeling of accomplishment', img: 'assets/halfmoon-pose.png', text: "Yogi standing on one leg with the respective arm pointing down and the other leg parallel to the ground and the other arm extends straight up to the sky"}, { name: 'Utthita Hasta Padangustasana / Extended Hand to Big Toe Pose', desc: 'Balance poses give you a theatrical sense of play and a feeling of accomplishment', img: 'assets/Extended-hand-to-big-toe.png', text: "Yogi standing on one leg with the other leg extended to the side which the same side hand is grabbing the big toe and the other arm extends to the other side"}],

    E: [{ name: 'Shavasana / Corpse Pose', desc: 'Restorative poses are made for you! Take on new poses when you are feeling ready but for now concentrate on feeling rested', img: 'assets/savasana.png', text: "Yogi lying on the ground facing upwards with legs and arms extended"}, { name: "Balasana / Child's Pose", desc: 'Restorative poses are made for you! Take on new poses when you are feeling ready but for now concentrate on feeling rested', img: 'assets / child-pose.png', text: "Yogi facing down sitting on their feet, knees apart, with arms extended in front of them"}],
    
    U: [{ name: 'Camatkarasana / Wild Thing Pose', desc: 'You are a range of personality traits and poses! Try out backbends to explore how you are feeling today!', img: "assets/wild-thing-pose.png", text: "Yogi doing a backbend with three limbs"}]
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
    $('.results').append(`<h3 class="pose-name">${poseAnswer.name}</h3>`)
    $('.results').append(`<img src=${poseAnswer.img} alt=${poseAnswer.text}>`)
    $('.results').append(`<h3 class="pose-desc">${poseAnswer.desc}</h3>`)
};

    quizApp.poseCalculator = function (letterInput) {
        const poseArray = poses[letterInput];
        const randPose = quizApp.randomizeAns(poseArray);
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

