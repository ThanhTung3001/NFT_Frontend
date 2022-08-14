import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

export default function Team() {
  const { t } = useTranslation();
  const [index,setIndex] =useState(0);
  return (
    <div id="team">
      <div id="background-layer">
        <Header />
        <div id="banner" class="w-100  ">
          <div id="banner-content" class="w-100 h-100 d-flex flex-column justify-content-center">
            <div class="container d-block">
              <div id="banner-header" class="text-center mb-4">WHY YOU MIGHT LOVE IT HERE</div>
              <div id="banner-text" class="text-center">Best teams. Biggest impact. Nothing in your way.</div>
            </div>
          </div>
        </div>

        <div class="title">OUR TEAM</div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner container d-block">
            <div class="carousel-item active">
              <div class="content-ourteam">
                <div class="content-ourteam-detail">
                  <img src="images/team/Rectangle 143.png" alt="img error" />
                  <div id="name">Johan P.</div>
                  <div id="job-title">CG Supervisor</div>
                </div>
                <div class="content-ourteam-detail">
                  <img src="images/team/Rectangle 143-1.png" alt="img error" />
                  <div id="name">CuongCG</div>
                  <div id="job-title">Art Director</div>
                </div>
                <div class="content-ourteam-detail">
                  <img src="images/team/Rectangle 143-2.png" alt="img error" />
                  <div id="name">Zaire Donin</div>
                  <div id="job-title">Lead 3D Character</div>
                </div>
                <div class="content-ourteam-detail">
                  <img src="images/team/Rectangle 143-3.png" alt="img error" />
                  <div id="name">Edward S.</div>
                  <div id="job-title">Storyboard Artist</div>
                </div>
                <div class="content-ourteam-detail">
                  <img src="images/team/Rectangle 143-4.png" alt="img error" />
                  <div id="name">Kadin S.</div>
                  <div id="job-title">Lead 2D Environment</div>
                </div>
                <div class="content-ourteam-detail">
                  <img src="images/team/Rectangle 143-5.png" alt="img error" />
                  <div id="name">Henry F.</div>
                  <div id="job-title">Lead Color</div>
                </div>
                <div class="content-ourteam-detail">
                  <img src="images/team/Rectangle 143-6.png" alt="img error" />
                  <div id="name">Toan Tr.</div>
                  <div id="job-title">Rigger</div>
                </div>
                <div class="content-ourteam-detail">
                  <img src="images/team/Rectangle 143-7.png" alt="img error" />
                  <div id="name">Long Ng.</div>
                  <div id="job-title">Lead UI/UX</div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="content-ourteam">
                <div class="content-ourteam-detail">
                  <img src="images/team/Rectangle 143-8.png" alt="img error" />
                  <div id="name">Dung H.</div>
                  <div id="job-title">FX</div>
                </div>
                <div class="content-ourteam-detail">
                  <img src="images/team/Group 128.png" alt="img error" />
                  <div id="name">Uyen V.</div>
                  <div id="job-title">Concept Artist</div>
                </div>
                <div class="content-ourteam-detail">
                  <img src="images/team/Group 127.png" alt="img error" />
                  <div id="name">Nhung T.</div>
                  <div id="job-title">Producer</div>
                </div>
                <div class="content-ourteam-detail">
                  <img src="images/team/Group 129.png" alt="img error" />
                  <div id="name">Dung Ng.</div>
                  <div id="job-title">Layout</div>
                </div>
                <div class="content-ourteam-detail">
                  <img src="images/team/Rectangle 143-9.png" alt="img error" />
                  <div id="name">Thuan Ng.</div>
                  <div id="job-title">Animator</div>
                </div>
                <div class="content-ourteam-detail">
                  <img src="images/team/Rectangle 143-10.png" alt="img error" />
                  <div id="name">Nhut Ng.</div>
                  <div id="job-title">Enviroment Artist</div>
                </div>
                <div class="content-ourteam-detail">
                  <img src="images/team/Rectangle 143-11.png" alt="img error" />
                  <div id="name">Thang Duong</div>
                  <div id="job-title">Character Artist</div>
                </div>
                <div id="andMore">AND MORE...</div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" style={{
                    display:"block "
                  }} aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls"  role="button" data-slide="next">
            <span class="carousel-control-next-icon" style={{
                    display:"block "
                  }} aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="container d-block">
          <div class="title">OUR ADVISORS</div>
          <div class="content-ourAdvisors">
            <div id="carousel-advisor" class="carousel slide mb-5" data-ride="carousel" data-interval="false">
              <div class="carousel-inner text-center">
                <div class="carousel-item  text-center active">
                  COMING SOON
                </div>
                <div class="carousel-item text-center ">
                  COMING SOON
                </div>
                <div class="carousel-item text-center ">
                  COMING SOON
                </div>
                <ol class="carousel-indicators">
                  <li data-target="#carousel-advisor" data-slide-to="0" class="active"></li>
                  <li data-target="#carousel-advisor" data-slide-to="1"></li>
                  <li data-target="#carousel-advisor" data-slide-to="2"></li>
                </ol>
              </div>
            </div>
            {/* <div class="content-ourAdvisors-element">
            <img id="image-ourAdvisors" src="images/z3616430533416_431d5bb522ae7923d41a62023f21d7de.jpg" alt="img error" />
            <div class="content-ourAdvisors-detail">
              <div class="text" >
                <div class="name">Name</div>
                <div class="job-title">Job titles</div>
                <div class="description">Description</div>
              </div>
              <div class="icon-content">
                <img src="images/Social/Twitter.png" alt="twitter" />
                <img src="images/Social/Facebook.png" alt="facebook" />
              </div>
            </div>
          </div>

          <div class="content-ourAdvisors-element">
            <img id="image-ourAdvisors" src="images/z3616430533416_431d5bb522ae7923d41a62023f21d7de.jpg" alt="img error" />
            <div class="content-ourAdvisors-detail">
              <div class="text" >
                <div class="name">Name</div>
                <div class="job-title">Job titles</div>
                <div class="description">Description</div>
              </div>
              <div class="icon-content">
                <img src="images/Social/Twitter.png" alt="twitter" />
                <img src="images/Social/Facebook.png" alt="facebook" />
              </div>
            </div>
          </div>

          <div class="content-ourAdvisors-element">
            <img id="image-ourAdvisors" src="images/z3616430533416_431d5bb522ae7923d41a62023f21d7de.jpg" alt="img error" />
            <div class="content-ourAdvisors-detail">
              <div class="text" >
                <div class="name">Name</div>
                <div class="job-title">Job titles</div>
                <div class="description">Description</div>
              </div>
              <div class="icon-content">
                <img src="images/Social/Twitter.png" alt="twitter" />
                <img src="images/Social/Facebook.png" alt="facebook" />
              </div>
            </div>
          </div> */}
          </div>
          <div id="concept-art-by">CONCEPT ARTISTS</div>
          <div id="content-concept-art-by">
            <div id="concept-art-by-image">
              <img src="images/Ellipse 24.png" alt="img error" />
              <div id="culu-art-station">CULU ARTWORK</div>
            </div>
            <div id="concept-art-by-text">
              <div class="px-5 text-left">We encourage artists to use their talents where they have the most impact. In addition to helping us stay small, they may have the opportunity to work on a project they weren't originally supposed to work with. Of course, our artists always are consulted first and will take an active role in the decision-making processes. As part of our main Concept artists, congratulations. We thank you for your invaluable contribution. May these contributions pave the way for our game’s success.
                <br></br>
                <br></br>
                Your colleagues trust you to do what is best and appropriate for our promising game, Rise of Immortals.
              </div>
              <div class="pl-5 mt-4">
                <a id="some-of-the-products" target="_blank" href="https://www.artstation.com/tichvi">Some of the products we have made.</a>
              </div>
            </div>
          </div>
         
          <div id="cg3d-container" class="mb-5 pb-5">
            <div id="carousel-cg3d" class="carousel slide mb-5" data-ride="carousel" data-interval="false">
              <div class="carousel-inner text-center pb-5">
                <div class="carousel-item first active">
                <div id="graphic-engineer-container" class="d-flex">
                <div id="graphic-engineer-title" class="text-left d-flex align-items-center">
                CG3D  STORY
                </div>
                <div id="graphic-engineer-img" className="bg1_story">
                  <img src="images/graphic_engineer.png"/>
                </div>
                </div>
                  <div class="d-flex">
                    
                    <div id="content-left" class="pr-4">
                      <p class="cg3d-text">
                        We believe that fun and beautiful games will become a source of income
                        for anyone, anywhere.
                        <br />
                        Our mission at CG3D Studios is to bring Rise of Immortals, other Blockchain
                        games, and 3D system art at the top for emerging technologies and global
                        adoption.
                        <br />
                        CG3D Studios was founded by people with vast experience in the industry
                        and are comprised of people from different fields of expertise.
                      </p>
                      <p class="cg3d-text">
                        Our team focuses on work efficiency, and optimum performance while also
                        promoting creativity and growth through a professional working
                        environment.
                      </p>
                      <p class="cg3d-text">
                        CG3D Studios was established in Vietnam and quickly had members in
                        France and Finland
                      </p>
                      <p class="cg3d-text">
                        First-class Game Design and Development
                      </p>
                      <p class="cg3d-text">
                        All of our game content is designed and developed from scratch, i.e., from
                        conceptual designs to 3D character modeling and animations.
                      </p>
                      <p class="cg3d-text">
                        We believe that focusing on the smallest details will help players to have a great experience.
                      </p>
                    </div>
                    <div id="content-right" class="pl-4">
                      <p class="cg3d-text">
                        Our 3 design criteria: Good image quality, financial balance and
                        crosschain-platform.
                      </p>
                      <p class="cg3d-text">
                        We built the game around these fundamental values which we believe is
                        the next generation, the next era.
                      </p>
                      <p class="cg3d-text">
                        The future is already here and it's not just even distributed yet. We need
                        more adventurers, builders, thinkers and missionaries to make it well known
                        around the world
                      </p>
                      <p class="cg3d-text">
                        We believe that the best teams are comprised of diverse individuals all working towards a single goal.
                      </p>
                      <p class="cg3d-text">
                        Our journey won’t be easy. It’s going to be dark. It’ll be cold. But eternal glory and recognition await for those that walk the road with us.
                      </p>
                      <p class="cg3d-text">
                        At Rise of Immortals you’ll help build things the world has never seen and conduct experiments that blend gaming, economics, and even political science.
                        We have been tirelessly building Rise of Immortals and our goal is to make it the #1 Blockchain game. Now it's time to make it one of the best games
                        in the virtual world.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item position-relative">
                <div id="graphic-engineer-container" class="d-flex">
                <div id="graphic-engineer-title" class="text-left d-flex align-items-center">
                A GRAPHICS ENGINEER'S STORY
                </div>
                <div id="graphic-engineer-img" className="bg1_story">
                  <img src="images/bg2_story.png"/>
                </div>
                </div>
                  <div class="d-flex">
                    
                    <div id="content-left" class="pr-4">
                      <p class="cg3d-text">
                      What does typical day-to-day at Rise of Immortals look like for an engineer, or for any other position? You've undoubtedly thought about that if you've ever considered a job with us. And for good reason—you can only squeeze so much information into a Notice of "available positions" that is short in length.
                        <br />
                        Of course, some facets of a job are common to everybody. Depending on your area of specialization, as engineers, we design databases, identify clients, write code, and fiddle with curly brackets. That holds true for Rise of Immortals just as much as it does for other companies. 
                        <br />
                    
                      </p>
                      <p class="cg3d-text">
                      The unique aspect of working at Rise of Immortals is that no matter what position you've been hired for, you're already in it because...
                      <br/>
                      1. You are an expert in your field.
                      <br/>
                      2. You don't hesitate to apply your exceptional expertise, and
                      <br/>
                      3. Your dedication to collaboration.
                      </p>
                     
                    </div>
                    <div id="content-right" class="pl-4">
                      <p class="cg3d-text">
                      What do we mean when we say we're seeking cooperative types? Practically speaking, what we're saying is that you value helping others, put the needs of your team before your own desires, and are never reluctant to ask questions. In addition to having a genuine regard for your teammates and coworkers, being amiable is crucial.
                      <br/>
                      Years spent working for the company are not taken into account by Rise of Immortals members when deciding who to listen to. You have the full support of your team and the organization from day one, and you are expected to actively contribute to everyone's success.
                      <br/>
                      You won't be required to adhere to any corporate hierarchies or layers, and even if you stroll all the way down the office hallway, you won't encounter any red tape. Although we prioritize speed, rigid formalities would result in a slightly more predictable structure. Giving people control over their job and the resources they need to work independently and quickly is the best way to achieve this goal.
                      </p>
                   
                    </div>
                  </div>
                </div>
                <div class="carousel-item position-relative">
                <div id="graphic-engineer-container" class="d-flex">
                <div id="graphic-engineer-title" class="text-left d-flex align-items-center">
                FREEDOM AND RESPONSIBILITY
                </div>
                <div id="graphic-engineer-img" className="bg1_story">
                  <img src="images/bg3_story.png"/>
                </div>
                </div>
                  <div class="d-flex">
                    
                    <div id="content-left" class="pr-4">
                      <p class="cg3d-text">
                      What strikes us most about the people at CG3D Studios is that everyone can contribute to the team's efforts and is strongly encouraged to do so. While we are all experts in our fields, we also have to step out of our comfort zones and work as generalists, which enables us to broaden our understanding of new concepts. Some artists in other studios don’t focus on the smallest of details. 
                     
                        <br />
                        CG3D Studios was founded by people with vast experience in the industry
                        and are comprised of people from different fields of expertise.
                      </p>
                      <p class="cg3d-text">
                      To avoid situations like this, CG3D Studios meticulously creates even the smallest elements, like shoelaces. In our company, we have two artists on every team who create the individual parts of the game. So rest assured that no details are done haphazardly. Consequently, three programmers on every team share coding chores and collaborate with our designers to provide the finest gaming experience possible.
                      </p>
                     
                    </div>
                    <div id="content-right" class="pl-4">
                      <p class="cg3d-text">
                      Making the best game to be played in a decade is our major objective. To achieve this, we must have mutual respect for one another and be mindful of what the other team members are working on.  Although we consult with everyone’s opinions before making a decision, the team member who is most knowledgeable about the subject at hand always has the final word. For example, we can all make suggestions about the looks of some character, but the artist who created that character always makes the final call.
                      </p>
                      <p class="cg3d-text">
                      On the flip side of freedom, there's always the responsibility that comes with it. In difficult times, everyone still has to pull the same rope, which is not always easy. Individuals and teams are small, so there's no room for people to just stand on the sidelines and wait for someone to tell them what to do. In order to provide clients with the optimal product experience, we must also identify common ground between the approaches of individuals and teams.
                      </p>
                     
                    </div>
                  </div>
                </div>
 
                <a class="carousel-control-prev" style={{display:index>0?'flex':'none'}} onClick={()=>{
                    setIndex(prev=>prev-1);
                    //console.log(index)
                  }}  href="#carousel-cg3d" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" style={{
                    display:"flex"
                  }}  aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" style={{display:index>=2?'none':'flex'}} href="#carousel-cg3d" onClick={()=>{
                    setIndex(prev=>prev+1);
                   // console.log(index)
                  }} role="button" data-slide="next">
                  <span class="carousel-control-next-icon"  style={{
                    display:"block "
                  }} aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
                <ol class="carousel-indicators">
                  <li data-target="#carousel-cg3d" data-slide-to="0" class="active"></li>
                  <li data-target="#carousel-cg3d" data-slide-to="1"></li>
                  <li data-target="#carousel-cg3d" data-slide-to="2"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
