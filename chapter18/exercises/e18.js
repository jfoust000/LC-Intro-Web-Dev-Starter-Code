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

            this.disgarded = true;

        } else {

            this.disgarded = false;
        }
    }

}

class Novel extends Book {

    constructor(title, author, copyrightDate, isbn, numOfPages, numTimesCheckedOut, disgarded) {
        super(title, author, copyrightDate, isbn, numOfPages, numTimesCheckedOut, disgarded);
    }

    disgardBook() {

        if (this.numTimesCheckedOut > 100) {

            this.disgarded = true;

        } else {

            this.disgarded = false;
        }
    }

}

// Declare the objects for exercises 2 and 3 here:

let newNovel = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, false);

let newManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, false);

// Code exercises 4 & 5 here:
console.log(newManual.disgarded);
console.log(newManual.copyrightDate);
newManual.disgardBook();
console.log(newManual.disgarded);

