// created by Aaron Thomas
// NSCC INET (2026)
// sources:
// https://www.w3schools.com/bootstrap4/bootstrap_flex.asp

import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import type { Movie } from "../../types/Movie"


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
            <h2 className="mb-4">{movie.title}</h2>

            <div className="d-flex gap-4 align-items-start mb-5">

                {/* left side (poster) is a fixed size */}
                <div style={{ width: "300px", flexShrink: 0 }}>
                    <img src={movie.imageURL} alt={movie.title} className="img-fluid" />
                </div>

                {/* right side (details) is a flexible size */}
                <div className="flex-grow-1">
                    <p className="mb-4">{movie.synopsis}</p>
                </div>
            </div>

            <p>
                Return to home page. <Link to="/">Home</Link>
            </p>
        </>
    )
}