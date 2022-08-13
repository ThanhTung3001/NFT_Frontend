import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
export default function Stores() {
  const { t } = useTranslation();
  return (
    <div id="building-lever">
      <div class="template">
        <img class="image" src="images/Cascle/Lvl1.png" alt="building level" />
        <div class="lever" id="building-lever1">{t('building.clan-castle')}</div>
        <div class="lever" id="building-lever1">{t('building.building-lever1')}</div>
      </div>
      <div class="arrow">
        <div class="line"></div>
        <div class="arrow-final">&gt;</div>
      </div>
      <div class="template">
        <img class="image" src="images/Cascle/Lvl2.png" alt="building level" />
        <div class="lever" id="building-lever1">{t('building.clan-castle')}</div>
        <div class="lever" id="building-lever1">{t('building.building-lever2')}</div>
      </div>
      <div class="arrow">
        <div class="line"></div>
        <div class="arrow-final">&gt;</div>
      </div>

      <div class="template">
        <img class="image" src="images/Cascle/Lvl3.png" alt="building level" />
        <div class="lever" id="building-lever1">{t('building.clan-castle')}</div>
        <div class="lever" id="building-lever3">{t('building.building-lever3')}</div>
      </div>
      <div class="arrow">
        <div class="line"></div>
        <div class="arrow-final">&gt;</div>
      </div>

      <div class="template">
        <img class="image" src="images/Cascle/Lvl4.png" alt="building level" />
        <div class="lever" id="building-lever1">{t('building.clan-castle')}</div>
        <div class="lever" id="building-lever4">{t('building.building-lever4')}</div>
      </div>
      <div class="arrow">
        <div class="line"></div>
        <div class="arrow-final">&gt;</div>
      </div>

      <div class="template">
        <img class="image" src="images/Cascle/Lvl5.png" alt="building level" />
        <div class="lever" id="building-lever1">{t('building.clan-castle')}</div>
        <div class="lever" id="building-lever5">{t('building.building-lever5')}</div>
      </div>
    </div>
  );
};
