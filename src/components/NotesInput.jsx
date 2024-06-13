import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

const NotesInput = ({ state, onTitleChange, onBodyChange, initBodyEdit }) => (
        <div className="add-new-page__input">
            <input
                className="add-new-page__input__title"
                type="text"
                value={state.title}
                onChange={onTitleChange}
                placeholder="Input title here...."
                required
            />
            <div
                className="add-new-page__input__body"
                onInput={onBodyChange}
                data-placeholder="Write your notes here...."
                contentEditable="true"
                suppressContentEditableWarning={true}
                aria-required="true"
            >
            {initBodyEdit !== undefined ? parser(initBodyEdit) : ''}
            </div>
        </div>
);

NotesInput.propTypes = {
  state: PropTypes.object.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  initBodyEdit: PropTypes.string,
};

export default NotesInput;
