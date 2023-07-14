import React from 'react';
import '../Styles/Section.css';
import img from '../assets/whystigma.png'

function WhyStigma() {
  return (
    <div className='section'>
        <div className='image-side'>
            <img id='whystigma' src={img} alt='why is this stigma harmful' />
        </div>
        <div className='blurb-side'>
            <div className='blurb-title'>
                Why is this stigma harmful for those affected?
            </div>
            <div className='blurb-content'>
                This disdain towards mental weakness causes many athletes to refuse to ask 
                for help or admit they need help. This forces those who have depression to 
                suffer alone and in silence. Without needed help, athletes’ symptoms can 
                worsen and become much more severe. In the NCAA 2021 survey of student-athletes, 
                less than 50% of the surveyed athletes reported that they would feel comfortable 
                seeking help from a mental health provider on their campus (NCAA Research, 2021). 
                In a study done on elite athletes that have experienced mental health issues, 
                many reported that a strong reason they did not seek help is because of the 
                stigma and what another person would think (Gullivar, 2012). 
            </div>
        
        </div>
    </div>
  )
}

export default WhyStigma