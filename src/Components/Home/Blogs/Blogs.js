import React from 'react';
import kent from '../../../images/kent.png';
import barry from '../../../images/barry.png';
import wayne from '../../../images/wayne.png';
import BlogCard from '../BlogCard/BlogCard';
const blogPost=[
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Oishi',
        authorImg : kent,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Tasmee',
        authorImg : barry,
        date : '23 April 2019'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Shahriar',
        authorImg : wayne,
        date : '23 April 2019'
    }
]

const Blogs = () => {
    return (
        <div className="container mt-5">
            <div className="text-center mt-5">
                <h5 className="text-uppercase text-primary">our blog</h5>
                <h2 style={{color: '#3A4256'}}>Learn from Our Blog</h2>
            </div>
            <div className="row">
                {
                    blogPost.map(blog=> <BlogCard blog={blog}></BlogCard> )
                }
            </div>
            
        </div>
    );
};

export default Blogs;