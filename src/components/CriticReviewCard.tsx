import type { CriticReview } from "../types/CriticReview"
import { renderStars } from "../utils/renderStars";


export default function CriticReviewCard({ review }: { review: CriticReview }) {
    return (
        <div className="card p-1 mb-2 px-3">
            <div>
                {renderStars(review.reviewScore)}
                <strong className="movie-details reviewer-name"> - {review.criticName}</strong>
            </div>
            <p className="mt-2">{review.reviewContent}</p>
        </div>
    );
}
