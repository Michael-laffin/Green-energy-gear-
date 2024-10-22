import React from 'react';

const timelineEvents = [
  { year: 2018, event: "Green Energy Gear founded" },
  { year: 2019, event: "Partnered with Jackery" },
  { year: 2020, event: "Launched first product line" },
  { year: 2021, event: "Expanded to international markets" },
  { year: 2022, event: "Reached 100,000 customers" },
  { year: 2023, event: "Introduced new eco-friendly packaging" },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-600"></div>
          {timelineEvents.map((event, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              <div className="z-20">
                <div className="bg-green-600 w-8 h-8 rounded-full"></div>
              </div>
              <div className="w-5/12 bg-white p-4 rounded shadow">
                <h3 className="font-bold text-lg mb-1">{event.year}</h3>
                <p className="text-gray-700">{event.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;