// created by Aaron Thomas
// NSCC INET (2026)
// sources:
// https://www.w3schools.com/bootstrap4/bootstrap_flex.asp
// https://www.typescriptlang.org/docs/handbook/functions.html
// https://www.w3schools.com/jsref/jsref_tolocaledatestring.asp

import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import type { Movie } from "../../types/Movie"

// helper function to convert runtime format 
function formatRuntime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
}

// helper function to convert release date format
function formatReleaseDate(dateString: string): string {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

export default function Details() {
    const { id } = useParams();

    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(import.meta.env.VITE_API_HOST + 'api/movies' + '/' + id);
            const movie = await res.json();
            setMovie(movie[0])
        }

        fetchData()
    }, []) // run only once

    if (!movie) {
        return <p>Loading...</p>;
    } 
    return (
        <>
            <h2 className="mb-4 mt-3 movie-title">{movie.title}</h2>

            <div className="d-flex gap-4 align-items-start mb-5">

                {/* left side (poster) is a fixed size */}
                <div style={{ width: "300px", flexShrink: 0 }}>
                    <img src={movie.imageURL} alt={movie.title} className="img-fluid rounded" />
                </div>

                {/* right side (details) is a flexible size */}
                <div className="flex-grow-1">
                    <div className="mb-5">{movie.synopsis}</div>
                    <div className="mb-4 movie-details"><strong>Rating: </strong>{movie.rating}</div>
                    <div className="mb-4 movie-details"><strong>Genre: </strong>{movie.genre}</div>
                    <div className="mb-4 movie-details"><strong>Run Time: </strong>{formatRuntime(movie.runTime)}</div>
                    <div className="mb-4 movie-details"><strong>Release Date: </strong>{formatReleaseDate(movie.releaseDate)}</div>
                </div>
            </div>


            <p>
                {/* Return to home page. <Link to="/">Home</Link> */}
            </p>
        </>
    )
}