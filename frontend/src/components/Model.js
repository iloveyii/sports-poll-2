
class Model {
    constructor(mcq) {
        this.id = mcq.id;
        this.description = mcq.description;
        this.choices = mcq.choices;
        this.correct = mcq.correct;
        this.answer = null;
        this.setAnswer = this.setAnswer.bind(this);
    }

    setAnswer(questionId) {
        this.answer = questionId;
    }
}

export default Model;
