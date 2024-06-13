import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundMessage = () => (
    <section className='notes-list-error'>
        <h2 className='notes-list-error__404'>404</h2>
        <p className='notes-list-error___message'>
            Page not found. Go back to <Link className='notes-list-error__link' to='/'>Home Page</Link>
        </p>
    </section>
);

export default NotFoundMessage;
