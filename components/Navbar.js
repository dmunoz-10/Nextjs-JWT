import Link from 'next/link';

const Navbar = ({ appName, isAuthenticated, deauthenticate }) => (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <Link href="/">
            <a className="navbar-brand">{appName}</a>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <Link href="/me">
                    <a className="btn btn-success">ME</a>
                </Link>
                {!isAuthenticated && <li className="nav-item">
                    <Link href="/signin">
                        <a className="btn btn-primary">Sign In</a>
                    </Link>
                </li>}
                {!isAuthenticated && <li className="nav-item">
                    <Link href="/signup">
                        <a className="btn">Sign Up</a>
                    </Link>
                </li>}
                {isAuthenticated && <li className="nav-item" onClick={deauthenticate}>
                    <a className="btn" href="#">Sign Out</a>
                </li>}
            </ul>
        </div>
        <style jsx>{`
            .btn {
                margin: 0 7px;
                color: white;
            }
        `}</style>
    </nav>
)

export default Navbar;