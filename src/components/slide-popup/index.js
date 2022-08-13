import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import './style.css';

export default function SlidePopup({ id, title, description, items, onClose }) {


  return (
    <Modal
      show={true}
      onHide={onClose}
    >
      <div class="container" >
        <div id={`carousel${id}Indicators`} class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-flex slide-images-list  inner-ct" >
                {items?.map((item) => (
                  <div class="level-build d-flex flex-column justify-content-end" style={{ width: `calc(100% / ${items?.length})` }}>
                    <img src={item.img} alt="" />
                    <div class="img-title">{item.title1}</div>
                    <div class="img-title">{item.title2}</div>
                  </div>
                ))}
                {!items?.length && (
                  <div class="align-items-center justify-content-center inner-ct">
                    <h3>
                      COMING SOON
                    </h3>
                  </div>
                )}
              </div>
              <div class="img-description">{description}</div>
            </div>
            <div class="carousel-item">
              <div class="align-items-center justify-content-center inner-ct">
                <h3>
                  COMING SOON
                </h3>
              </div>
            </div>
            <div class="carousel-item">
              <div class="align-items-center justify-content-center inner-ct">
                <h3>
                  COMING SOON
                </h3>
              </div>
            </div>
          </div>
          <ol class="carousel-indicators">
            <li data-target={`#carousel${id}Indicators`} data-slide-to="0" class="active"></li>
            <li data-target={`#carousel${id}Indicators`} data-slide-to="1"></li>
            <li data-target={`#carousel${id}Indicators`} data-slide-to="2"></li>
          </ol>
        </div>

      </div >
    </Modal >
  );
}
