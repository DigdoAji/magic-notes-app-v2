import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { MdSaveAlt } from 'react-icons/md';
import NotesInput from '../components/NotesInput';
import NotesButton from '../components/NotesButton';
import { getNote, editNote } from '../utils/local-data';

const EditPageWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const editNoteHandler = (note) => {
    editNote(note);
    navigate(`/notes/${id}`);
  };

  return <EditPage id={id} editNoteHandler={editNoteHandler} />;
};

class EditPage extends React.Component {
  constructor(props) {
    super(props);

    const note = getNote(props.id);
    this.initBodyEdit = note.body;
    this.state = {
      id: note.id,
      title: note.title,
      body: note.body,
    };
  }

  titleChangeEventHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  bodyInputEventHandler = (event) => {
    this.setState({ body: event.target.innerHTML });
  };

  submitButtonHandler = () => {
    this.props.editNoteHandler(this.state);
  };

  render() {
    return (
      <section className="add-new-page">
        <NotesInput
          state={this.state}
          onTitleChange={this.titleChangeEventHandler}
          onBodyChange={this.bodyInputEventHandler}
          initBodyEdit={this.initBodyEdit}
        />
        <div className="add-new-page__action">
          <NotesButton
            className='action action__submit-note'
            title="Save Note"
            onClick={this.submitButtonHandler}
            icon={<MdSaveAlt />}
          />
        </div>
      </section>
    );
  }
}

EditPage.propTypes = {
  id: PropTypes.string.isRequired,
  editNoteHandler: PropTypes.func.isRequired,
};

export default EditPageWrapper;
