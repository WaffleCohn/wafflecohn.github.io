import React from 'react';

import {NewTabLink as A} from '../Utils.js';

export default {
    'title': 'PhotoSlide',
    'content': (
        <div>
            <p>Save yourself the cost of an expensive digital photo frame by turning your iPad into one.</p>
            <p>PhotoSlide transforms your iPad into a viewer for all of your photos so you can watch a slideshow of your memories whenever you want. Simply select one or more albums and then watch as your iPad becomes a beautiful photo frame complete with a clock and transitions.</p>
            <div className="scrolling-carousel">
                <img src="/img/photo-slide/ipad_with_photo.png" alt="An iPad running a slideshow" />
                <img src="/img/photo-slide/toby_screenshot.png" alt="Screenshot of a slideshow in the app" />
                <img src="/img/photo-slide/settings_screenshot.png" alt="Screenshot of the settings page in the app" />
            </div>
            <div class="appstore-logo-container">
                <A class="appstore-logo" href="https://apps.apple.com/us/app/photoslide-digital-photo-frame/id1278754073?ls=1">
                    <img class="appstore-logo" alt='Get it on the App Store' src="/img/AppStoreBadge.svg" />
                </A>
            </div>
        </div>
    )
};