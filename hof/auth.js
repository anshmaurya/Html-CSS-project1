const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationYear: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publicationYear: 1960,
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      publicationYear: 1997,
    },
  ];
  const filteredBooks = books.filter((books) => books.publicationYear >= 2010);
  const capitalizedBooks = filteredBooks.map((books) => ({
    title: books.title,
    author: books.author.toUpperCase(),
    publicationYear: books.publicationYear,
  }));
  console.log(capitalizedBooks);