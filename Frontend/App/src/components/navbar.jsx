import React from "react";
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import "../styling/nav.css"
import { Link } from "react-router-dom";
import { RxDotsHorizontal } from "react-icons/rx";

export const Navbar = () => {
    return (
        <>
            <nav>
                <div id="navbar">
                    <div id="upper">
                        <div className="left">
                            <Link to="/sustainability"> Sustainability</Link>
                            <Link to="/sustainability"> Customer Service</Link>
                            <Link to="/sustainability"> Newsletter</Link>
                            <Link to="/sustainability"> <RxDotsHorizontal/></Link>
                        </div>
                        <div className="middle">

                        </div>
                        <div className="right">

                        </div>
                    </div> 
                </div>
            </nav>
        </>
    );
};


