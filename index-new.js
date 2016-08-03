//MODEL
var questionArray = [
    {
        text: 'First question!!',
        choices: [
            'Option one',
            'Option two',
            'Option three',
            'Option four'
        ],
        correct: 0
    },
    {
        text: 'Second question!!',
        choices: [
            'Option one',
            'Option two',
            'Option three',
            'Option four'
        ],
        correct: 1
    },
    {
        text: 'Third question!!',
        choices: [
            'Option one',
            'Option two',
            'Option three',
            'Option four'
        ],
        correct: 2
    },
    {
        text: 'Fourth question!!',
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

var myModel = new Model();

myModel.showQuestion();


//VIEW
var View = function(questionTextSelector, choicesTextSelector, qTotalSelector, qCurrentSelector, scoreSelector, restartButtonSelector){
    this.questionTextField = $(questionTextSelector);
    this.choicesTextField = $(choicesTextSelector);
    this.qTotalField = $(qTotalSelector);
    this.qCurrentField = $(qCurrentSelector);
    this.scoreField = $(scoreSelector);
    this.restartButtonName = $(restartButtonSelector);
};

View.prototype.updateFieldView = function() {
    this.questionTextField.text(/*?currentQuestion.text*/);
    //Link to choiceReturner??
    this.qCurrentField.text(/*questionIndex*/);
    this.scoreField.text(/*score*/);
};

View.prototype.showResults = function() {
//Display results-page div
//Send score total
};

View.prototype.newGame = function(){
//Reset question index, reset score
//Send text and choices of index[0] (first question)
};

var myView = new Model ('.question-text','.question-choices')



//1. Establish what we have on the DOM
//2. Sending the question text and the choices text AND show current question number
//3. Grabbing the choice that was clicked on
//4. When there are no more questions, show results (score) and restart button
//5. Restart button will go back to starting state (score, question index number)

/* //CONTROLLER

var Controller = function(){

};



FINAL IMPLEMENTATION/CONNECTION
GET INPUT FROM VIEW (user chooses question response) SO MODEL CAN PROCESS IT
MODEL SENDS THE PROCESSED OUTPUT (show next question / show score / show final results) TO VIEW


*/



