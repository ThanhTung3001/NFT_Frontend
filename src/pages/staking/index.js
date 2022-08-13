import React from "react";
import { useTranslation } from 'react-i18next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

export default function Staking() {
  const { t } = useTranslation();
  return (
    <div id="staking">
      <div id="background-layer">
        <Header />
        <div class="container d-block">

          <div id="land-nfts-container">
            <div id="land-nfts-content">
              <img src="images/Asset 8 2.png" alt="" />
              <div id="land-nfts-left">
                <div id="land-nfts">
                  OWN YOUR <br></br> OLYMPUS LAND NFTs
                </div>
                <div id="land-nfts-text">
                  Own your Land, Hero and Statue NFTs <br></br> which can be played in the game once Rise of Immortals is
    launched.
                </div>
                <button id="land-nfts-button" type="button " >Owning Tutorial</button>
              </div>
            </div>
          </div>

          <div class="content">
            <div id="content1">
              <div id="content1-text">
                <div id="text1">Land Staking Rewards Now Available</div>
                <div id="text2">Stake your Land NFT to earn passive rewards.</div>
              </div>
              <div id="content1-btn" >
                <button id="content1-button" type="button " >Stake Land</button>
              </div>
            </div>
          </div>

          <div class="last-content mt-5 my-3">
            <div class="d-flex w-100 align-items-center flex-row-reverse">
              <div class="position-relative img-explain px-4 pt-4 pb-5">
                <div class="content2-text-detail px-4 pt-4">
                Land NFTs – Land is the primary NFT asset in Rise of Immortals.
It is the primary requirement in building a village and training an
army.
                </div>
                <button class="content2-button position-absolute" type="button " >Coming soon</button>
              </div>
              <div class="position-relative container-img d-flex flex-column align-items-center" id="last-content-1">
                <img src="images/281886969_5124306397645497_3470591421062792137_n 2.png" alt="" />
                <div class="position-absolute text-center last-content-image-text">Land NFTs</div>
              </div>
            </div>
          </div>
          <div class="last-content my-3">
            <div class="d-flex w-100 align-items-center flex-row-reverse">
              <div class="position-relative img-explain px-4 pt-4 pb-5">
                <div class="content2-text-detail px-4 pt-4">
                Hero NFTs – Heroes are super-troops that support your army in
offensive fights and help protect your village from assaults.
                </div>
                <button class="content2-button position-absolute" type="button " >Coming soon</button>
              </div>
              <div class="position-relative container-img d-flex flex-column align-items-center" id="last-content-2">
                <img src="images/Char_Poseidon_02 2.png" alt="" />
                <div class="position-absolute text-center last-content-image-text">Hero NFTs</div>
              </div>
            </div>
          </div>
          <div class="last-content my-3">
            <div class="d-flex w-100 align-items-center flex-row-reverse">
              <div class="position-relative img-explain px-4 pt-4 pb-5">
                <div class="content2-text-detail px-4 pt-4">
                Statue NFTs – Statues enhance the efficiency of your settlement by giving your troops and resources beneficial boosts.
                </div>
                <button class="content2-button position-absolute" type="button " >Coming soon</button>
              </div>
              <div class="position-relative container-img d-flex flex-column align-items-center" id="last-content-3">
                <img src="images/Decor_ZeusStatue 3.png" alt="" />
                <div class="position-absolute text-center last-content-image-text">Statue NFTs</div>
              </div>
            </div>
          </div>
          <div class="py-5"></div>
        </div>
        <br/>
        <br/>
        <br/>
        <Footer />
      </div>
    </div>
  );
}
