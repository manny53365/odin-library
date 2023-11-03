// defining a place to store all of my books

const myLibrary = [
    {
        title: "Test Book",
        author: "fwEFHTG",
        pages: 3,
        read: true
    },
    {
        title: "Test Book 2",
        author: "fwEFHTG",
        pages: 3,
        read: false
    },
    {
        title: "Test Book 3",
        author: "fwEFHTG",
        pages: 3,
        read: false
    },
    {
        title: "Test Book 4",
        author: "fwEFHTG",
        pages: 3,
        read: false
    },
    {
        title: "Test Book 5",
        author: "fwEFHTG",
        pages: 3,
        read: false
    }
];

// Sample constructor function

// function Book(title, author, pages, read){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// };

// console.log(typeof(Book));

function Book(title,pages,author,read){
    // Add event input from the DOM
}

const addBookToLibrary = () => {
    // This will be called by the book function with the args from Book passed in
    // Following the creation of the obj, then append the data to myLibrary array
}

const addBooksToDom = () => {
    const booksArr = document.getElementById('book-cards');
    
    myLibrary.forEach((book) => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');

      const titleElement = document.createElement('p');
      const authorElement = document.createElement('p');
      const pagesElement = document.createElement('p');
      const readElement = document.createElement('p');

      titleElement.textContent = `Title: ${book.title}`;
      authorElement.textContent = `Author: ${book.author}`;
      pagesElement.textContent = `Pages: ${book.pages}`;
      readElement.textContent = `Read: ${book.read}`;

      bookCard.appendChild(titleElement);
      bookCard.appendChild(authorElement);
      bookCard.appendChild(pagesElement);
      bookCard.appendChild(readElement);
      
      booksArr.appendChild(bookCard);
    });
};

addBooksToDom();