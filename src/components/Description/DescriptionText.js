import React from 'react';
import './Description.css'

const DescriptionText = () => {
    return (
        <div>
            <h1 className='description__info-title'>
                This is an Internal test task
            </h1>
            <p className='description__info-text'>
                Hello, don’t be afraid.<span className='new-line'>
                    <span className='new-line'>This task is easier than looks like.</span>
                    It’s no magic, no quests and no math here.
                    Only <span className='bold-text'>your skill</span> in <span className='bold-text'>semantic markup</span> matters.
                    In this Figma design you already have everything
                    to successfully path our test, just be attentive
                    to details, take your time and GOOD LUCK.</span>
            </p>
        </div>
    );
};

export default DescriptionText;