var convertType = "miles";
var heading = document.querySelector('h1');
var intro = document.querySelector('p');
var answerDiv = document.getElementById('answer');
var form = document.getElementById('convert');


document.addEventListener('keydown', function (event) {
    var key = event.key;

    if (key === 'k') {
        convertType = 'kilometer';
        heading.innerHTML = 'kilometers to miles convertor';
        intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.'


    }
    else if (key === 'm') {
        convertType = 'miles';
        heading.innerHTML = 'Miles to Kilometers convertor';
        intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.'

    }

});


form.addEventListener('submit', function (event) {

    event.preventDefault();

    var distance = parseFloat(document.getElementById('distance').value);

    if (distance) {
        //convert
        if (convertType === 'miles') {
            const conversion = distance * 1.609344;
            const convert = conversion.toFixed(3);                      //Math.round(conversion * 1000) / 1000;

            //display
            answerDiv.innerHTML = `<h2>${distance} miles convert to ${convert} kilometers. </h2>`;
        }
        else {
            const conversion = distance * 0.621371192;
            const convert = conversion.toFixed(3);
            answerDiv.innerHTML = `<h2>${distance} kilometers convert to ${convert} miles. </h2>`;
        }

    }
    else {

        answerDiv.innerHTML = '<h2>Please provide a number.</h2>';

    }



});