//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {

    constructor(name, mass, scores) {

        this.name = name;
        this.mass = mass;
        this.scores = scores;

    }

    addScore(score) {

        this.scores.push(score);

    }

    average() {

        let averageScore = 0;
        let total = 0;

        for (let i = 0; i < this.scores.length; i++) {
            
            total += this.scores[i];

        }
        
        averageScore = Math.round((total / this.scores.length) * 10) / 10;

        return averageScore;

    }

    status() {

        let newAverage = this.average();

        if (newAverage < 70) {

            return "Rejected";

        } else if (newAverage >= 70 && newAverage <= 79) {

            return "Probationary";

        } else if (newAverage >= 80 && newAverage <= 89) {

            return "Reserve";

        } else {

            return "Accepted";

        }

    }

}

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

bubbaBear.addScore(83);
console.log(bubbaBear);

console.log(merryMaltese.average());

console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}`);

console.log(gladGator.average());
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}`);

console.log(bubbaBear.average());
console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let previousAverage = gladGator.average();
let counter = 0;



while (gladGator.average() < 80) {

    gladGator.addScore(100);
    counter++;
}
console.log(`\n\n${gladGator.name} took ${counter} more tests, and now has an average score of: `);
console.log(`${gladGator.average()} (up from ${previousAverage})`);
console.log(`And a status of ${gladGator.status()}`);
counter = 0;
previousAverage = gladGator.average();
while (gladGator.average() < 90) {

    gladGator.addScore(100);
    counter++;
}
console.log(`\n\n${gladGator.name} took ${counter} more tests, and now has an average score of: `);
console.log(`${gladGator.average()} (up from ${previousAverage})`);
console.log(`And a status of ${gladGator.status()}`);