// helper function to convert release date format
export function formatReleaseDate(dateString: string): string {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}