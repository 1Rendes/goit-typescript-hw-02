/* eslint-disable react/prop-types */
import css from "./SearchBar.module.css";
const SearchBar = ({ onClick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const prompt = form.elements.prompt.value.trim();
    onClick(prompt);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.field}
          name="prompt"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
