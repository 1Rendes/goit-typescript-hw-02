/* eslint-disable react/prop-types */
import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ modalData, closeModal, modalIsOpen }) => {
  return (
    <ReactModal
      overlayClassName={css.backdrop}
      className={css.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      {modalData && (
        <>
          <img
            className={css.image}
            src={modalData.urls.regular}
            alt={modalData.alt_description}
          />
          <div className={css.descriptionBlock}>
            <p className={css.description}>
              <b>Description:</b> {modalData.description}
            </p>
            <p className={css.description}>
              <b>Author:</b> {modalData.user.username}
            </p>
          </div>
        </>
      )}
    </ReactModal>
  );
};

// const HandleClose = (e) => {
//   console.log(e);
//   if (e.target.className.includes("backdrop")) {
//     onClose(e.target);
//   }
// };
// return (
//   <div className={css.backdrop} onClick={HandleClose} onKeyDown={HandleClose}>
//     <div className={css.modal}>
//       <img
//         className={css.image}
//         src={modalData.urls.regular}
//         alt={modalData.alt_description}
//       />
//       <div className={css.descriptionBlock}>
//         <p className={css.description}>
//           <b>Description:</b> {modalData.description}
//         </p>
//         <p className={css.description}>
//           <b>Author:</b> {modalData.user.username}
//         </p>
//       </div>
//     </div>
//   </div>
// );
// };

export default ImageModal;
