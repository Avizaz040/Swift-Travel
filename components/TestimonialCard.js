export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`text-xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">`{testimonial.comment}`</p>
      <div>
        <h4 className="font-bold">{testimonial.name}</h4>
        <p className="text-gray-600 text-sm">{testimonial.role}</p>
      </div>
    </div>
  );
}