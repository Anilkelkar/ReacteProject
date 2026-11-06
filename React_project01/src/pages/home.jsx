import ProductList from "./ProductList";

export default function Home() {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500937386664-56d1dfef3854)", // farmer image
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* content */}
        <div className="relative z-10 flex h-full items-center px-20">
          <div className="text-white max-w-lg">
            <h1 className="text-5xl font-bold mb-4">FARMING</h1>
            <p className="mb-6 text-lg">
              Agriculture is the backbone of our country. खेत और किसान हमारी ताकत हैं।
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-md">
              See more
            </button>
          </div>
        </div>
      </div>

      <ProductList />
    </>
  );
}