import React from "react";
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import "../styling/nav.css"
import { Link } from "react-router-dom";
import { RxDotsHorizontal } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";

export const Navbar = () => {
    return (
        <>
            <nav>
                <div id="navbar">
                    <div id="upper">
                        <div className="left">
                            <Link to="/sustainability"> <span>Sustainability</span></Link>
                            <Link to="/sustainability"><span> Customer Service</span></Link>
                            <Link to="/sustainability"> <span>Newsletter</span></Link>
                            <Link to="/sustainability"> <span><RxDotsHorizontal/></span></Link>
                        </div>
                        <div className="middle">
                            <Link><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="" /></Link>
                        </div>
                        <div className="right">
                         <Link><span><AiOutlineUser />Sign In</span></Link>
                         <Link><span><MdFavoriteBorder />Favourite</span></Link>
                         <Link><span><IoBagOutline />Shopping Bag</span></Link>
                        </div>
                    </div> 
                </div>
            </nav>
        </>
    );
};


