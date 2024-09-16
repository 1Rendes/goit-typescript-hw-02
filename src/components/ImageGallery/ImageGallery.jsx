/* eslint-disable react/prop-types */
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ imagesData, onGalleryClick }) => {
  return (
    <ul className={css.imageList}>
      {imagesData.map((imageData) => (
        <li className={css.imageItem} key={imageData.id}>
          <ImageCard imageData={imageData} onGalleryClick={onGalleryClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
