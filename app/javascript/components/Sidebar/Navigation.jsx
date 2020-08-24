import React from 'react';

const Navigation = () => (
  <>
    <h5 className='mb-4 uppercase tracking-wide font-bold text-lg lg:text-sm tracking-widest'>
      Denoted
    </h5>
    <h5 className='mb-4 text-gray-500 uppercase tracking-wide font-bold text-sm lg:text-xs opacity-75'>
      Navigation
    </h5>
    <div className='sidebar-navigation'>
      <a
        href='#'
        className='sidebar-item active'>
        <i className='fas fa-book'></i>
        <span className='ml-3 mr-auto'>All Notes</span>
      </a>
      <a
        href='#'
        className='sidebar-item'>
        <i className='far fa-star'></i>
        <span className='ml-3 mr-auto'>Starred</span>
      </a>
      <a
        href='#'
        className='sidebar-item'>
        <i className='far fa-edit'></i>
        <span className='ml-3 mr-auto'>Drafts</span>
      </a>
      <a
        href='#'
        className='sidebar-item'>
        <i className='fas fa-trash'></i>
        <span className='ml-3 mr-auto'>Trash</span>
      </a>
    </div>
  </>
);

export default Navigation;
