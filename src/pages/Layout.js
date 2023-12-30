import React from 'react';

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>

            <h1>Something</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="/blogs">Blogs</a>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;