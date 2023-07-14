import React from 'react';
import '../Styles/Section.css';
import img from '../assets/stigma.png'

function Stigma() {
    return (
        <div className='section'>
            <div className='image-side'>
                <img src={img} alt='what is the stigma' />
            </div>
            <div className='blurb-side'>
                <div className='blurb-title'>
                    What is the Stigma around mental health in athletics?
                </div>
                <div className='blurb-content'>
                    In athletics especially, there is a huge stigma around mental 
                    health issues such as depression. This stigma stems from the culture 
                    in competitive athletics that preaches hard work and mental toughness. 
                    Though these things are good values and virtues for athletes and for people 
                    in general, it begins to turn into disdain and disrespect for those who are 
                    seen as “mentally weak” or “quitters.” In turn, those who suffer from illnesses 
                    like depression are seen as weak or sometimes even lazy if they choose to take 
                    time off or admit they have a “weakness.” In a qualitative experiment done with 
                    a small group of elite athletes ranging from 16 to 23 years of age, the athletes 
                    shared that performance pressure was the main reason many athletes suffer from 
                    depression or anxiety (Gullivar, 2012). Moreover, when discussing issues with a 
                    psychologist, they would continuously come back to the analysis of their 
                    performance in sports (Gullivar, 2012). 
                </div>
            
            </div>

        </div>
    )
}

export default Stigma