import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            Im Some Other page!
            <Link to="/">Go to home page</Link>
        </div>
    );
}