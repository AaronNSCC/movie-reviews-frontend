export interface Movie {
        id: number; 
        genreId: number;  // Foreign key- many movies to ONE genre
        genre: string;
        ratingId: number; // Foreign key- many movies to ONE rating
        rating: string;
        title: string;
        synopsis: string;
        runTime: number;
        releaseDate: string;
        imageURL: string;

        averageScore?: number;
}