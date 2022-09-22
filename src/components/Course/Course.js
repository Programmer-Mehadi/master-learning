import React from 'react';
const Course = (props) => {
    const { name, skillsGain, img, rating, reviews, features, authorImg, authorName,price } = props.data
    let shortSkillsGain = skillsGain.slice(0, 100) + '...';
    return (
        <div className='bg-white text-black course border rounded shadow-xl '>
            <div className='course-image'>
                <img className='rounded-t w-screen' src={img} alt="" />
            </div>
            <div className='course-details p-4 flex flex-col justify-between gap-2 h-[400px]'>
                <div className='flex gap-4'>
                    <img className='h-fit' src={authorImg} alt="" />
                    <p>{authorName}</p>
                </div>
                <h1 className='font-bold'>{name}</h1>
                <h1 ><span className='font-bold'>Price: </span>{price}</h1>
                <h1><span className='font-bold'>Skills you'll gain: </span>{shortSkillsGain}</h1>
                <div> <span className='font-bold'>{rating}</span> {reviews}</div>
                <p>{features}</p>
                <button onClick={() => props.addCart(props.data)} className='bg-yellow-400 text-black p-2 rounded font-semibold'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Course;