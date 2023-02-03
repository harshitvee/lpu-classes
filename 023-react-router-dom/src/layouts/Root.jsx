import { Outlet, Link } from "react-router-dom";

function Root() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <section>
                <Outlet />
            </section>
        </>
    );
}

export default Root;
