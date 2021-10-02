import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Aunt = ( ) => {
     
    const [ornaments,house] = useContext(RingContext)
    return (
        <div>
            <h2>Aunty</h2>
            <small>house: {house}</small>
              <p>{ornaments}</p>
        </div>
    );
};

export default Aunt;