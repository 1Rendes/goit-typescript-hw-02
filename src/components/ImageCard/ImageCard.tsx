/* eslint-disable react/prop-types */
import { ImageCardType } from "../../types";
import css from "./ImageCard.module.css";

const ImageCard: React.FC<ImageCardType> = ({ imageData, onGalleryClick }) => {
  const ClickHandler = () => {
    onGalleryClick(imageData.id);
  };
  return (
    <div onClick={ClickHandler}>
      <img
        className={css.image}
        src={imageData.urls.small}
        alt={imageData.alt_description}
      />
    </div>
  );
};

export default ImageCard;
