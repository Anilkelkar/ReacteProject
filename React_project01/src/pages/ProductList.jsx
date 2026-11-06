import React from "react";

const products = [
  { id: 1, name: "Apple", price: 120, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce" },
  { id: 2, name: "Wheat", price: 35, image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443" },
  { id: 3, name: "Tomato", price: 30, image: "https://images.unsplash.com/photo-1561136594-7f68413baa99" },
  { id: 4, name: "Banana", price: 40, image: "https://images.unsplash.com/photo-1574226516831-e1dff420e8f8" },
  
  { id: 5, name: "Potato", price: 25, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655" },
  { id: 6, name: "Onion", price: 28, image: "https://images.unsplash.com/photo-1582515073490-dc6c0e0d5f2c" },
  { id: 7, name: "Carrot", price: 45, image: "https://images.unsplash.com/photo-1447175008436-054170c2e979" },
  { id: 8, name: "Cabbage", price: 22, image: "https://images.unsplash.com/photo-1584270354949-1b4f0c73c9a1" },

  { id: 9, name: "Rice", price: 60, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c" },
  { id: 10, name: "Maize", price: 32, image: "https://images.unsplash.com/photo-1603048719539-9ecbfc3c0c6e" },
  { id: 11, name: "Milk", price: 55, image: "https://images.unsplash.com/photo-1580910051074-3eb694886505" },
  { id: 12, name: "Eggs", price: 70, image: "https://images.unsplash.com/photo-1517959105821-eaf2591984a5" },
];

const ProductList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white p-10">
      <h2 className="text-4xl font-bold text-center mb-10 text-green-800">
        🌿 Premium Farm Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="group perspective"
          >
            <div
              className="
              relative h-80 rounded-3xl 
              bg-white/20 backdrop-blur-lg 
              border border-white/30 
              shadow-xl 
              transition duration-500 
              transform group-hover:rotate-y-6 group-hover:rotate-x-6 group-hover:scale-105
            "
            >
              {/* Image */}
              <div className="flex justify-center -mt-12">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-white"
                />
              </div>

              {/* Content */}
              <div className="text-center mt-6 px-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-lg font-bold text-green-700 mt-2">
                  ₹{item.price}/kg
                </p>

                <input
                  type="number"
                  placeholder="Qty"
                  className="w-full mt-4 bg-white/40 backdrop-blur-md border border-white/30 rounded-lg px-3 py-2 focus:outline-none"
                />

                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition shadow-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;