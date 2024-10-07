import React from 'react';

const Photos = () => {
    const cards = 20
    return (
        <div>
            <div className='text-center text-white p-16 m-2 my-4 bg-blue-500 '>
                <h2 className='text-4xl font-medium'>Photos</h2>
                <h4>Memorable moments of our association</h4>
            </div>
            <div className='mx-2 flex-row md:grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    Array(22).fill().map((_, index) => (
                        <div key={index} className="card bg-white w-full md:w-80 shadow-md border-2 mr-2">
                            <figure className="p-2">
                                <img
                                    src="./no_img.jpg"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">GCA Mejban Tv Show 2015</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Photos;