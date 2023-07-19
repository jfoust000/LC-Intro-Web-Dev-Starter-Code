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
            
            this.disgarded = "Yes"; 
        
        }

}

// Define your Manual and Novel classes here:
class Manual extends Book {

    constructor(title, author, copyrightDate, isbn, numOfPages, numTimesCheckedOut, disgarded) 
    {

        super(title, author, copyrightDate, isbn, numOfPages, numTimesCheckedOut, disgarded);

    }

    disgardBook() {

        let currentDate = new Date();
        let currentYear = currentDate.getFullYear(currentDate);
        
        if (this.copyrightDate <= (currentYear - 5)) {

            super.disgardBook();

        } else {

            this.disgarded = "No";
        }
    }

}

class Novel extends Book {

    constructor(title, author, copyrightDate, isbn, numOfPages, numTimesCheckedOut, disgarded) 
    {

        super(title, author, copyrightDate, isbn, numOfPages, numTimesCheckedOut, disgarded);

    }

    disgardBook() {

        if (this.numTimesCheckedOut > 100) {

            super.disgardBook();

        } else {

            this.disgarded = "No";
        }
    }

    checkOut() {

        this.numTimesCheckedOut += 1;
        
    }

}

// Declare the objects for exercises 2 and 3 here:

let newNovel = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");

let newManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");

// Code exercises 4 & 5 here:
newManual.disgardBook();
console.log(`\nTitle: ${newManual.title}\n\nCopyright Date: ${newManual.copyrightDate}\n\nDisgarded: ${newManual.disgarded}`);



console.log(`\n\nThe Novel:\n\n${newNovel.title} was checked out ${newNovel.numTimesCheckedOut} times.`);

let checkoutCounter = 5;

for (let i = 0; i < checkoutCounter; i++) {

    newNovel.checkOut();

}

console.log(`\n\nThe Novel:\n\n${newNovel.title} has been checked out ${checkoutCounter} additonal times.`);
console.log(`\n\nNow, ${newNovel.title} has been checked out ${newNovel.numTimesCheckedOut} times.\n\n`);

