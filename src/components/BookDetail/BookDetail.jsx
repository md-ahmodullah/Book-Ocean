import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredWishList } from "../Utility/addTDbWishlist.js";
import { addToStoredList } from "../Utility/addToDb.js";
export default function BookDetail() {
  const { bookId } = useParams();

  const data = useLoaderData();

  const book = data.find((b) => b.bookId === Number(bookId));

  const { tags } = book;

  const handleRead = (id) => {
    addToStoredList(id);
  };

  const handleWishlist = (id) => {
    addToStoredWishList(id);
  };

  return (
    <>
      <div className="hero bg-base-200 my-6 p-5">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img
            src={book.image}
            className="max-w-sm rounded-lg shadow-2xl bg-blue-200 p-16"
          />
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">{book.bookName}</h1>
            <h3 className="text-base font-bold">By : {book.author}</h3>
            <div className="border-y-2 border-gray-600 py-2">
              <p className="text-sm text-center text-blue-400 font-semibold border-2 border-gray-600 p-1 rounded-2xl w-20">
                {book.category}
              </p>
            </div>
            <p className="py-2 text-sm">
              <span className="text-base font-bold text-gray-300">Review:</span>{" "}
              {book.review}
            </p>
            <div className="border-b-2 border-gray-600 pb-2 flex items-center gap-2">
              <p className="text-sm font-bold text-gray-300 flex items-center gap-3">
                Tags:
              </p>
              <div className="flex items-center gap-3">
                {tags.map((tag, index) => (
                  <button
                    className="btn btn-sm text-green-500 font-bold bg-gray-700 text-xs"
                    key={index}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="py-2 text-base">
              <table>
                <tbody>
                  <tr>
                    <td className="pr-16">Number of Pages </td>
                    <td className="font-bold">{book.totalPages}</td>
                  </tr>
                  <tr>
                    <td>Publisher </td>
                    <td className="font-bold">{book.publisher}</td>
                  </tr>
                  <tr>
                    <td>Year Of Publishing </td>
                    <td className="font-bold">{book.yearOfPublishing}</td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td className="font-bold">{book.rating}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleRead(bookId)}
                className="btn btn-sm btn-transparent border border-gray-500"
              >
                Mark as Read
              </button>
              <button
                onClick={() => handleWishlist(bookId)}
                className="btn btn-sm btn-primary"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
