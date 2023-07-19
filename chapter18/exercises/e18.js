// Define your Book class here:
class Book {

    constructor(title, author, copyrightDate, isbn, numOfPages, numTimesCheckedOut, disgarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numOfPages = numOfPages;
        this.numTimesCheckedOut = numTimesCheckedOut;
        this.disgarded = disgarded;

        
    }

    disgardBook() {

    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {

    constructor(title, author, copyrightDate, isbn, numOfPages, numTimesCheckedOut, disgarded) {
        super(title, author, copyrightDate, isbn, numOfPages, numTimesCheckedOut, disgarded);
    }

    disgardBook() {

        let currentDate = new Date();
        let currentYear = currentDate.getFullYear(currentDate);
        
        if (this.copyrightDate <= (currentYear - 5)) {

            this.disgarded = "Yes";

        } else {

            this.disgarded = "No";
        }
    }

}

class Novel extends Book {

    constructor(title, author, copyrightDate, isbn, numOfPages, numTimesCheckedOut, disgarded) {
        super(title, author, copyrightDate, isbn, numOfPages, numTimesCheckedOut, disgarded);
    }

    disgardBook() {

        if (this.numTimesCheckedOut > 100) {

            this.disgarded = "Yes";

        } else {

            this.disgarded = "No";
        }
    }

    checkOut(count) {

        this.numTimesCheckedOut += count;
        
    }

}

// Declare the objects for exercises 2 and 3 here:

let newNovel = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");

let newManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");

// Code exercises 4 & 5 here:
console.log(`\nTitle:\n\n${newManual.title}\n\nDisgarded:\n\n${newManual.disgarded}`);
console.log(`\nTitle:\n\n${newManual.title}\n\nCopyright Date:\n\n${newManual.copyrightDate}`);
newManual.disgardBook();
console.log(`\nTitle:\n\n${newManual.title}\n\nDisgarded:\n\n${newManual.disgarded}`);

console.log(`\n\nThe Novel:\n\n${newNovel.title} has been checked out ${newNovel.numTimesCheckedOut} times.`);
newNovel.checkOut(5);
console.log(`\n\nThe Novel:\n\n${newNovel.title} has been checked out 5 more times.`);
console.log(`\n\nThe Novel:\n\n${newNovel.title} has been checked out ${newNovel.numTimesCheckedOut} times.`);

