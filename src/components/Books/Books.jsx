import { useEffect, useState } from "react";
import Book from "../Book/Book";
export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <>
      <h1 className="text-3xl text-gray-300 font-bold my-5 text-center">
        All Books : {books.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-16">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </>
  );
}
