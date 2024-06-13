import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import NotesDetail from '../components/NotesDetail';
import NotesButton from '../components/NotesButton';
import NotFoundMessage from '../components/NotFoundMessage';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';

const DetailPageWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteNoteHandler = (noteId, archived) => {
    deleteNote(noteId);
    return archived ? navigate('/archived') : navigate('/');
  };

  const archiveNoteHandler = (noteId) => {
    archiveNote(noteId);
    navigate('/');
  };

  const unarchiveNoteHandler = (noteId) => {
    unarchiveNote(noteId);
    navigate('/archived');
  };

  const editNoteHandler = () => {
    navigate(`/notes/edit/${id}`);
  };

  return (
    <DetailPage
      id={id}
      onDeleteNote={deleteNoteHandler}
      onArchiveNote={archiveNoteHandler}
      onUnarchiveNote={unarchiveNoteHandler}
      onEditNote={editNoteHandler}
    />
  );
};

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  deleteButtonHandler = () => {
    const { id } = this.props;
    const { note } = this.state;
    this.props.onDeleteNote(id, note.archived);
  };

  archiveButtonHandler = () => {
    const { id } = this.props;
    this.props.onArchiveNote(id);
  };

  unarchiveButtonHandler = () => {
    const { id } = this.props;
    this.props.onUnarchiveNote(id);
  };

  render() {
    const { note } = this.state;
    const { onEditNote } = this.props;

    if (note === undefined) {
      return <NotFoundMessage />;
    }

    return (
        <section>
            <NotesDetail {...note} />
            <div className="detail-page__action">
                <NotesButton
                    className='action action__submit-note'
                    title='Edit Note'
                    onClick={onEditNote}
                    icon={<FiEdit2 />}
                />
                <NotesButton
                    className='action action__archive-note'
                    title={note.archived ? 'Unarchive' : 'Archive'}
                    onClick={note.archived
                      ? this.unarchiveButtonHandler : this.archiveButtonHandler}
                    icon={note.archived ? <BiArchiveOut /> : <BiArchiveIn />}
                />
                <NotesButton
                    className='action action__warning-note'
                    title='Delete'
                    onClick={this.deleteButtonHandler}
                    icon={<FiTrash2 />}
                />
            </div>
        </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
  onUnarchiveNote: PropTypes.func.isRequired,
  onEditNote: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
