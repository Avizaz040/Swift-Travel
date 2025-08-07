import Link from 'next/link';

export default function TourCard({ tour }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {tour.category && (
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            {tour.category}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{tour.title}</h3>
        <p className="text-gray-600 mb-4">{tour.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-blue-600">₹{tour.price}</span>
            <span className="text-gray-500 text-sm ml-2">{tour.duration}</span>
          </div>
          <Link   
            href={`/tours/${tour.slug}`} 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}