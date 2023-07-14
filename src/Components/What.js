import React from 'react';
import '../Styles/Section.css';
import img from '../assets/what.png';

function What() {
    return (
        <div className='section'>
            <div className='image-side'>
                <img src={img} alt='what is depression for athletes' />
            </div>
            <div className='blurb-side'>
                <div className='blurb'>
                    <div className='blurb-title'>
                        What is Depression and Why is it Relevant in Sports?
                    </div>
                    <div className='blurb-content'>
                        As defined by the American Psychiatric Association, 
                        Depression or Major Depressive disorder is a very common and serious 
                        mental condition that affects the individual’s mood and behavior. It can 
                        cause feelings of overwhelming sadness or loss of interest in previously 
                        enjoyed activities, sometimes leading to an inability to function normally on a 
                        day-to-day basis (Torres, 2020). 
                    </div>
                    <div className='blurb-content'>
                        Depression is an increasingly widespread problem, especially 
                        among athletes, and this is often caused by incredibly taxing 
                        schedules and pressure from parents, coaches, teammates, and even 
                        themselves. In the 2021 NCAA survey of 9808 student-athletes in Division 
                        I, II, and III programs, it was found that mental health concerns were 1.5 to 
                        2 times higher than they have been prior to 2020 (NCAA Research, 2021). Moreover, 
                        in a compilation of studies and analysis by Vincent Gouttebarge, it was found that out 
                        of thousands of elite athletes, anxiety and depression were prevalent 
                        34% of the time (2019). 
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default What