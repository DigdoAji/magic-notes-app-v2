import React from 'react';
import PropTypes from 'prop-types';
import { ImFilesEmpty } from 'react-icons/im';
import NotesItem from './NotesItem';

const EmptyNotesList = () => (
    <section className="notes-list-empty">
      <ImFilesEmpty />
      <p>No notes are displayed</p>
    </section>
);

const NotesList = ({ notes }) => (
        <>
          {
            notes.length ? (
            <section className='notes-list'>
              {
                notes.map((note) => (
                    <NotesItem
                        key={note.id}
                        id={note.id}
                        {...note}
                    />
                ))
              }
            </section>
            ) : (
                <EmptyNotesList />
            )
          }
        </>
);

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  })),
};

export default NotesList;
