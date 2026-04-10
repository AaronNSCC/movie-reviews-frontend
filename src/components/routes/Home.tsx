import { useState, useEffect } from "react";
import { Link } from "react-router";
import type { Movie } from "../../types/Movie"
import MovieCard from "../MovieCard";

export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);

useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(import.meta.env.VITE_API_HOST + 'api/movies');
        const movies = await res.json();

        // loop and fetch reviews for each movie
        for (const movie of movies) {
            const reviewRes = await fetch(
                import.meta.env.VITE_API_HOST + `api/moviereviews?movieid=${movie.id}`
            );
            const reviews = await reviewRes.json();

            // calculate average review score
            if (reviews.length === 0) {
                movie.averageScore = 0;
            } else {
                let totalScore = 0;
                for (const review of reviews) {
                    totalScore += review.reviewScore;
                }

                const average = totalScore / reviews.length; // divide total score by num of reviews

                movie.averageScore = average;
            }

        }

        setMovies(movies);
    };

    fetchData();
}, []);

    return (
        <>
            <h1 className="home-title">Hot Takes Movie Reviews</h1>

            <div className="row g-4 mt-4">
            {
                movies.length > 0 && (
                    movies.map(movie => (
                        <div key={movie.id} className="col-12 col-sm-6 col-lg-4">
                            <Link to={`/details/${movie.id}`} >
                                <MovieCard movie={movie} />
                            </Link>
                        </div>
                    ))
                )
            }
            </div>
        </>
    )
}