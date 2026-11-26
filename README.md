- Uriel Dolgin - Book

- https://ghostflame2153.github.io/cs300-assignment-4-starter/

- How to run the app:the github pages works, otherwise
npm ci (get dependencies), npm run dev (start dev server), and npm test (run tests) exist, although test is nonfunctional.

- The app seeks to allow the user to rate, add and search their books. This is done by adding new books by filling in the corresponding text boxes and clicking add new book. Once the book is added, you can rate it and see the more info that you might have added, or even delete it. You can also search by Title, Genre, rating, or author. 

Self reminder - Add Component for NoBooks (A component that only is visible when search is not presenting any books)

Component #5 would be: BookFocus- which lets you focus a specific book 
Or BookData- this is probably what I will go for, as if you search scifi you will not see sci-fi. So something like bookdata will be useful not only 
on an individual basis of seeing how many scifi books you got, but also to make sure you dont have any stragglers due to incorrect formatting.