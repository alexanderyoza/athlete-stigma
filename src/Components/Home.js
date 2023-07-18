import '../Styles/Home.css';
import { useState, useEffect, useRef } from 'react';
import Header from './Header';
import background from '../assets/background.png';
import back from '../assets/back.png';
import What from './What';
import Stigma from './Stigma';
import WhyStigma from './WhyStigma';
import WrongStigma from './WrongStigma';
import References from './References';

function Home() {

    const [isScrolledTo, setIsScrolledTo] = useState(false);
    const contentRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            const targetDiv = contentRef.current;

            if (targetDiv) {
                const rect = targetDiv.getBoundingClientRect();
                const isElementInView = rect.top <= window.innerHeight * 0.14;
                setIsScrolledTo(isElementInView);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, []);

    return (
        <div className='home-container'>
            <Header clear={isScrolledTo} />
            <div className='home'>
                <div className='landing'>
                    <div className='landing-img-container'>
                        <img src={background} alt='home page' />
                    </div>
                    <div className='landing-overlay'>
                        <div className='overlay-container'>
                            <div className='overlay-hooks'>
                                <div className='landing-overlay-text'>
                                    The Stigma Ends Now
                                </div>
                                <div className='landing-overlay-request-container' onClick={
                                    () => {
                                        window.scrollTo({
                                            top: contentRef.current.getBoundingClientRect().top - window.innerHeight * 0.13,
                                            behavior: 'smooth',
                                        })
                                    }}>
                                    Learn More
                                </div>
                            </div>
                            <div className='overlay-credits'>
                                <div>
                                    website created by Alex Yoza
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-content' ref={contentRef}>
                <div className='section-container'>
                    <What />
                </div>
                <div className='section-container'>
                    <Stigma />
                </div>
                <div className='section-container'>
                    <WhyStigma />
                </div>
                <div className='section-container'>
                    <WrongStigma />
                </div>
                <References />
            </div>

        </div>
    )
}

export default Home