export default function Book({ book }) {
  const { tags } = book;
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
          {tags.map((tag) => (
            <button className="btn btn-sm text-green-500 font-bold bg-gray-700">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">{book.bookName}</h2>
        <p className="text-lg font-semibold">By : {book.author}</p>
        <div className="flex justify-between items-center">
          <p className="text-base">{book.category}</p>
          <p className="text-base">Rating: {book.rating}</p>
        </div>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
}
