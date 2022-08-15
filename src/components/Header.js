import React from 'react'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps'
import { Avatar } from '@mui/material'

const Header = () => {
    return (
        <div className='home__header'>
            <div className="home__header__left">
                <Link to="/about">About</Link>
                <Link to="/store">Store</Link>

            </div>
            <div className="home__header__right">
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Images</Link>
                <Link to="/"><AppsIcon/></Link>
                <Link to="/"><Avatar/></Link>

            </div>
        </div>
    )
}

export default Header
