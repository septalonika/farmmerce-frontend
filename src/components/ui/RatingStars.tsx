import { Star, StarHalf, StarOff } from "lucide-react";

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star
        key={`full-${i}`}
        className="h-4 w-4 text-yellow-500"
        fill="currentColor"
      />,
    );
  }

  // Half star
  if (halfStar) {
    stars.push(<StarHalf key="half" className="h-4 w-4 text-yellow-500" />);
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <StarOff key={`empty-${i}`} className="h-4 w-4 text-gray-300" />,
    );
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
      <span className="ml-2 text-sm text-gray-600">({rating.toFixed(1)})</span>
    </div>
  );
};

export default RatingStars;
