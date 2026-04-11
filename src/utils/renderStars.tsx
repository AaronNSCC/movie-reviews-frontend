// helper funtion to render stars
export function renderStars(score: number) {
    // create an array of 5 stars (flames) and fill them based on the score
    const stars = [];

    // loop 5 times
    for (let i = 0; i < 5; i++) {       
        const isFilled = i < score; // checks if star should be filled or not

        stars.push(                             // push stars on to the array
            <span key={i} className="star">
                <img
                    src={isFilled ? "/fireLogo.png" : "/emptyFlame.png"}    // red flame for filled - white if not
                    alt="ReviewScore"
                    className="flame-rating"
                />
            </span>
        );
    }

    // return stars array
    return <>{stars}</>;
}