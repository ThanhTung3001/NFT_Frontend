import React, { useEffect, useState } from "react";
import './style.css';

export default function Video(props) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const playBtn = document.getElementById(props.id + 'play-btn');
    if(!playBtn) return;
    if (play) {
      playBtn.classList.add('display-none');
    } else {
      playBtn.classList.remove('display-none');
    }
  }, [play]);

  const handleClickPlay = () => {
    const videoEle = document.getElementById(props.id);
    if (!videoEle) return;
    if (!play) {
      videoEle.play();
      videoEle.setAttribute('controls', '');
    } else {
      videoEle.pause();
      videoEle.removeAttribute('controls');
    }
    setPlay(!play);
  };


  return (
    <div class="w-100 position-relative video-container" onClick={handleClickPlay}>
      <video {...props} class={props.class + " video"}>
        <source src={props.src} type={props.type} />
      </video>
      <div class="text-white position-absolute play-btn" id={props.id + 'play-btn'} >
        <i class="material-icons">{!play ? 'play_circle_outline' : 'pause_circle_outline'}</i>
      </div>
    </div>
  );
}
