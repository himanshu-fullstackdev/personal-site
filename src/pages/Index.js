import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      'Himanshu Arora\'s personal website.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome to my website</Link>
          </h2>
          <p>
            A SHOWCASE OF ALL OF MY WORK, TO SHOW WHAT I CAN BRING TO THE TABLE!
          </p>
        </div>
      </header>
      <p>
        {' '}
        Please feel free to read more <Link to="/about">about me</Link>, or you
        can check out my <Link to="/resume">resume</Link>,{' '}
        <Link to="/projects">projects</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;