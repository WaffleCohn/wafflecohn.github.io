import React from 'react';

import {NewTabLink as A} from '../Utils.js';

export default {
    'title': 'Egenda',
    'content': (
        <div>
            <p>Egenda is an app for iOS and Android that helps students quickly and easily manage all of their assignments, projects, quizzes, and tests. Since its release in August 2016, Egenda has been downloaded over 500,000 times and managed over 2 million assignments.</p>
            <p>Egenda has reached the Top 50 Education app on the US App Store and has been featured on KLIF News, Plano Star Courier, and the Texas Jewish Post.</p>
            <div className="scrolling-carousel">
                <img src="/img/egenda/egenda_ad_post.png" alt="Egenda introduction and explanation" />
                <img src="/img/egenda/classes_view.png" alt="screenshot of a student's classes in the app" />
                <img src="/img/egenda/schedule_view.png" alt="screenshot of a student's schedule in the app" />
                <img src="/img/egenda/assignment_view.png" alt="screenshot of a student's assignment in the app" />
            </div>
            <div className="appstore-logo-container">
                <A href="https://itunes.apple.com/us/app/egenda-school-planner-assistant/id1142359153?mt=8">
                    <img className="appstore-logo" alt='Get it on the App Store' src="/img/AppStoreBadge.svg" />
                </A>
                <A href='https://play.google.com/store/apps/details?id=studios.gr8bit.schoolmanager&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                    <img className="appstore-logo" alt='Get it on Google Play' src='/img/google-play-badge.png' />
                </A>
            </div>
        </div>
    )
};