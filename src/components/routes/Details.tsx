// created by Aaron Thomas
// NSCC INET (2026)
// sources:
// https://www.w3schools.com/bootstrap4/bootstrap_flex.asp
// https://www.typescriptlang.org/docs/handbook/functions.html
// https://www.w3schools.com/jsref/jsref_tolocaledatestring.asp
// https://www.w3schools.com/cssref/css3_pr_filter.php
// https://www.w3schools.com/html/html_css.asp
// https://www.w3schools.com/react/react_hooks.asp

import { useParams } from "react-router";
import { useState, useEffect } from "react";
import type { Movie } from "../../types/Movie"
import type { CriticReview } from "../../types/CriticReview";
import { formatRuntime } from "../../utils/formatRuntime";
import { formatReleaseDate } from "../../utils/formatReleaseDate";
import CriticReviewCard from "../CriticReviewCard";


export default function Details() {
    const { id } = useParams();     // get movie id from the url

    // state setup
    const [movie, setMovie] = useState<Movie | null>(null);
    const [reviews, setReviews] = useState<CriticReview[]>([]);     // starts as empty array


    // FETCH THE MOVIE
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(import.meta.env.VITE_API_HOST + 'api/movies' + '/' + id);   // fetch movie with matching id
            const movie = await res.json(); // returns array
            setMovie(movie[0])      // re-renders the page
        }

        fetchData()
    }, []) // run only once

    // FETCH THE REVIEWS
    useEffect(() => {
        if (!movie) return;

        const fetchData = async () => {
            const res = await fetch(import.meta.env.VITE_API_HOST + `api/moviereviews?movieid=${movie.id}`); // fetch reviews matching movie id
            const reviewData = await res.json();
            setReviews(reviewData)
        }

        fetchData()
    }, [movie]) // run only once when movie changes

    if (!movie) {
        return <p>Loading...</p>;
    } 
    return (
        <>
        {/* MOVIE */}
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
                    <CriticReviewCard key={review.id} review={review} />
                ))}
            </div>
        </>
    )
}