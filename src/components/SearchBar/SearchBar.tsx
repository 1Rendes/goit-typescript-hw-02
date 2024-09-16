/* eslint-disable react/prop-types */
import { FormEvent } from "react";
import { SearchBarType } from "../../types";
import css from "./SearchBar.module.css";
const SearchBar: React.FC<SearchBarType> = ({ onClick }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const prompt: string = (
      form.elements.namedItem("prompt") as HTMLInputElement
    ).value.trim();
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
