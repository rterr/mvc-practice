//MODEL
var questionArray = [
    {
        text: 'First question!!',
        answers: [
            'Option one',
            'Option two',
            'Option three',
            'Option four'
        ],
        correct: 0
    },
    {
        text: 'Second question!!',
        answers: [
            'Option one',
            'Option two',
            'Option three',
            'Option four'
        ],
        correct: 1
    },
    {
        text: 'Third question!!',
        answers: [
            'Option one',
            'Option two',
            'Option three',
            'Option four'
        ],
        correct: 2
    },
    {
        text: 'Fourth question!!',
        answers: [
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

var myModel = new Model();

myModel.showQuestion();

//VIEW 







/* //VIEW
var View = function(){

};

View.prototype.choiceGrabber() = {

}


//CONTROLLER

var Controller = function(){

};



FINAL IMPLEMENTATION/CONNECTION
GET INPUT FROM VIEW (user chooses question response) SO MODEL CAN PROCESS IT
MODEL SENDS THE PROCESSED OUTPUT (show next question / show score / show final results) TO VIEW


*/



