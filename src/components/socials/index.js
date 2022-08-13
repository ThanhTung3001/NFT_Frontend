import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Stores() {
  return (
    <div class="socials">
      <div class="socials-title">Follow Rise of Immortals on</div>
      <div>
        <Link  to="https://t.me/RiseofImmortalsOfficial"><img src="images/Social/Telegram.png" alt="telegram" /></Link>
        <Link  to="" data-toggle="tooltip" data-placement="top" title="COMING SOON "><img src="images/Social/Facebook.png" alt="facebook" /></Link>
        <Link  to="https://www.instagram.com/riseofimmortals/"><img src="images/Social/Instagram.png" alt="instagram" /></Link>
        <Link  to="https://twitter.com/ImmortalsRise"><img src="images/Social/Twitter.png" alt="twitter" /></Link>
        <Link  to="" data-toggle="tooltip" data-placement="top" title="COMING SOON "><img src="images/Social/Discord.png" alt="discord" /></Link>
        <Link  to="https://www.youtube.com/channel/UCpZSWKEYHAfPaoG5LsFm7Cw" ><img src="images/Social/Youtube.png" alt="youtube" /></Link>
        <Link  to="" data-toggle="tooltip" data-placement="top" title="COMING SOON "><img src="images/Social/7.png" alt="medium" /></Link>
        <Link  to="" data-toggle="tooltip" data-placement="top" title="COMING SOON "><img src="images/Social/8.png" alt="" /></Link>
      </div>
    </div>
  );
};
