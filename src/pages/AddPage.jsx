import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { MdSaveAlt } from 'react-icons/md';
import NotesInput from '../components/NotesInput';
import NotesButton from '../components/NotesButton';
import { addNote } from '../utils/local-data';

const AddPageWrapper = () => {
  const navigate = useNavigate();

  const newNoteHandler = (note) => {
    addNote(note);
    navigate('/');
  };

  return <AddPage onNewNote={newNoteHandler} />;
};

class AddPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  titleChangeEventHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  bodyInputEventHandler = (event) => {
    this.setState({ body: event.target.innerHTML });
  };

  submitButtonHandler = () => {
    this.props.onNewNote(this.state);
  };

  render() {
    return (
      <section className="add-new-page">
        <NotesInput
          state={this.state}
          onTitleChange={this.titleChangeEventHandler}
          onBodyChange={this.bodyInputEventHandler}
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

AddPage.propTypes = {
  onNewNote: PropTypes.func.isRequired,
};

export default AddPageWrapper;
