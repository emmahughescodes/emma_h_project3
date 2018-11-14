// answer key
const poses = {
    a: [{name: 'downward dog', desc: 'whatever' }, {name: 'upward dog', desc: 'upwhatever'}],
    b: [{name: 'eagle', desc: 'bird'}, {name: 'pigeon', desc: 'fat bird'}],
    c: [{name: 'cow', desc: 'moo'}, {name: 'cat', desc: 'meow'}],
}


$(function(){


    $('form').on('submit', function (event) {
        //this is code only to be run when the form is submitted 
        event.preventDefault();
        //print this out to check what the event is
        console.log(event, "ellomate");

        // Capture the values of the radio buttons
        const sleepHours = $('input[name=sleep]:checked').val();
        const favDrink = $('input[name=drink]:checked').val();
        const favFruit = $('input[name=fruit]:checked').val();
        const cryLevel = $('input[name=cry]:checked').val();
        const socialTime = $('input[name=social]:checked').val();

        console.log(sleepHours, favDrink, favFruit, cryLevel, socialTime);

    });
    
});