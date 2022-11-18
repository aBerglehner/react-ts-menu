import React from 'react';

type PropData = {
    categories: string[];
    filterItems: (v: string) => void;
};

export const Categories = ({ categories, filterItems }: PropData) => {
    return (
        <div className='btn-container'>
            {categories.map((category, index) => {
                return (
                    <button
                        type='button'
                        className='filter-btn'
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};
