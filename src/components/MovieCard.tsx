import type { Movie } from "../types/Movie"


export default function MovieCard(props: { movie: Movie }) {

    return (
        <div className="w-25 pb-3">
            <h3>{props.movie.title}</h3>
            <img src={props.movie.imageURL} alt={props.movie.title} className="img-fluid" />
        </div>
    )
}