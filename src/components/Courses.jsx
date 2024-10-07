'use client'

const Courses = () => {
    const cards = [
        {
            "id": 1,
            "title": "Date Entry",
            "description": "Efficient data entry services ensure quick and accurate support, reducing customer wait times for assistance."
        },
        {
            "id": 2,
            "title": "Graphic Design",
            "description": "High-quality graphic design solutions speed up support by minimizing the time customers spend waiting for visual content."
        },
        {
            "id": 3,
            "title": "Full Admin Panel Support",
            "description": "Comprehensive admin panel support allows businesses to provide faster help, reducing the time users spend waiting for issues to be resolved."
        },
        {
            "id": 4,
            "title": "Digital Marketing",
            "description": "Effective digital marketing support shortens the response time, ensuring customers get quicker assistance with their campaigns."
        },
        {
            "id": 5,
            "title": "Web Design",
            "description": "Streamlined web design services offer faster support, allowing customers to receive quicker help with their website projects."
        },
        {
            "id": 6,
            "title": "Web Development",
            "description": "Efficient web development services ensure customers experience minimal delays in receiving technical support."
        }
    ]

    return (
        <div id="courses" className='mt-20 mx-2'>
            <div>
                <h2 className='text-center font-extrabold text-5xl mb-10'>Our Popular Courses</h2>
                <div className='flex-row md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        cards.map((card) => (
                            <div key={card.id} className='border_shadow rounded-2xl mx-2 mt-2 text-center p-16 w-full md:w-68 lg:w-92'>
                                <h4 className='font-extrabold text-2xl my-6'>{card.title}</h4>
                                <p className='mb-8'>{card.description}</p>
                            </div>
                        ) )
                    }
                </div>

            </div>
        </div>
    );
};

export default Courses;