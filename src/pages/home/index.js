import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Stores from '../../components/stores';
import Socials from '../../components/socials';
import Video from '../../components/video';
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { setFirstLoad } from "../../slices/app";

export default function Home() {
  const dispatch = useDispatch();
  const firstLoad = useSelector((state) => state.app.firstLoad);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (firstLoad) dispatch(setFirstLoad(false))
  }, [dispatch]);

  return (
    <div class="homepage">
      <div class="background-layer">
        <div className="layout_black_blur"></div>
        <Header />
        <div id="hero-background">
          <div class="container">
            <div class="title position-relative">
              <div class="position-absolute" id="sub-background-layer">
              </div>
              <div class="aaa-hero-base-strategy-game">
                AAA HERO-BASED
                <br />STRATEGY GAME
              </div>
              <div id="aaa-hero-base-strategy-game-detail">Powered by NFTs on the Ethereum blockchain</div>
              <div class="build">
                Build your base, expand your army, and earn Sapphire by
                <br />conquering enemy bases throughout Rise of Immortals.
              </div>
              <button id="btn-play-to-earn">
                Join Discord
              </button>
            </div>
          </div>
        </div>

        <div class="container d-block">
          <div class="download">
            <div class="download-content position-relative w-100">
              <img id="dynamon" class="position-absolute" alt="dynamon" src="images/Dynamon.png" />
              <div class="content">
                <div id="content-left">
                  <div class="earn-sapphire-and-other-in-game-resources">
                    {t('home.earn-sapphire-and-other-in-game-resources-1')}
                    <br />{t('home.earn-sapphire-and-other-in-game-resources-2')}
                  </div>
                  <Stores />
                </div>
                <div id="content-right">
                  <div class="">
                    Earn SAPPHIRE by winning battles, successfully defending your base, completing different challenges, climbing your way up on the leaderboards, and many more.
                    <br />
                    <br />Gold, Elixir, and Dark Elixir are additional in-game resources that your heroes and troops can steal from opponent&#039;s villages.
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div id="sponsor">Sponsor</div>
          <div id="up-comming">COMING SOON </div>
          <div id="see-the-latest-container">
            <div></div>
            <div id="see-the-latest-right">
              <div id="see-the-latest">SEE THE LATEST</div>
              <div id="to-stay-on-top">To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation</div>
              <div id="socials">
                <Socials />
              </div>
            </div>
          </div>
          <div id="based-battles-container">
            <div id="based-battles-content">
              <img src="images/Six head.png" alt="" style={{ transform: 'rotateY(180deg)' }} />
              <div id="based-battles-left">
                <div id="based-battles">
                  NFT-based Battles: Heroes and Land NFTs
                </div>
                <div id="rise-to-the-top">
                  Rise to the top with your NFTs and dominate the Leaderboards. As your climb up
                  the Leaderboard and your village improves, the stronger the enemies become. Build
                  and upgrade your village, customize and strengthen your troops, and build and improve
                  statues to become a strong contender and a force to be reckoned with.
                </div>
              </div>
            </div>
          </div>
          <div id="lead-you-container">
            <div id="lead-you-left">
              <div id="lead-you">Lead you Clan to the <br /> Victory</div>
              <div id="hero-has-heard">Hero has heard our call! Join the war of the Heroes and conquer this battle through Rise of Immortals. Customize your army, build your defense, and crush your opponents. Using the power of the Heroes, strike your enemies and forge a legacy by conquering their lands and destroying their villages.</div>
            </div>
            <div id="lead-you-right">
              <img src="images/Clan.png" alt="" />
            </div>
          </div>
          <div id="launch-calendar">
            <div>
              <img src="images/Launch.png" alt="" style={{ transform: 'rotateY(180deg) translateY(78px)' }} />
            </div>
            <div>
              <div id="launch-container">
                <div id="first-row" class="d-flex justify-content-end">
                  <div id="first-row-right">
                    <div id="launch">Launch is just the beginning</div>
                    <div id="rise-of">
                      Rise of Immortals has been constantly evolving to offer more user-friendly, more consistent and more fun online experiences for.
                    </div>
                  </div>
                </div>
              </div>
              {/* <img src="images/Component 4.png" alt="error"/> */}
              <div id="calendar-container">
                <div id="first-row">
                  <div id="calendar-bar">
                    <div id="line-1" class="line"></div>
                    <div id="line-2" class="line"></div>
                    <div id="line-3" class="line"></div>
                    <div id="line-4" class="line"></div>
                    <div id="line-5" class="line"></div>
                    <div id="line-6" class="line"></div>
                  </div>
                </div>
                <div id="second-row">
                  <div id="calendar">
                    <div id="line-1" class="line">
                      <div class="stage">Q1 2022</div>
                      <div class="stage-title">Game Concept<br /> Release</div>
                    </div>
                    <div id="line-2" class="line">
                      <div class="stage">Q2 2022</div>
                      <div class="stage-title">Gamrt & Graphics<br /> Released</div>
                    </div>
                    <div id="line-3" class="line">
                      <div class="stage">Q3 2022</div>
                      <div class="stage-title">Community Launch</div>
                    </div>
                    <div id="line-4" class="line">
                      <div class="stage">Q4 2022</div>
                      <div class="stage-title">Public Beta Launch</div>
                    </div>
                    <div id="line-5" class="line">
                      <div class="stage">Q1 2023</div>
                      <div class="stage-title">Game Launch</div>
                    </div>
                    <div id="line-6" class="line">
                      <div class="stage">Q2 2023</div>
                      <div class="stage-title">Tournament Esports</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="video-slide">
            <div id="video-title">Videos</div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
              <div class="carousel-inner">
                <div key="element" class={`carousel-item position-relative active`}>
                  <div class="d-flex">
                    <div class="w-50 p-5">
                      <Video id="video-1" src="videos/Zeus_Clip10s.mp4" type="video/mp4" width="100%" loop />
                    </div>
                    <div class="w-50 p-5 position-relative">
                      <Video class="fake-video" id="video-1" src="videos/Zeus_Clip10s.mp4" type="video/mp4" width="100%" loop />
                      <div class="video-upcomming d-flex align-items-center">COMING SOON </div>
                    </div>
                  </div>
                </div>
                <div key="element" class={`carousel-item position-relative`}>
                  <div class="d-flex">
                    <div class="w-50 p-5 position-relative">
                      <Video class="fake-video" id="video-1" src="videos/Zeus_Clip10s.mp4" type="video/mp4" width="100%" loop />
                      <div class=" d-flex align-items-center video-upcomming text-center" >COMING SOON </div>
                    </div>
                    <div class="w-50 p-5 position-relative">
                      <Video class="fake-video" id="video-1" src="videos/Zeus_Clip10s.mp4" type="video/mp4" width="100%" loop />
                      <div class=" d-flex align-items-center video-upcomming text-center" >COMING SOON </div>
                    </div>
                  </div>
                </div>
                <div key="element" class={`carousel-item position-relative`}>
                  <div class="d-flex">
                    <div class="w-50 p-5 position-relative">
                      <Video class="fake-video" id="video-1" src="videos/Zeus_Clip10s.mp4" type="video/mp4" width="100%" loop />
                      <div class=" d-flex align-items-center video-upcomming text-center" >COMING SOON </div>
                    </div>
                    <div class="w-50 p-5 position-relative">
                      <Video class="fake-video" id="video-1" src="videos/Zeus_Clip10s.mp4" type="video/mp4" width="100%" loop />
                      <div class=" d-flex align-items-center video-upcomming text-center" >COMING SOON </div>
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" style={{
                    display:"block "
                  }} aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" style={{
                    display:"block "
                  }} aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
              </div>
            </div>
          </div>
          <div id="vision-container">
            <div class="d-flex justify-content-center align-items-center">
              <div id="vision-content">
                <div id="carousel-vision-content" class="carousel slide mb-5" data-ride="carousel" data-interval="false">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div id="vision-title">Vison</div>
                      <div class="carousel-item-detail">
                        <div class="d-flex align-items-center">RISE of IMMORTALS aims o catch the wave to follow the trends of
                          <br /> tomorrow and do the right thing about P2E games.
                          <br />
                          <br />
                          We aim to sick with our name and IMMORATLIZE our game to co-exist with other big names inside and outsite the crypto word.</div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div id="vision-title">Mission</div>
                      <div class="carousel-item-detail">
                        <div class="d-flex align-items-center">
                          We will revolutionize gaming industry and aim to build the best gaming experience to players all over the world.
                          <br />
                          <br />
                          Satisfying your hunger for entertainment, fame and glory while rewarding you generous bounty through crypto industry.</div>
                      </div>
                    </div>
                    {/* <a class="carousel-control-prev" href="#carousel-vision-content" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-vision-content" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a> */}
                    <ol class="carousel-indicators">
                      <li data-target="#carousel-vision-content" data-slide-to="0" class="active"></li>
                      <li data-target="#carousel-vision-content" data-slide-to="1"></li>
                    </ol>
                  </div>
                </div>
                <div class="text-center quote position-relative">
                  <span id="vision-quote-start">"</span>
                  <span>Are you ready to be part of our success or you'll just ignore this
                    <br />once in a lifetime opportunity and get left behind?</span>
                  <span id="vision-quote-end">"</span>
                </div>
              </div>
              <img class="ml-5" src="images/Char_Builder_041.png" width="400px" height="auto" alt="" />
            </div>
          </div>
          <div id="register-container">
            <div id="register-content">
              <div id="register-left">
                <img src="images/Char_Builder.png" alt="" />
              </div>
              <div id="register-right">
                <div id="register">
                  Pre register to stay up to date
                </div>
                <div id="sign-up">
                  Sign up to our newsletter to reveive development updates, token,
                  <br />and NFT drops, and exclusive promotions.
                </div>
                <div class="mb-3">
                  <div id="input-container" class="input-group  rounded-2">
                    <input type="email" class="form-control bg-transparent text-white" placeholder="Enter your email" />
                    <div class="input-group-append  rounded-2">
                      <span class="input-group-text" id="basic-addon2">Join us now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
