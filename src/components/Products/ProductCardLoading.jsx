import React from "react";
import styles from "../../styles/Product.module.css";

const ProductCardLoading = () => {
  return (
    <>
      <div className={styles.cardIsLoading}>
        <div className={styles.image}></div>
        <div className={styles.content}>
          <h2></h2>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default ProductCardLoading;
