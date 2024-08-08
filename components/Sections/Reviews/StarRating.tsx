import { StarIcon } from "@heroicons/react/16/solid";

type StarRatingProps = {
  rating: number;
};

export const StarRating = ({ rating }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex space-x-[0.5px]">
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon key={index} className="size-4 text-yellow-400" />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <StarIcon className="w-6 h-6 text-gray-200" />
          <div className="absolute left-0 top-0 overflow-hidden" style={{ width: '50%' }}>
            <StarIcon className="size-4 text-yellow-400" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <StarIcon key={index + fullStars + (hasHalfStar ? 1 : 0)} className="w-6 h-6 text-gray-200" />
      ))}
    </div>
  );
};
