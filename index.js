const express = require('express');
const app = express();
const router =  express.Router();

app.use(express.json());

const books = [
    {
      "name": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "description": "A novel depicting the extravagant lifestyle and moral decay of the Jazz Age in America.",
      "category": "Fiction"
    },
    {
      "name": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "description": "A story that explores themes of racial injustice and moral growth in the American South.",
      "category": "Fiction"
    },
    {
      "name": "1984",
      "author": "George Orwell",
      "description": "A dystopian novel set in a totalitarian society, exploring themes of surveillance, propaganda, and resistance.",
      "category": "Science Fiction"
    },
    {
      "name": "Pride and Prejudice",
      "author": "Jane Austen",
      "description": "A classic romance novel set in early 19th-century England, focusing on themes of love, marriage, and social status.",
      "category": "Romance"
    },
    {
      "name": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "description": "A coming-of-age novel narrated by a teenager, Holden Caulfield, as he navigates through adolescence in New York City.",
      "category": "Fiction"
    },
    {
      "name": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "description": "A fantasy adventure novel that follows the journey of Bilbo Baggins as he embarks on a quest to reclaim the Lonely Mountain from the dragon Smaug.",
      "category": "Fantasy"
    },
    {
      "name": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "description": "An epic high-fantasy trilogy that follows the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
      "category": "Fantasy"
    },
    {
      "name": "Harry Potter and the Philosopher's Stone",
      "author": "J.K. Rowling",
      "description": "The first book in the Harry Potter series, which follows the adventures of a young wizard, Harry Potter, as he attends Hogwarts School of Witchcraft and Wizardry.",
      "category": "Fantasy"
    },
    {
      "name": "The Da Vinci Code",
      "author": "Dan Brown",
      "description": "A mystery thriller novel that follows symbologist Robert Langdon as he investigates a murder in the Louvre Museum and uncovers a conspiracy.",
      "category": "Thriller"
    },
    {
      "name": "The Hunger Games",
      "author": "Suzanne Collins",
      "description": "A dystopian novel set in a post-apocalyptic world, where teenagers are forced to participate in a televised fight to the death known as the Hunger Games.",
      "category": "Science Fiction"
    },
    {
      "name": "The Alchemist",
      "author": "Paulo Coelho",
      "description": "A philosophical novel that follows the journey of a young Andalusian shepherd named Santiago as he travels in search of a hidden treasure.",
      "category": "Philosophical Fiction"
    },
    {
      "name": "The Fault in Our Stars",
      "author": "John Green",
      "description": "A contemporary romance novel that tells the story of two teenagers, Hazel Grace Lancaster and Augustus Waters, who fall in love while dealing with cancer.",
      "category": "Romance"
    },
    {
      "name": "Brave New World",
      "author": "Aldous Huxley",
      "description": "A dystopian novel set in a futuristic society, where citizens are engineered and conditioned for social stability and conformity.",
      "category": "Science Fiction"
    },
    {
      "name": "Gone with the Wind",
      "author": "Margaret Mitchell",
      "description": "A historical romance novel set against the backdrop of the American Civil War and Reconstruction era, focusing on the life of Scarlett O'Hara.",
      "category": "Historical Fiction"
    },
    {
      "name": "The Girl with the Dragon Tattoo",
      "author": "Stieg Larsson",
      "description": "A psychological thriller novel that follows journalist Mikael Blomkvist and hacker Lisbeth Salander as they investigate a decades-old disappearance.",
      "category": "Thriller"
    },
    {
      "name": "The Road",
      "author": "Cormac McCarthy",
      "description": "A post-apocalyptic novel that follows a father and his young son as they journey across a desolate landscape in search of safety and hope.",
      "category": "Post-Apocalyptic"
    },
    {
      "name": "Moby-Dick",
      "author": "Herman Melville",
      "description": "A novel that tells the story of the obsessed captain Ahab and his relentless pursuit of the great white whale, Moby Dick.",
      "category": "Adventure"
    },
    {
      "name": "Crime and Punishment",
      "author": "Fyodor Dostoevsky",
      "description": "A psychological novel that explores themes of morality, guilt, and redemption through the story of a young student named Raskolnikov who commits a murder.",
      "category": "Philosophical Fiction"
    },
    {
      "name": "The Picture of Dorian Gray",
      "author": "Oscar Wilde",
      "description": "A philosophical novel that follows the life of Dorian Gray, a young man who sells his soul in exchange for eternal youth and beauty.",
      "category": "Philosophical Fiction"
    },
    {
      "name": "The Count of Monte Cristo",
      "author": "Alexandre Dumas",
      "description": "An adventure novel that follows the journey of Edmond Dantès, a young sailor who is falsely accused of treason and seeks revenge against those who betrayed him.",
      "category": "Adventure"
    }
  ]

  const movies = [
    {
    name: "Inception",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    description: "A mind-bending thriller about a thief who enters the dreams of others to steal their secrets."
  },
  {
    name: "The Shawshank Redemption",
    director: "Frank Darabont",
    genre: "Drama",
    description: "A powerful tale of hope and redemption, following the lives of two imprisoned men."
  },
  {
    name: "The Godfather",
    director: "Francis Ford Coppola",
    genre: "Crime",
    description: "A mafia epic chronicling the Corleone family's rise to power and the patriarch's struggle to maintain control."
  },
  {
    name: "Pulp Fiction",
    director: "Quentin Tarantino",
    genre: "Crime",
    description: "A nonlinear narrative that weaves together the intersecting lives of various criminals in Los Angeles."
  },
  {
    name: "The Dark Knight",
    director: "Christopher Nolan",
    genre: "Action",
    description: "A gritty superhero film that pits Batman against the Joker in a battle for Gotham's soul."
  },
  {
    name: "Forrest Gump",
    director: "Robert Zemeckis",
    genre: "Drama",
    description: "The life story of a slow-witted but kind-hearted man who unwittingly becomes part of major historical events."
  },
  {
    name: "Fight Club",
    director: "David Fincher",
    genre: "Drama",
    description: "A psychological thriller about an insomniac office worker who forms an underground fight club as a form of therapy."
  },
  {
    name: "The Matrix",
    director: "The Wachowskis",
    genre: "Science Fiction",
    description: "A groundbreaking sci-fi film that explores the nature of reality and freedom from oppression."
  },
  {
    name: "Goodfellas",
    director: "Martin Scorsese",
    genre: "Crime",
    description: "A biographical crime film following the rise and fall of a mobster in the New York City mafia."
  },
  {
    name: "Schindler's List",
    director: "Steven Spielberg",
    genre: "Historical Drama",
    description: "A poignant true story of a German businessman who saves the lives of over a thousand Polish-Jewish refugees during the Holocaust."
  },
  {
    name: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    genre: "Fantasy",
    description: "The epic conclusion to the Lord of the Rings trilogy, as Frodo and Sam continue their quest to destroy the One Ring."
  },
  {
    name: "The Silence of the Lambs",
    director: "Jonathan Demme",
    genre: "Thriller",
    description: "A chilling psychological thriller about an FBI trainee who seeks the help of a brilliant but insane cannibalistic serial killer to catch another serial killer."
  },
  {
    name: "Star Wars: Episode V - The Empire Strikes Back",
    director: "Irvin Kershner",
    genre: "Science Fiction",
    description: "The dark middle chapter of the original Star Wars trilogy, as the Rebel Alliance faces off against the evil Galactic Empire."
  },
  {
    name: "The Green Mile",
    director: "Frank Darabont",
    genre: "Drama",
    description: "A supernatural drama set on death row, where a gentle giant possesses miraculous healing powers."
  },
  {
    name: "Inglourious Basterds",
    director: "Quentin Tarantino",
    genre: "War",
    description: "A revisionist World War II film that follows a group of Jewish-American soldiers on a mission to assassinate Nazi leaders."
  },
  {
    name: "The Departed",
    director: "Martin Scorsese",
    genre: "Crime",
    description: "A gripping crime thriller about an undercover cop and a mole in the Boston police force, each working for opposing sides of the law."
  },
  {
    name: "The Prestige",
    director: "Christopher Nolan",
    genre: "Thriller",
    description: "A dark and mysterious tale of rivalry between two magicians in Victorian-era London."
  },
  {
    name: "Gladiator",
    director: "Ridley Scott",
    genre: "Historical Drama",
    description: "An epic historical drama set in ancient Rome, following a betrayed general who rises as a gladiator to seek vengeance against the corrupt emperor."
  },
  {
    name: "Saving Private Ryan",
    director: "Steven Spielberg",
    genre: "War",
    description: "A realistic portrayal of the D-Day invasion during World War II, as a group of soldiers embark on a dangerous mission to rescue a paratrooper behind enemy lines."
  },
  {
    name: "The Dark Knight Rises",
    director: "Christopher Nolan",
    genre: "Action",
    description: "The final installment of Christopher Nolan's Batman trilogy, as Batman faces off against the formidable villain Bane."
  },
  {
    name: "The Lion King",
    director: "Roger Allers, Rob Minkoff",
    genre: "Animation",
    description: "A beloved animated musical that follows the journey of a young lion prince as he learns the true meaning of responsibility and bravery."
  }
];
 
router.get("/:type", function (req, res) {
  const type = req.params.type;
  if (type == "books") {
      const bookName = req.query;
      if (bookName == null) {
          return res.send({Status: "OK", Books: books});
      } else {
          const filtered = books.filter((book) =>
              book.name.toLowerCase().includes(bookName.toLowerCase())
          );
          return res.send({Status: "OK", Results: filtered});
      }
  } else if (type == "movies") {
      const movieName = req.query.; 
      if (movieName == null) {
          return res.send({Status: "OK", Movies: movies});
      } else {
          const filteredMov = movies.filter((movie) =>
              movie.name.toLowerCase().includes(movieName.toLowerCase())
          );
          return res.send({Status: "OK", Results: filteredMov});
      }
  }
});



app.use('/', router);

app.listen(8000, () => console.log('Listening on port ' + 8000));