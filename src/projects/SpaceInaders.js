import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import { NewTabLink as A } from '../Utils.js';

// TODO: alt text, demo video, playable link
export default {
  title: 'Space Invaders 2018',
  content: (
    <div>
      <p>
        Space Invaders 2018 allows gamers to use their phone as a motion
        controller for the classic game. By visiting our website, players can
        link their phones to their computers. Through a combination of tilting
        the phone left and right and tapping the phone screen, the players can
        shoot at alien invaders while dodging incoming fire. As a bonus,
        defeated aliens periodically drop letters that can be collected to spell
        "PennApps" for extra points.
      </p>
      <p>
        Check out our devpost page from the hackathon{' '}
        <A href="https://devpost.com/software/space-invaders-2018-heojki">
          here
        </A>
      </p>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/space-invaders/connection_screenshot.png"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/space-invaders/gameplay_with_phone.png"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  ),
};
