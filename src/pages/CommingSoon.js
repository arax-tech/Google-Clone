import React from 'react'
import { Link } from 'react-router-dom';
import MetaData from '../components/MetaData';
const CommingSoon = () => {
    return (
        <React.Fragment>
            <MetaData title="Comming Soon" />
            <div className='home'>
                <Link to="/">
                    <div className="home__body">
                        <img style={{ height: "400px" }} src="/comming-soon.jpg" alt="" />
                    </div>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default CommingSoon
