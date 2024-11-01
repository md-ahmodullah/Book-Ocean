import BannerImg from "/src/assets/books.jpg";
export default function Banner() {
  return (
    <div className="hero bg-base-200 p-16 my-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <img src={BannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Book Lovers Say!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
