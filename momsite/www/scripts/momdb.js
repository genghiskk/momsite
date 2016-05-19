var OpenWeatherAppKey = "6f85f6e0f2cbb8c98e70e042e1bbff33";

function getWeatherWithZipCode() {

    var zipcode = $('#zip-code-input').val();

    var queryString =
        'http://api.openweathermap.org/data/2.5/weather?zip='
        + zipcode + ',us&appid=' + OpenWeatherAppKey + '&units=imperial';
    console.log(queryString);
    $.getJSON(queryString, function (results) {
        console.log("weather object");
        console.log(results.valueOf());
        showWeatherData(results);

    }).fail(function (jqXHR) {
        $('#error-msg').show();
        $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
    });

    return false;
}

function getQuestions() {
    var queryString =
        'http://127.0.0.1:8000/polls/questions/';
    console.log("In getQuestionResults")
    $.getJSON(queryString, function (results) {
        console.log(results.valueOf());
        showQuestionData(results);
    }).fail(function (jqXHR) {
        console.log("Error when doing HTTP Get for vote results")
        console.log("responseJSON:" + jqXHR.responseJSON);
        console.log("responseText:" + jqXHR.responseText);
        console.log("getJSON" + jqXHR.getJSON);
        console.log("status Text: " + jqXHR.statusText);
        console.log(jqXHR.error);
        console.log(jqXHR.getResponseHeader);
        resp = jqXHR.getResponseHeader;
        console.log(resp.toString());
        console.log(jqXHR.statusText);

        $('#error-msg').show();
        $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
    });




    return false;
}
function getAnswerResults(results) {
}
function showQuestionData(results) {
    console.log("In showQuestionData");
    console.log(results.valueOf());
    console.log(results[0].question_text);
    var li = document.createElement("li");
    var br = document.createElement("br");
    var inp = document.createElement("input");
    var node = document.createTextNode("This is new.");
    inp.appendChild(node);

    var element = document.getElementById("Questions");
    element.appendChild(br);

    var Rlen = results.length;
    console.log("Length:" + results.length);
    for (i = 0; i < Rlen; i++) {
        var br = document.createElement("br");
        var p = document.createElement("p");
        inp = document.createElement("input");
        inp.type = "checkbox";
        inp.id = "inp" + i;
        element.appendChild(inp);
        var element1 = document.getElementById("inp"+i);
        element1.insertAdjacentText('afterend', results[i].question_text);
        element.appendChild(br);
        console.log("in question processing loop");
    }
    console.log("After loop");
    var btn = document.createElement("button");
    node = document.createTextNode("Ask Question");
    btn.appendChild(node);
    btn.id = "get-answer-btn";
    element.appendChild(btn);    
}

