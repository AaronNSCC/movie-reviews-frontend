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
            setMovies(movies)
        }

        fetchData()
    }, []) // run only once

    return (
        <>
            <h1>Home - Hot Takes Movie Reviews</h1>

            {
                movies.length > 0 && (
                    movies.map(movie => (
                        <Link key={movie.id} to={`/details/${movie.id}`} >
                            <MovieCard key={movie.id} movie={movie} />
                        </Link>
                    ))
                )
            }
        </>
    )
}