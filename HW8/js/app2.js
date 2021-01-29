function book(title,author,readCheck){
    this.title = title;
    this.author = author;
    this.readCheck = readCheck;
    this.readingStatus = function (){
        if(toLowerCase(readCheck)=='y'){
            alert(`you already own ${title}, by the author ${author}`);
        } else {
            alert(`this is new book with the title ${title} by ${author}!`);
        }
    };// if statement 
}

let bookTitle = prompt(`Enter the name of your book you want to read`);
let bookAuthor = prompt(`who is  the author of that book?`);
let checkIfRead = prompt(`have you read it before (Y/N)`);

let newBook = new book(bookTitle,bookAuthor,checkIfRead);
newBook.readingStatus();