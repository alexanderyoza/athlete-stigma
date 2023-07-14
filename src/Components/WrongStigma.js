import React from 'react';
import '../Styles/Section.css';
import img from '../assets/wrongstigma.png';

function WrongStigma() {
  return (
    <div className='section'>
        <div className='image-side'>
            <img src={img} alt='why is this stigma wrong' />
        </div>
        <div className='blurb-side'>
            <div className='blurb-title'>
                Why is this Stigma wrong?
            </div>
            <div className='blurb-content'>
                Although it's been preached across athletics that to be a winner you
                can’t show emotions or weakness, the reality is that expressing emotions
                and allowing others to know that you are struggling makes you mentally
                strong. Depression and mental illness do not make you a weak or
                underperforming athlete. This can be seen as some of the top athletes
                in their respective sports have shared their struggles with mental health
                issues, and it didn't make them any less of a champion. At the 2020 Tokyo
                Olympics, athletes Simone Biles, Michael Phelps, and Naomi Osaka all shared
                their struggles with depression and suicidal thoughts (Knight, 2021). These
                athletes at the highest possible level all have dealt with depression and
                mental illness, and no age, skill level, or sport is immune to this disease.
                It is incredibly widespread and cannot be something we are ashamed of or
                judge others for.
            </div>
            <div className='blurb-content'>
                Additionally, it is important to allow your mind to 
                heal the same way you would allow your body to heal 
                if you had an injury or disorder. The world still views 
                mental illnesses as less important or less serious than physical 
                illnesses. Both should be equally viewed and cared for accordingly. At 
                the Tokyo Olympics, Simone Biles decided to withdraw from many gymnastics 
                events, sharing that she chose to take a break in order to “not jeopardize 
                her health and wellbeing” (Knight, 2021). Just like bodily illnesses and 
                injuries, mental illnesses need time to heal. 
            </div>
        
        </div>
    </div>
  )
}

export default WrongStigma