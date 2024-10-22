import React from 'react';

const customerPhotos = [
  { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", caption: "Camping with Jackery" },
  { url: "https://images.unsplash.com/photo-1533331639-74f1863c7b3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", caption: "Off-grid living" },
  { url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", caption: "Powering outdoor events" },
];

const CustomerPhotos: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Photos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerPhotos.map((photo, index) => (
            <div key={index} className="relative group">
              <img src={photo.url} alt={photo.caption} className="w-full h-64 object-cover rounded-lg shadow-md" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <p className="text-white text-center font-semibold">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerPhotos;