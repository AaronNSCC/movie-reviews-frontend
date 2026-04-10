// helper funtion to render stars
export function renderStars(score: number) {
    return (
        <>
            {[...Array(5)].map((_, i) => (
                <span key={i} className="star">
                    {i < score ? <img src="/fireLogo.png" alt="ReviewScore" className="flame-rating" /> :
                    <img src="/emptyFlame.png" alt="ReviewScore" className="flame-rating" />}
                </span>
            ))}
        </>
    );
}