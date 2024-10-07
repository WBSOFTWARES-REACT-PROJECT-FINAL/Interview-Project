import React from 'react';

const Services = () => {
    return (
        <div className='flex-row md:flex mt-3'>
            <div className='border_shadow mx-2 mt-2 md:w-1/3 '>
                <h4 className='text-xl font-bold mb-2'>We Encourage</h4>
                <ul className='list-disc list-inside text-gray-800 space-y-1'>
                    <li>Social and Economic Development</li>
                    <li>Sharing and Development of Talents.</li>
                    <li>Learning new skills.</li>
                    <li>Providing Training.</li>
                    <li>Social Activities.</li>
                    <li>Leisure Activities.</li>
                    <li>Educational Activities.</li>
                </ul>
            </div>

            <div className='border_shadow mx-2 mt-2 md:w-1/3 '>
                <h4 className='text-xl font-bold mb-2'>We Help</h4>
                <ul className='list-disc list-inside text-gray-800 space-y-1'>
                    <li>To provide Educational Facilities.</li>
                    <li>To Provide Medical Facilities.</li>
                    <li>To Organise Free Medical Camps.</li>
                    <li>To improve socio-economic of Poor, rural and urban women living in the Greater Chittagong.</li>
                </ul>
            </div>

            <div className='border_shadow mx-2 mt-2 md:w-1/3 '>
                <h4 className='text-xl font-bold mb-2'>Our Objectives</h4>
                <ul className='list-disc list-inside text-gray-800 space-y-1'>
                    <li>To meet regularly for creative and social activities at a place accessible to all members.</li>
                    <li>To agree and implement programme of activities of interest to all members and in the interests of the welfare of Greater Chittagonians.</li>
                </ul>
            </div>
        </div>
    );
};

export default Services;