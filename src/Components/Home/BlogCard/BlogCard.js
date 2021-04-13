import React from 'react';

const BlogCard = ({blog}) => {
    return (
        <div className="col-md-4 ">
            <div className=" m-3 p-4 rounded shadow">
                <div className="d-flex align-items-center justify-content-center mb-5 ">
                    <div>
                         <img src={blog.authorImg} alt="" className="w-75"/>    
                    </div>
                    <div>
                        <h6>{blog.author}</h6>
                        <small>{blog.date}</small>
                    </div>
                </div>
                <div style={{textAlign: 'justify'}}>
                    <h4 style={{color: '#3A4256'}} className="mb-3">{blog.title}</h4>
                    <p className="text-secondary" >{blog.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;