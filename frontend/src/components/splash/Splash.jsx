import React from 'react';
import Footer from '../footer/Footer';
import Koko from '../koko/Koko';
import kokoHappy from '../../assets/koko-happy.png';
import kokoDelivery from '../../assets/koko-delivery.png';
import kokoStats from '../../assets/koko-tracker.png';
import kokoHome from '../../assets/koko-home.gif';
import kokoDemo from '../../assets/koko-demo.gif';
import GitHub from '../../assets/github_logo.png';

const Splash = () => {
  return (
    <div className='main-splash-container'>
      <div className='koko-picture'>
        <div className='meet-koko'>
          <h3 className='header-spacing'>
            Hi there, I'm <span>Koko</span> ...
          </h3>
          <p>
            Your new <span>virtual,</span> mental health buddy!
          </p>
        </div>
        <div className='arrow-down'></div>
        <div className='koko-splash-container'>
          <Koko className='scaled' />
        </div>
      </div>
      <div className='who-is-koko'>
        <h3>Who is Koko?</h3>
      </div>
      <div className='splash-main-contents'>
        <div className='splash-side-content'>
          <div className='splash-img'>
            <img src={kokoHappy} alt='' />
          </div>
          <div className='splash-side-content-text'>
            <h3>
              Koko is your mental health accountability partner. Koko's goal is
              to facilitate healthier mental wellness by encouraging healthy
              habits such as mood tracking, goal setting, and journaling. Koko
              allows users to set personal goals for themselves, creating a safe
              space of accountability towards a brighter and healthier future.
            </h3>
          </div>
        </div>

        <div className='splash-side-content'>
          <div className='splash-side-content-text'>
            <h3>
              After creating an account and logging in, users will be greeted by
              Koko the Cat. The user will have opportunities to track their
              habits and form new ones. By completing goals or interacting with
              widgets, Koko's friendship bar will grow and thrive.
            </h3>
          </div>
          <div className='splash-img splash-gif'>
            <img src={kokoHome} alt='' />
          </div>
        </div>

        <div className='splash-side-content'>
          <div className='splash-img splash-gif'>
            <img src={kokoDemo} alt='' />
          </div>
          <div className='splash-side-content-text'>
            <h3>
              The home page will also display a visual of the users past
              history. This will include a colorgraph on the users mood over
              time, as well as a color-dynamic counter to show how many goals
              the user has completed and how many.
            </h3>
          </div>
        </div>
        <div className='splash-banner'>
          <div>
            While the home page will show a overview of recent activity, users
            can also go through the history page to view an interactive calendar
            that will show the users activity by day from the very beginning.
          </div>
        </div>
        <div className='creator-main-container'>
          <h3>Meet the Creators of Koko!</h3>
          <div className='creators-content'>
            <div className='creator-container'>
              <h5>Stella Kang</h5>
              {/* <div className='creator-photo-container'></div> */}
              <div className='creator-text-container'>
                <p>
                  "While we've mad significant strides in normalizing the
                  discussion of mental health wellness, we felt that there was
                  still a void for affordable, user-friendly tools to help
                  promote and sustain healthy self-care habits. It was a thrill
                  to create something that will help fill that gap!"
                </p>
                <a target='_blank' href='https://github.com/stella-kang'>
                  <img src={GitHub} />
                </a>
              </div>
            </div>
            <div className='creator-container'>
              <h5>Victor He</h5>
              {/* <div className='creator-photo-container'></div> */}
              <div className='creator-text-container'>
                <p>
                  "Mental health is a topic that still heavily stigmatized thus
                  we built this personalized app with the intention of helping
                  others. We want our users to have the ability to monitor how
                  they feel and reach out for help if they notice a negative
                  trend. We hope that Koko can create a safe space for our users
                  so they can live their lives to the fullest!"
                </p>
                <a target='_blank' href='https://github.com/VictorHeDev'>
                  <img src={GitHub} />
                </a>
              </div>
            </div>
            <div className='creator-container'>
              <h5>Mansoo Kim</h5>
              {/* <div className='creator-photo-container'></div> */}
              <div className='creator-text-container'>
                <p>
                  "When we decided to make a mental health wellbeing app, I knew
                  we needed a cat. My cat Minnie is my IRL mental health buddy,
                  and I realized Koko could be my digital mental health buddy. I
                  hope everyone can befriend Koko and work toward building a
                  healthier lifestyle!"
                </p>
                <a target='_blank' href='https://github.com/mansookim'>
                  <img src={GitHub} />
                </a>
              </div>
            </div>
            <div className='creator-container'>
              <h5>Emmay Alam</h5>
              {/* <div className='creator-photo-container'></div> */}
              <div className='creator-text-container'>
                <p>
                  "Especially after COVID, when people have had more time to
                  reflect, I think the ability to quickly journal throughout the
                  day, being motivated by befriending a cat, is a pretty
                  wonderful thing to have. Koko definitely felt like an amazing
                  way to be that outlet for people and it was a pleasure to work
                  on them!"
                </p>
                <a target='_blank' href='https://github.com/Emmay-Alam'>
                  <img src={GitHub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Splash;
