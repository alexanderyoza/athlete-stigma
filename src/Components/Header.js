import '../Styles/Header.css';
import { useState, useEffect } from 'react';

function Header(props) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const narrow = window.innerWidth <= 900;
            setIsMobile(narrow);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
        };

    }, []);


    return (
        <div className={props.clear ? 'header-cont' : 'header-cont-clear'} >
            <div className={isMobile ? 'header-mobile' : 'header'}>
                <div className='header-left'>
                    Depression Awareness for Athletes
                </div>
                <div className='header-right'>
                    by Lexi Yoza
                </div>
            </div>
        </div>
    );

}

export default Header