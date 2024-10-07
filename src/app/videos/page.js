import React from 'react';

const Videos = () => {
    return (
        <div>
            <div className='text-center text-white p-16 m-2 my-4 bg-blue-500 '>
                <h2 className='text-4xl font-medium'>Videos</h2>
                <h4>Memorable moments of our association</h4>
            </div>
            <div className='mx-2'>
                <div className="card bg-white w-full md:w-80 shadow-md border-2 ">
                    <figure className="p-2">
                        <img
                            src="/video_thumbs.png"
                            alt="Shoes"
                         />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">GCA Mejban Tv Show 2015</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Videos;