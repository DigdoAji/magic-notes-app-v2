import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { BiArchive } from 'react-icons/bi';

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <>
        <h1>
            <Link to='/'>Magic Notes</Link>
        </h1>
        <nav className='navigation'>
            <ul>
                <li>
                    {
                        pathname !== '/archived'
                          ? <Link to="/archived"><span>Archive</span><BiArchive /></Link>
                          : <Link to="/"><span>Home</span><GoHomeFill /></Link>
                    }
                </li>
            </ul>
        </nav>
    </>
  );
};

export default Navigation;
