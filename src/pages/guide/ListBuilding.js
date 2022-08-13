import React, { useState } from 'react';
import SlidePopup from '../../components/slide-popup';

const ListBuilding = ({ listItem, onClick = () => { } }) => {
  const [activeItem, setActiveItem] = useState();
  const handleChangeActiveItem = (item) => () => {
    // document.getElementsByTagName("body")[0].style.overflow = "hidden";
    // document.getElementsByTagName("body")[0].style.paddingRight = "17px";
    setActiveItem(item)
  };
  const onClose = () => {
    // document.getElementsByTagName("body")[0].style.overflow = "auto";
    // document.getElementsByTagName("body")[0].style.paddingRight = "0px";

    setActiveItem();
  }
  return (
    <div>
      <div class="village-title">{listItem.title}</div>
      <div id="village-content" class="row m-0 m-auto">
        {listItem.items.map((item) => (
          <div class="building-detail col-2 " onClick={handleChangeActiveItem(item)}>
            <img src={item.img} alt="img error" />
            <div id="name">{item.title}</div>
          </div>
        ))}
        {activeItem && <SlidePopup {...activeItem} onClose={onClose} />}
        <div class="building-detail col-3 justify-content-center">
          <div id="andMore">AND MORE...</div>
        </div>
      </div>
    </div>
  );
};

export default ListBuilding;
