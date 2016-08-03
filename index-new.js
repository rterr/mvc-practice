//MODEL
var questionArray = [
    {
        qText: 'First question!!',
        choices: [
            'Option one',
            'Option two',
            'Option three',
            'Option four'
        ],
        correct: 0
    },
    {
        qText: 'Second question!!',
        choices: [
            'Option one',
            'Option two',
            'Option three',
            'Option four'
        ],
        correct: 1
    },
    {
        qText: 'Third question!!',
        choices: [
            'Option one',
            'Option two',
            'Option three',
            'Option four'
        ],
        correct: 2
    },
    {
        qText: 'Fourth question!!',
        choices: [
            'Option one',
            'Option two',
            'Option three',
            'Option four'
        ],
        correct: 3
    }
];

var Model = function(){
    this.score = 0;
    this.questionIndex = 0;
    // this.onChange = null;
    this.currentQuestion = questionArray[this.questionIndex];
};

// Model.prototype.showQuestion =  function() {
//     console.log(this.currentQuestion.text)
// }

Model.prototype.questionChecker = function(choice) {
    if (this.currentQuestion.correct === choice) {
        this.increaseScore();
        console.log(this.score);
    };
}

Model.prototype.increaseScore = function(scoreValue) {
    this.score = value + scoreValue;}

Model.prototype.nextQuestion = function() {
    if (this.questionIndex + 1 < questionArray.length) {
        //if questionIndex + 1 = within the length of the array then increment.
        questionIndex++;
        // showQuestion();
    }
    else {
        showResults();
    }
};

Model.prototype.choiceReturner = function() {
    for (var i = 0; i < this.currentQuestion.choices.length; i++){
        return this.currentQuestion.choices[i];
    }
    //Link to updateFieldView??
}


//VIEW
var View = function(questionTextSelector, choicesTextSelector, qTotalSelector, qCurrentSelector, scoreSelector, resultsPage, restartButtonSelector){
    this.questionTextField = $(questionTextSelector);
    this.choicesTextField = $(choicesTextSelector);
    this.qTotalField = $(qTotalSelector);
    this.qCurrentField = $(qCurrentSelector);
    this.scoreField = $(scoreSelector);
    this.resultsPage = $(resultsPage);
    this.restartButtonName = $(restartButtonSelector);
};

View.prototype.updateFieldView = function() {
    this.questionTextField.text(currentQuestion.qText);
    console.log('I\'m updateFieldView!');
    console.log(this.questionTextField);
    //Link to choiceReturner??
    this.qCurrentField.text(/*questionIndex*/);
    this.scoreField.text(/*score*/);
};

View.prototype.showResults = function() {
    this.resultsPage.toggle(true);
//Need to link this to .nextQuestion
//Display results-page div
//Send score total
};

View.prototype.getAnswer = function() {
    this.choicesTextField.on('click','button', function(){
        this.choice = event.target.button
    })
}

View.prototype.newGame = function(){
    this.score = 0;
    this.questionIndex = 0;
    this.resultsPage.toggle(false);
//Reset question index, reset score
//Send text and choices of index[0] (first question)
};



//CONTROLLER 
var Controller = function(){
    
}

///

$(document).ready(function() {

var myModel = new Model();
var myView = new View ('.question-text','.question-choices','.questions-total',".question-current","score",".results-page",".restart-button")
var myController = new Controller();

});
//1. Establish what we have on the DOM [DONE]
//2. Sending the question text and the choices text AND show current question number [DONE]
//3. Grabbing the choice that was clicked on
//4. When there are no more questions, show results (score) and restart button [DONE]
//5. Restart button will go back to starting state (score, question index number)

/* //CONTROLLER

var Controller = function(){

};



FINAL IMPLEMENTATION/CONNECTION
GET INPUT FROM VIEW (user chooses question response) SO MODEL CAN PROCESS IT
MODEL SENDS THE PROCESSED OUTPUT (show next question / show score / show final results) TO VIEW


*/



