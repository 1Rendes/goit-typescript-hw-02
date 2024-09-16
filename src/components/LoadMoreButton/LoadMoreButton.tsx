/* eslint-disable react/prop-types */
import { LoadMoreButtonType } from "../../types";
import css from "./LoadMoreButton.module.css";
const LoadMoreButton: React.FC<LoadMoreButtonType> = ({ page, onClick }) => {
  const handlerLoadMore = () => {
    onClick(page);
  };
  return (
    <button className={css.button} type="button" onClick={handlerLoadMore}>
      Load More
    </button>
  );
};

export default LoadMoreButton;
