import React from 'react';
import childtreatment from '../../../images/child.png'
const FeaturedService = () => {
    return (
        <div style={{padding: '40px'}}>
            <div className="container row">
                <div className="offset-md-1 col-md-5">
                    <img className="img-fluid" src={childtreatment} alt=""/>
                </div>
                <div className="col-md-6 align-self-center p-5">
                    <h2>Exceptional Dental Care, <br/> on Your Terms</h2>
                    <p style={{textAlign: 'justify'}} className="text-secondary ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam vel vero tempore, facere illum beatae iste. Fuga consequatur provident aspernatur quisquam maiores ducimus modi ullam aliquid! Corrupti saepe nisi voluptates vitae at quod assumenda mollitia, perspiciatis tempore, distinctio, non a! Illo at ex eius alias officiis assumenda repudiandae sequi dolores odio quae mollitia excepturi tempore enim odit quasi unde blanditiis eos voluptates, quam incidunt natus! Assumenda, quaerat suscipit. Natus?</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>

            </div>
        </div>
    );
};

export default FeaturedService;