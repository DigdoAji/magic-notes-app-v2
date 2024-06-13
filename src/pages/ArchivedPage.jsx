import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/local-data';

const ArchivedPageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const changeSearchParams = (newKeyword) => {
    setSearchParams({ keyword: newKeyword });
  };

  return (
    <ArchivedPage
      defaultkeyword={keyword}
      keywordChange={changeSearchParams}
    />
  );
};

class ArchivedPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
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
        <h2>Archived Notes</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.keywordChangeHandler}
        />
        <NotesList notes={notes} />
      </section>
    );
  }
}

ArchivedPage.propTypes = {
  defaultkeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivedPageWrapper;
