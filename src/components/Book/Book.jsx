import { Link } from "react-router-dom";
export default function Book({ book }) {
  const { tags, bookId } = book;
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-600 p-4">
      <figure className="bg-blue-200 py-6 rounded-xl">
        <img
          src={book.image}
          alt={book.bookName}
          className="rounded-xl h-[166px]"
        />
      </figure>
      <div className="p-4 items-center space-y-4">
        <div className="flex items-center gap-3">
          {tags.map((tag, index) => (
            <button
              className="btn btn-sm text-green-500 font-bold bg-gray-700"
              key={index}
            >
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">{book.bookName}</h2>
        <p className="text-lg font-semibold">By : {book.author}</p>
        <div className="flex justify-between items-center border-t-2 border-dashed border-gray-700 pt-5">
          <p className="text-base">{book.category}</p>
          <p className="text-base">Rating: {book.rating}</p>
        </div>
        <div className="flex justify-between items-center">
          <button className="btn btn-sm btn-primary">Buy Now</button>
          <Link to={`books/${bookId}`}>
            <button className="btn btn-sm btn-success">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
