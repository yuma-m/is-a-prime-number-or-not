class Prime {
    constructor() {
        const initialNumbers = [3, 5, 7, 11];
        this.number = initialNumbers[Math.floor(Math.random() * initialNumbers.length)];
        this.isPrime = true;

        this.questionSpan = document.getElementById("question_number");

        this.questionSpan.textContent = this.number;
    }

    start() {
        let cls = this;
        let result = document.getElementById("result");
        let answerO = document.getElementById("answer_o");
        answerO.addEventListener("click", function () {
            if (cls.isPrime) {
                result.textContent = `Correct! ${cls.number} is a prime number.`;
                result.className = "correct";
            } else {
                result.textContent = `Wrong! ${cls.number} is not a prime number.`;
                result.className = "wrong";
            }
            cls.nextQuestion();
        });
        let answerX = document.getElementById("answer_x");
        answerX.addEventListener("click", function () {
            if (!cls.isPrime) {
                result.textContent = `Correct! ${cls.number} is not a prime number.`;
                result.className = "correct";
            } else {
                result.textContent = `Wrong! ${cls.number} is a prime number.`;
                result.className = "wrong";
            }
            cls.nextQuestion();
        });
    };

    nextQuestion() {
        this.number = this.findNext(this.number);
        this.isPrime = this.isPrimeNumber(this.number);
        this.questionSpan.textContent = this.number;
    };

    findNext(num) {
        const rands = [-3, -1, 1, 3, 5, 7, 9];
        return num * 2 + rands[Math.floor(Math.random() * rands.length)]
    };

    isPrimeNumber(num) {
        if (num < 2) return false;
        else if (num === 2) return true;
        else if (num % 2 === 0) return false;

        let sqrtNum = Math.sqrt(num);
        for (let i = 3; i <= sqrtNum; i += 2) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
}

let prime = new Prime();
prime.start();
