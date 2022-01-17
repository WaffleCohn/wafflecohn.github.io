import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import { NewTabLink as A } from '../Utils.js';

// TODO: alt text, short timelapse, pictures or demo of drawing
export default {
  title: 'Virtual Fence',
  content: (
    <div>
      <p>
        When pandemic struck and Carnegie Mellon moved its classes online for
        the rest of the semester, many of the school's oldest traditions were
        put on hold, such as our 70-year tradition of painting{' '}
        <A href="https://www.amusingplanet.com/2014/09/the-fence-of-carnegie-mellon-university.html">
          The Fence
        </A>
        . In order to help keep this tradition alive, I created{' '}
        <A href="http://www.paint-the-fence.com">paint-the-fence.com</A>, a
        virtual fence that anyone can paint from the comfort of their home.
      </p>
      <p>
        Over 7,000 people visited the site within a week of publishing it, and
        CMU even shared the Virtual Fence on their official social media
        accounts.
      </p>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/virtual-fence/fence_ad.png"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/virtual-fence/cool_fence.png"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/virtual-fence/landscape_fence.png"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  ),
};
