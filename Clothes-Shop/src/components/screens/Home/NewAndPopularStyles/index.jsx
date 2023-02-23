import React from 'react';
import './styles.css';

const NewStyles = () => (
  <>
    <div className="container">
      <section>
        <div className="brands-container">
          <img src="assets/images/HomePage-brands/brand-1.png" />
          <img src="assets/images/HomePage-brands/brand-2.png" />
          <img src="assets/images/HomePage-brands/brand-3.png" />
          <img src="assets/images/HomePage-brands/brand-4.png" />
          <img src="assets/images/HomePage-brands/brand-5.png" />
        </div>

        <div className="models-container">
          <div className="main-col">
            <img className="main-model" src="assets/images/HomePage-models/model.png" />
            {/* <h2 className="explore-text">EXPLORE NEW AND POPULAR STYLES</h2> */}
          </div>
          <div className="rows-container">
            <div className="model-row-1">
              <img className="model" src="assets/images/HomePage-models/model-1.png" />
              <img className="model" src="assets/images/HomePage-models/model-2.png" />
            </div>
            <div className="model-row-2">
              <img className="model" src="assets/images/HomePage-models/model-3.png" />
              <img className="model" src="assets/images/HomePage-models/model-4.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default NewStyles;
