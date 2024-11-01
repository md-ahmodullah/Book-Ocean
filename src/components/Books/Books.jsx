import { useEffect, useState } from "react";
import Book from "../Book/Book";
import SortBy from "../SortBy/SortBy";
export default function Books() {
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleSort = (type) => {
    if (type === "Rating") {
      setSort(type);
      setBooks(books.sort((a, b) => b.rating - a.rating));
    }
    if (type === "Pages") {
      setSort(type);
      setBooks(books.sort((a, b) => b.totalPages - a.totalPages));
    }
  };

  return (
    <>
      <h1 className="text-3xl text-gray-300 font-bold my-5 text-center">
        All Books : {books.length}
      </h1>
      <SortBy sort={sort} onSort={handleSort} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </>
  );
}
