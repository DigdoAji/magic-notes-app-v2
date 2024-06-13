import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { GrNote } from 'react-icons/gr';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import NotesButton from '../components/NotesButton';
import { getActiveNotes } from '../utils/local-data';

const HomePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const changeSearchParams = (newKeyword) => {
    setSearchParams({ keyword: newKeyword });
  };

  const navigate = useNavigate();
  const addButtonHandler = () => {
    navigate('/notes/add');
  };

  return (
    <HomePage
      defaultkeyword={keyword}
      keywordChange={changeSearchParams}
      onAddButton={addButtonHandler}
    />
  );
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultkeyword || '',
    };
  }

  keywordChangeHandler = (keyword) => {
    this.setState({ keyword });
    this.props.keywordChange(keyword);
  };

  render() {
    const notes = this.state.notes.filter(({ title }) => title
      .toLowerCase().includes(this.state.keyword.toLowerCase()));
    return (
        <section className="homepage">
            <h2>Active Notes</h2>
            <SearchBar
                keyword={this.state.keyword}
                keywordChange={this.keywordChangeHandler}
            />
            <NotesList notes={notes} />
            <div className="homepage__action">
                <NotesButton
                    className='action action__submit-note'
                    title="Add Note"
                    onClick={this.props.onAddButton}
                    icon={<GrNote />}
                />
            </div>
        </section>
    );
  }
}

HomePage.propTypes = {
  defaultkeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
  onAddButton: PropTypes.func.isRequired,
};

export default HomePageWrapper;
