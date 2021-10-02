import React from 'react';

const Aunt = (props) => {
    const {house} = props;
    return (
        <div>
            <h2>Aunty</h2>
            <small>house: {house}</small>
        </div>
    );
};

export default Aunt;