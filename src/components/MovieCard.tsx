import type { Movie } from "../types/Movie"
import { renderStars } from "../utils/renderStars"


export default function MovieCard(props: { movie: Movie }) {        // recieves movie prop

    return (
        <div className="movie-card">
            <div className="movie-card-title">{props.movie.title}</div>                                         {/* TITLE */}
            <img src={props.movie.imageURL} alt={props.movie.title} className="movie-card-poster" />            {/* POSTER IMG */}
            <p className="movie-card-score">Average Rating: {renderStars(props.movie.averageScore ?? 0)}</p>    {/* AVG REVIEW */}
        </div>
    )
}
