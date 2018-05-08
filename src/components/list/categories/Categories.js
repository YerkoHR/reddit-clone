import React from 'react';
import './Categories.css';

// ORGANIZED!

const Categories = (props) => {
    const { resetPage, handleDynamicUrl, currentSub, filters } = props;

    return (
        <div className="btn-group"> 
            {filters.map((filter, index)=>(
                <button 
                key={index}
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => {handleDynamicUrl(currentSub, filter, ''); resetPage();}}
                >
                    {filter}
                </button>
            ))}
        </div>
    )
}

export default Categories;