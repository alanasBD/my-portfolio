import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header mt-3'>
            <Link className='mb-2 d-inline-block' to="/home">Home</Link>
            <Link className='mb-3 d-inline-block' to="/about">About</Link>
            <Link className='mb-3 d-inline-block' to="/contact">Contact Me</Link>
            <Link className='mb-3 d-inline-block' to="/blogs">Blogs</Link>
            <a
            className='border  p-2 rounded' 
            target={`_blank`}
            href="https://drive.google.com/file/d/1_OKNKdS_3Ew1hEWwb1wWcYH9zxtpQh91/view?usp=sharing">Resume</a>
        </div>
    );
};

export default Header;