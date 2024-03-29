const myLibrary = [];

const addBookBtn = document.getElementById('add-book-btn');

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};

const createAddBookDialog = () => {
    const dialog = document.createElement('dialog');
    dialog.id = 'addBookDialog';

    const form = document.createElement('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const title = event.target.title.value;
      const author = event.target.author.value;
      const pages = event.target.pages.value;
      const read = event.target.read.checked;

      const newBook = new Book(title,author,pages,read);

      addBookToLibrary(newBook);

      dialog.close();

      event.target.reset();

      addBooksToDom();
    });
  
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title: ';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleInput.required = true;
  
    const authorLabel = document.createElement('label');
    authorLabel.textContent = 'Author: ';
    const authorInput = document.createElement('input');
    authorInput.type = 'text';
    authorInput.name = 'author';
    authorInput.required = true;

    const pagesLabel = document.createElement('label');
    pagesLabel.textContent = 'Pages: ';
    const pagesInput = document.createElement('input');
    pagesInput.type = 'number';
    pagesInput.name = 'pages';
    pagesInput.required = true;

    const readLabel = document.createElement('label');
    readLabel.textContent = 'Read: ';
    const readInput = document.createElement('input');
    readInput.type = 'checkbox';
    readInput.name = 'read';
  
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Add book';
    submitButton.type = 'submit';

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
  
    return dialog;
  };

const displayAddBookModal = () => {
    const booksContainer = document.getElementById('book-container');
    const dialog = createAddBookDialog();

    booksContainer.appendChild(dialog);
    dialog.showModal();
};

const addBookToLibrary = (book) => {
    myLibrary.push(book);
}

const addBooksToDom = () => {
    const booksArr = document.getElementById('book-cards');
    booksArr.textContent = '';
    
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const titleElement = document.createElement('p');
        const authorElement = document.createElement('p');
        const pagesElement = document.createElement('p');
        const readButton = document.createElement('button');

        titleElement.textContent = `Title: ${book.title}`;
        authorElement.textContent = `Author: ${book.author}`;
        pagesElement.textContent = `Pages: ${book.pages}`;
        readButton.textContent = book.read ? 'Read' : 'Not Read';
        readButton.classList.add(book.read ? 'read-button' : 'not-read-button');

        readButton.addEventListener('click', () => {
        book.read = !book.read;

        readButton.textContent = book.read ? 'Read' : 'Not Read';
        readButton.classList.toggle('read-button');
        readButton.classList.toggle('not-read-button');
        });

        const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                removeBook(index);
            });

        bookCard.appendChild(titleElement);
        bookCard.appendChild(authorElement);
        bookCard.appendChild(pagesElement);
        bookCard.appendChild(readButton);
        bookCard.appendChild(removeButton);
        
        booksArr.appendChild(bookCard);
    });
};

const removeBook = (index) => {
    myLibrary.splice(index, 1);
    addBooksToDom();
}

addBookBtn.addEventListener('click', displayAddBookModal);
