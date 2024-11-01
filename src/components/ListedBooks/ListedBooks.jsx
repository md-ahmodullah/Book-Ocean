import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from "../Book/Book.jsx";
import { getStoredList } from "../Utility/addToDb.js";
export default function ListedBooks() {
  const [readBooks, setReadBooks] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const storedReadList = getStoredList();
    const storedReadListInt = storedReadList.map((num) => Number(num));

    const readList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadBooks(readList);
  }, []);
  return (
    <>
      <h2 className="text-3xl my-8">Listed Books</h2>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl text-blue-300 font-bold text-center my-5">
            You have read: {readBooks.length} books yet
          </h2>
          <div className="grid grid-cols-3 gap-16 mb-10 mt-4">
            {readBooks.map((book) => (
              <Book key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </>
  );
}
