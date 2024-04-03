

** Book and Movie API **


This is a simple Express.js application that provides an API for retrieving information about books and movies. It allows users to fetch data based on the type (books or movies) and also provides filtering capabilities.

* * Features  **
Retrieves information about books and movies.
Allows filtering by name for both books and movies.
Returns data in JSON format.


Installation
 1. Clone the repository:
git clone https://github.com/ChandraDevs1/SeachingApI.git

 2. Navigate to the project directory:
  cd book-and-movie-api

 3. Install dependencies:
 npm install

 4. Start the server:
 npm start


**    Usage    **
Get all books

GET /books
Get all movies

GET /movies
Filter books by name

GET /books?name=<name>
Replace <name> with the name of the book you want to filter.

Filter movies by name

GET /movies?name=<name>
Replace <name> with the name of the movie you want to filter.

* *   Dependencies    **
Express.js
Node.js

Contributing
Contributions are welcome! Please feel free to submit a pull request.

