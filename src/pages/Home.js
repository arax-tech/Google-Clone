import React from 'react'
import Header from '../components/Header';
import Search from '../components/Search';
const Home = () => {
    return (
        <React.Fragment>
            <div className='home'>
                {/* Header */}
                <Header />

                {/* Body */}
                <div className="home__body">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />

                    <div className="home__input__container">
                        <Search/>
                    </div>

                </div>


            </div>


        </React.Fragment>
    )
}

export default Home
