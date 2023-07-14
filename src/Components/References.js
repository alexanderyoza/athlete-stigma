import React from 'react';
import '../Styles/References.css';
import Pdf from '../assets/References.pdf'

function References() {
    return (
        <div className='references-container'>
            <div className='references'>
                <div className='references-title'>
                    References
                </div>
                <a href={Pdf} target='_blank' rel='noopener noreferrer'>
                    See PDF with all references used on this site
                </a>
            </div>
        </div>
    )
}

export default References