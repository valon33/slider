import React from "react";
import { photos } from "../../data";
import styles from "./ImageGrid.module.css";

const ImageGrid = ({ setSelectedImage }) => {
    return (
        <div className={styles.imageGrid}>
            {photos.map((img) => {
                return (
                    <div className={styles.imageContainer} key={img.id}>
                        <img
                            src={`/images/${img.name}.jpg`}
                            alt={img.name}
                            className={styles.image}
                            onClick={() => setSelectedImage(img.name)}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ImageGrid;
