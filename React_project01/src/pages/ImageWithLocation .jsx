import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const ImageWithLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Dummy data: Image and Location
  const images = [
    {
      id: 1,
      src: "https://via.placeholder.com/200",
      title: "Kisan Farm 1",
      location: { lat: 23.2599, lng: 77.4126 }, // Bhopal
    },
    {
      id: 2,
      src: "https://via.placeholder.com/200",
      title: "Kisan Farm 2",
      location: { lat: 28.6139, lng: 77.2090 }, // Delhi
    },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-semibold mb-4">Click Image to View Location</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img) => (
          <div key={img.id} className="cursor-pointer hover:scale-105 transition" onClick={() => setSelectedLocation(img)}>
            <img src={img.src} alt={img.title} className="rounded-lg shadow-md" />
            <p className="text-center mt-2">{img.title}</p>
          </div>
        ))}
      </div>

      {selectedLocation && (
        <div className="w-full max-w-xl mt-8 border rounded-lg overflow-hidden shadow-lg">
          <h3 className="text-center font-bold bg-green-600 text-white py-2">Location of {selectedLocation.title}</h3>
          <MapContainer center={selectedLocation.location} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={selectedLocation.location}>
              <Popup>
                {selectedLocation.title}<br /> Lat: {selectedLocation.location.lat}, Lng: {selectedLocation.location.lng}
              </Popup>
            </Marker>
            
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default ImageWithLocation;
