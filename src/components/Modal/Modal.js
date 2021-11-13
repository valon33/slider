import React, { useEffect, useState } from "react";
import Styles from "./Modal.module.css";
import { photos } from "../../data";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const [indexOfCurrentImg, setIndexOfCurrentImg] = useState(null);

  useEffect(() => {
    const index = photos.findIndex((img) => img.name === selectedImage);
    setIndexOfCurrentImg(index);
  }, [selectedImage]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [indexOfCurrentImg]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (indexOfCurrentImg === photos.length - 1) {
      return setSelectedImage(photos[0].name);
    }
    setSelectedImage(photos[indexOfCurrentImg + 1].name);
  };

  const prevImage = () => {
    if (indexOfCurrentImg === 0) {
      return setSelectedImage(photos[photos.length - 1].name);
    }
    setSelectedImage(photos[indexOfCurrentImg - 1].name);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      prevImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };

  return (
    <>
      <div className={Styles.backdrop} onClick={handleClick} />

      <img
        src={`/images/${selectedImage}.jpg`}
        alt={selectedImage}
        className={Styles.img}
      />

      <button
        className={`${Styles.modal_btn} ${Styles.modalBtnNext}`}
        onClick={nextImage}
      >
        <FaChevronRight className={Styles.modalSvg} />
      </button>
      <button
        className={`${Styles.modal_btn} ${Styles.modalBtnPrev}`}
        onClick={prevImage}
      >
        <FaChevronLeft className={Styles.modalSvg} />
      </button>
      <button
        className={`${Styles.modal_btn} ${Styles.modalBtnClose}`}
        onClick={() => setSelectedImage(null)}
      >
        <FaTimes className={Styles.modalSvg} />
      </button>
    </>
  );
};

export default Modal;
