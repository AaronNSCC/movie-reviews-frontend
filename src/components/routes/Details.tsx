// created by Aaron Thomas
// NSCC INET (2026)
// sources:
// https://www.w3schools.com/bootstrap4/bootstrap_flex.asp
// https://www.typescriptlang.org/docs/handbook/functions.html
// https://www.w3schools.com/jsref/jsref_tolocaledatestring.asp
// https://www.w3schools.com/cssref/css3_pr_filter.php
// https://www.w3schools.com/html/html_css.asp
// 

import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import type { Movie } from "../../types/Movie"
import type { CriticReview } from "../../types/CriticReview";
import { renderStars } from "../../utils/renderStars";
import { formatRuntime } from "../../utils/formatRuntime";
import { formatReleaseDate } from "../../utils/formatReleaseDate";


export default function Details() {
    const { id } = useParams();

    const [movie, setMovie] = useState<Movie | null>(null);
    const [reviews, setReviews] = useState<CriticReview[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(import.meta.env.VITE_API_HOST + 'api/movies' + '/' + id);
            const movie = await res.json();
            setMovie(movie[0])
        }

        fetchData()
    }, []) // run only once

    useEffect(() => {
        if (!movie) return;

        const fetchData = async () => {
            const res = await fetch(import.meta.env.VITE_API_HOST + `api/moviereviews?movieid=${movie.id}`);
            const reviewData = await res.json();
            setReviews(reviewData)
        }

        fetchData()
    }, [movie]) // run only once

    if (!movie) {
        return <p>Loading...</p>;
    } 
    return (
        <>
            <h2 className="mb-4 mt-3 movie-title">{movie.title}</h2>

            <div className="d-flex gap-4 align-items-stretch mb-5">

                {/* left side (poster) is a fixed size */}
                <div style={{ width: "300px", flexShrink: 0 }}>
                    <img src={movie.imageURL} alt={movie.title} className="img-fluid rounded" />
                </div>

                {/* right side (details) is a flexible size */}
                <div className="flex-grow-1 d-flex flex-column">
                    <div className="mb-5">{movie.synopsis}</div>
                    <div className="mt-auto">
                        <div className="mb-4"><strong className="movie-details">Rating: </strong>{movie.rating}</div>
                        <div className="mb-4"><strong className="movie-details">Genre: </strong>{movie.genre}</div>
                        <div className="mb-4"><strong className="movie-details">Run Time: </strong>{formatRuntime(movie.runTime)}</div>
                        <div className="mb-4"><strong className="movie-details">Release Date: </strong>{formatReleaseDate(movie.releaseDate)}</div>
                    </div>
                </div>
            </div>

            {/* CRITIC REVIEWS */}
            <div>
                <h2 className="mb-4 mt-3 critic-title">Critic Reviews</h2>
                
                {reviews.map(review => (
                    <div className="card p-1 mb-2 px-3">
                        <div>
                            <span>{renderStars(review.reviewScore)}</span>
                            <strong className="movie-details reviewer-name"> - {review.criticName}</strong>
                            
                        </div>
                        <p className="mt-2">{review.reviewContent}</p>
                    </div>
                ))}
            </div>

            <p>
                {/* Return to home page. <Link to="/">Home</Link> */}
            </p>
        </>
    )
}