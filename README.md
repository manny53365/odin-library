# odin-library
This is a library for the odin project

## Technologies
- JavaScript
- CSS
- HTML

### Overview
This a library app for the odin project, I used JS to create the needed DOM elements based on how many objects (books) are in the `myLibrary` array. Books can be added with the + add book button, this will trigger the modal and update the array in the background followed by triggering the `addBooksToDom()` function to rerender the elements on the page. There is also a step in this function to ensure that the array entries aren't duplicated.

[Link to live site](https://manny53365.github.io/odin-library/)
