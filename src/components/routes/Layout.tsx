import { Link, Outlet } from "react-router"

export default function Layout() {
    return (
        <>
            <nav className="navbar navbar-dark">
                <div className="container mb-3">
                    <Link className="navbar-brand" to="/">
                        <img src="/fireLogo.png" alt="MovieReviews" className="navbar-logo" />
                        <span className="navbar-brand-text"> Hot Takes</span>
                    </Link>
                </div>
            </nav>

            <main className="container mt-4">
                <Outlet></Outlet>               {/* Leads to home */}
            </main>

            <footer className="container mt-4">
                <p className="text-muted">Copyright 2026 - Hot Takes Movie Reviews</p>
            </footer>
        </>
    )
}