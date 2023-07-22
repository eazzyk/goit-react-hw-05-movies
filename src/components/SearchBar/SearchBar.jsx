import { useState } from 'react';
import css from './SearchBar.module.css';

const SearchBar = ({ handleSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = evt => {
    setValue(evt.target.value);
  };

  const handleSubmit = evt => {
    if (value.trim() === '') {
      alert('Empty field!');
      // return;
    }
    evt.preventDefault();
    handleSearch(value);
    setValue('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handleChange}
        value={value}
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
