import React from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../../../images/headerBg.png'
const HeaderMain = () => {
    return (
        <main style={{height: '500px'}} className="row d-flex align-items-center">
            
                <div className="col-md-4 offset-md-1">
                    <h1 style={{color: '#3A4256'}}>We Care For <br/> Your Smile</h1>
                    <p className='secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam delectus quidem laboriosam perferendis beatae numquam id nostrum! Nam corrupti accusamus veritatis ab error molestiae nihil impedit fuga voluptatibus rem eaque laboriosam aut, dolores, tempora natus dicta, dolore quae eius.</p>
                    <Link to="/appointment">
                    <button className="btn btn-primary">GET APPOINTMENT</button>
                    </Link>
                </div>
                <div className="col-md-6 ">
                    <img className="img-fluid" src={headerImage} alt=""/>
                </div>
            
        </main>
    );
};

export default HeaderMain;