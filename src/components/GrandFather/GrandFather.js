import React from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandFather = () => {
    return (
        <div>
            <h2>GrandFather</h2>
           <div style={{display: 'flex'}}>
           <Father></Father>
           <Uncle></Uncle>
           <Aunt></Aunt>
           </div>
        </div>
    );
};

export default GrandFather;