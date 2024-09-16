/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import { Circles } from "react-loader-spinner";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";
import css from "./App.module.css";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [imagesData, setImagesData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [modalData, setModalData] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const onLoadMore = (page) => {
    const newPage = page + 1;
    setPage(newPage);
    newPage === totalPage && toast.success("That's all results");
  };

  const onSearch = (query) => {
    setPage(1);
    if (!query) {
      toast.error("Please fill the request");
      return;
    }
    setQuery(query);
    setImagesData([]);
  };

  const onGalleryClick = (id) => {
    setIsOpen(true);
    const element = imagesData.find((imageData) => imageData.id === id);
    setModalData(element);
  };
  const onModalClose = () => {
    setModalData("");
    setIsOpen(false);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchImages(query, page) {
      setLoader(true);
      const params = {
        client_id: "JWj_bCNUx3Fd2nBL7E1nsdRQrLZyjwxfSxU1LEDU88c",
        query: query,
        page: page,
        per_page: 12,
      };
      try {
        const responce = await axios.get(
          `https://api.unsplash.com/search/photos`,
          { params }
        );
        if (responce.data.results.length === 0) {
          toast.error("There is no matches to yout request. Try again!");
          setLoader(false);
          return;
        }
        setTotalPage(responce.data.total_pages);
        setImagesData((prevData) => [...prevData, ...responce.data.results]);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoader(false);
      }
    }
    fetchImages(query, page);
  }, [query, page]);

  useEffect(() => {
    window.scrollBy({
      top: 500,
      behavior: "smooth",
    });
  }, [imagesData]);

  return (
    <>
      <div>
        <Toaster position="top-center" />
      </div>
      <ImageModal
        modalData={modalData}
        modalIsOpen={modalIsOpen}
        closeModal={onModalClose}
      />
      <SearchBar onClick={onSearch} className={css.body} />

      {imagesData.length > 0 && (
        <ImageGallery imagesData={imagesData} onGalleryClick={onGalleryClick} />
      )}
      {loader && (
        <Circles
          wrapperStyle={{ justifyContent: "center", margin: 20 }}
          height="80"
          width="80"
          color="#000000"
          ariaLabel="circles-loading"
          wrapperClass=""
          visible={true}
        />
      )}
      {page < totalPage && <LoadMoreButton onClick={onLoadMore} page={page} />}
    </>
  );
};

export default App;
