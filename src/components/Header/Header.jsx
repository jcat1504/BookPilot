import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>
                Welcome to our book search app, where you can find your book of choice in just a few clicks. Whether you're looking for the latest bestseller, a classic novel, or a niche non-fiction title, our app makes it easy to search for and discover new books.
                </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header