export interface Movie {
        id: number; 
        genreId: number;  // Foreign key- many movies to ONE genre
        ratingId: number; // Foreign key- many movies to ONE rating
        title: string;
        synopsis: string;
        runTime: number;
        releaseDate: string;
        imageURL: string;
}