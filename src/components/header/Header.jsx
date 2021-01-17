import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";

const Header = () => {
    return (
        <div className="row pt-2">
            <div className="col-md-9">
                <Link to="/">LOGO</Link>
            </div>
            <div className="col-md-3 d-flex justify-content-between">
                <Link to="/">All Streams</Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header;

