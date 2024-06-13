import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePageWrapper from './pages/HomePage';
import ArchivedPageWrapper from './pages/ArchivedPage';
import AddPage from './pages/AddPage';
import DetailPageWrapper from './pages/DetailPage';
import EditPageWrapper from './pages/EditPage';
import ErrorPage from './pages/ErrorPage';

const App = () => (
  <div className='app-container'>
    <header>
      <Navigation />
    </header>
    <main>
      <Routes>
        <Route path='/' element={<HomePageWrapper />} />
        <Route path='/archived' element={<ArchivedPageWrapper />} />
        <Route path='/notes/add' element={<AddPage />} />
        <Route path='/notes/:id' element={<DetailPageWrapper />} />
        <Route path='/notes/edit/:id' element={<EditPageWrapper />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  </div>
);

export default App;
