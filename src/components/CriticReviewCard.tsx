import type { CriticReview } from "../types/CriticReview"


export default function CriticReviewCard(props: {review: CriticReview }) {

    return (
        <div className="w-25 pb-3">
            <div><strong>{props.review.criticName}</strong></div>
            <div>{props.review.reviewScore}/5</div>
        </div>
    )
}