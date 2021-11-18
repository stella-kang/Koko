import React from 'react';
import Footer from '../footer/Footer';
import Koko from '../koko/Koko';
import kokoHappy from '../../assets/koko-happy.png';
import kokoDelivery from '../../assets/koko-delivery.png';
import kokoStats from '../../assets/koko-tracker.png';

const Splash = () => {
  return (
    <div className='main-splash-container'>
      <div className='koko-picture'>
        <div className='gradient'></div>
        <div className='meet-koko'>
          <h3>
            Meet <span>Koko</span>
          </h3>
          <p>
            Your new <span>virtual,</span> mental health buddy
          </p>
        </div>
      </div>
      <div className='who-is-koko'>
        <h3>Who is Koko?</h3>
      </div>
      <div className='splash-main-contents'>
        {/* <Koko /> */}

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
          <div className='splash-img'>
            <img src={kokoDelivery} alt='' />
          </div>
        </div>

        <div className='splash-side-content'>
          <div className='splash-img'>
            <img src={kokoStats} alt='' />
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
              <div className='creator-photo-container'></div>
              <div className='creator-text-container'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto architecto deserunt porro! Corrupti dolorum magni quam
                  fugit facilis maxime, ducimus molestias inventore impedit,
                  rerum eligendi? Voluptate tenetur sed beatae eaque.
                </p>
              </div>
            </div>
            <div className='creator-container'>
              <h5>Victor He</h5>
              <div className='creator-photo-container'></div>
              <div className='creator-text-container'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto architecto deserunt porro! Corrupti dolorum magni quam
                  fugit facilis maxime, ducimus molestias inventore impedit,
                  rerum eligendi? Voluptate tenetur sed beatae eaque.
                </p>
              </div>
            </div>
            <div className='creator-container'>
              <h5>Mansoo Kim</h5>
              <div className='creator-photo-container'></div>
              <div className='creator-text-container'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto architecto deserunt porro! Corrupti dolorum magni quam
                  fugit facilis maxime, ducimus molestias inventore impedit,
                  rerum eligendi? Voluptate tenetur sed beatae eaque.
                </p>
              </div>
            </div>
            <div className='creator-container'>
              <h5>Emmay Alam</h5>
              <div className='creator-photo-container'></div>
              <div className='creator-text-container'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto architecto deserunt porro! Corrupti dolorum magni quam
                  fugit facilis maxime, ducimus molestias inventore impedit,
                  rerum eligendi? Voluptate tenetur sed beatae eaque.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div>FAQ</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          beatae debitis error, provident, rerum, earum excepturi eligendi
          voluptatem rem officiis aliquam quisquam animi fugiat commodi? Maiores
          distinctio ab nesciunt eius.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          beatae debitis error, provident, rerum, earum excepturi eligendi
          voluptatem rem officiis aliquam quisquam animi fugiat commodi? Maiores
          distinctio ab nesciunt eius.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          beatae debitis error, provident, rerum, earum excepturi eligendi
          voluptatem rem officiis aliquam quisquam animi fugiat commodi? Maiores
          distinctio ab nesciunt eius.
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Splash;
