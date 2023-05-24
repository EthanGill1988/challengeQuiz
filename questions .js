var quest = [];
    quest[0] = new Question("I am used to store multiple values in a single variable, what am I?", "Directory", "Class", "Module", "Array");
    quest[1] = new Question("I like cold walks on the ice and daylight frog boils")
    quest[1] = new Question("I like cold walks on the ice and daylight frog boils")
    quest[1] = new Question("I like cold walks on the ice and daylight frog boils")
    quest[1] = new Question("I like cold walks on the ice and daylight frog boils")
    quest[1] = new Question("I like cold walks on the ice and daylight frog boils")
    quest[1] = new Question("I like cold walks on the ice and daylight frog boils")

    
    function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3) {
        this.question = question;
        this.rightAnswer = rightAnswer;
        this.wrongAnswer1 = wrongAnswer1;
        this.wrongAnswer2 = wrongAnswer2;
        this.wrongAnswer3 = wrongAnswer3;
    };
