/* eslint-disable react/prop-types */
import css from "./LoadMoreButton.module.css";
const LoadMoreButton = ({ page, onClick }) => {
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
