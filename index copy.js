//MODEL
var QUESTIONS = [
    {
        text: '<:48:x<:65:=<:6C:$=$=$$~<:03:+$~<:ffffffffffffffbd:+$<:ffffffffffffffb1:+$<:57:~$~<:18:x+$~<:03:+$~<:06:x-$x<:0e:x-$=x<:43:x-$',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 0
    },
    {
        text: '+0+0+0+0+0+0+0+2)+0+0+9)+7))+3)-0-0-0-0-0-0-0-9)+0+0+0+0+0+0+0+0+7)-8)+3)-6)-8)-7-0-0-0-0-0-0)',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 1
    },
    {
        text: '*6*3p*4*3*2*0p*2*1*0pp>0*1*0p*5*4*0p*5*4*2*1*0p*4*3p*1*0p/+0p+0*6*5*2p+0*5*0p',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 2
    },
    {
        text: ']xhhhhooooooooohhhhhhxooooooooxooooooxjjjxhoooohhhxhohhhhhhhxhhhhjjjhhhxhhhhooooooooohhhhhhxjjjxxjjjjjjjxjhhhhxjhhhhhhhhjjjhh~',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 3
    }
];



var Model = function(){
    this.score = 0;
    this.questionIndex = 1;

};


Model.prototype.questionChecker(choice) = {
    if (question.correct === choice) {
        this.score = score++
    }

    if (questionIndex + 1 < QUESTIONS.length) {
        setQuestion(questionIndex + 1);
    }
    else {
        showResults();
    }
};



//var myModel = new Models0tes0


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



