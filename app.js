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

// Add book button
const addBookBtn = document.getElementById('add-book-btn');

// Test add book button
// addBookBtn.addEventListener('click', () => {console.log('Clicked')});

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

const displayAddBookModal = () => {
    const booksContainer = document.getElementById('book-container');
  
    const dialog = document.createElement('dialog');
    dialog.id = 'addBookDialog';
  
    const form = document.createElement('form');
  
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title: ';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
  
    const authorLabel = document.createElement('label');
    authorLabel.textContent = 'Author: ';
    const authorInput = document.createElement('input');
    authorInput.type = 'text';
    authorInput.name = 'author';

    const pagesLabel = document.createElement('label');
    pagesLabel.textContent = 'Pages: ';
    const pagesInput = document.createElement('input');
    pagesInput.type = 'number';
    pagesInput.name = 'pages';

    const readLabel = document.createElement('label');
    readLabel.textContent = 'Read: ';
    const readInput = document.createElement('input');
    readInput.type = 'checkbox';
  
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.type = 'submit';
  
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      const title = titleInput.value;
      const author = authorInput.value;
      const pages = pagesInput.value;
      const read = readInput.checked;

      const newBook = {
        title: title,
        author: author,
        pages: pages,
        read: read
      };

      myLibrary.push(newBook);

      dialog.close();

      addBooksToDom();
    });
  
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.type = 'button';
    cancelButton.addEventListener('click', () => {
      dialog.close();
    });

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(authorLabel);
    form.appendChild(authorInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(pagesLabel);
    form.appendChild(pagesInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(readLabel);
    form.appendChild(readInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);
    form.appendChild(cancelButton);

    dialog.appendChild(form);

    booksContainer.appendChild(dialog);

    dialog.showModal();
};
  
  

addBookBtn.addEventListener('click', displayAddBookModal);

const addBookToLibrary = () => {
    // This will be called by the book function with the args from Book passed in
    // Following the creation of the obj, then append the data to myLibrary array
}

const addBooksToDom = () => {
    const booksArr = document.getElementById('book-cards');

    booksArr.textContent = '';
    
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
