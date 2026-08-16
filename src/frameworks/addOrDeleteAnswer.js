class addOrDeleteAnswer {
    constructor(changeAnswers, dontChangeAnswers, setChangeAnswers, setDontChangeAnswers) {
        this.changeAnswers = changeAnswers;
        this.setChangeAnswers = setChangeAnswers;
        this.dontChangeAnswers = dontChangeAnswers;
        this.setDontChangeAnswers = setDontChangeAnswers;
    }

    addToBank(clickedZoneIndex) {
        this.setDontChangeAnswers([this.changeAnswers[clickedZoneIndex], ...this.dontChangeAnswers]);
        this.changeAnswers.splice(clickedZoneIndex, 1);
    }

    addToAnswers(clickedZoneIndex) {
        this.setChangeAnswers([...this.changeAnswers, this.dontChangeAnswers[clickedZoneIndex]]);
        this.dontChangeAnswers.splice(clickedZoneIndex, 1);
    }
}

export default addOrDeleteAnswer;