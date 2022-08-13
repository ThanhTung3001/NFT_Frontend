import React from "react";
import { useTranslation } from 'react-i18next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BuildingLevel from '../../components/building-level';
import './style.css';

export default function Building() {
  const { t } = useTranslation();
  return (
    <div id="building">
      <div id="background-layer">
        <Header />
        <div>
          <div id="title-content">{t('building.title-content.1')}
            <br></br>
            {t('building.title-content.2')}
          </div>
          <div id="image-content">
            <img id="image" src="images/Clan.png" alt="Image error" />
          </div>
          <div id="building-level-container">
            <BuildingLevel />
          </div>
          <div id="blank"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
