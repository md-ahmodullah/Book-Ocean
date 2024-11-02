import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from "../Book/Book.jsx";
import SortBy from "../SortBy/SortBy.jsx";
import { getStoredWishList } from "../Utility/addTDbWishlist.js";
import { getStoredList } from "../Utility/addToDb.js";
export default function ListedBooks() {
  const [readBooks, setReadBooks] = useState([]);
  const [wishBooks, setwishBooks] = useState([]);
  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();
  useEffect(() => {
    const storedReadList = getStoredList();
    const storedReadListInt = storedReadList.map((num) => Number(num));

    const storedWishlist = getStoredWishList();
    const storedWishlistInt = storedWishlist.map((num) => Number(num));

    const readList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadBooks(readList);

    const wishlist = allBooks.filter((book) =>
      storedWishlistInt.includes(book.bookId)
    );
    setwishBooks(wishlist);
  }, []);

  const handleSort = (type) => {
    if (type === "Rating") {
      setSort(type);
      setReadBooks(readBooks.sort((a, b) => b.rating - a.rating));
      setwishBooks(wishBooks.sort((a, b) => b.rating - a.rating));
    }
    if (type === "Pages") {
      setSort(type);
      setReadBooks(readBooks.sort((a, b) => b.totalPages - a.totalPages));
      setwishBooks(wishBooks.sort((a, b) => b.totalPages - a.totalPages));
    }
  };
  return (
    <>
      <h2 className="text-3xl my-8">Listed Books</h2>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <SortBy sort={sort} onSort={handleSort} />

        <TabPanel>
          <h2 className="text-2xl text-blue-300 font-bold text-center my-5">
            You have read: {readBooks.length} books yet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 mt-4">
            {readBooks.map((book) => (
              <Book key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl text-blue-300 font-bold text-center my-5">
            Your Wishlist : {wishBooks.length} books added
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 mt-4">
            {wishBooks.map((book) => (
              <Book key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
