// components/TestimonialCard.tsx
import Image from "next/image";

interface Props {
  testimonial: {
    name: string;
    role: string;
    image: string;
    rating: number;
    quote: string;
  };
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="min-w-[320px] max-w-[320px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Quote Icon */}
      <div className="text-3xl text-slate-300 mb-3">“</div>

      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>

      {/* Text */}
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {testimonial.quote}
      </p>

      {/* User */}
      <div className="flex items-center gap-3">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-sm text-slate-900">
            {testimonial.name}
          </p>
          <p className="text-xs text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
