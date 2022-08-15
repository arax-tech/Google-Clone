import React from 'react'
import MetaData from '../components/MetaData'
import SearchComp from '../components/Search';
import useGoogleSearch from './useGoogleSearch'
import { Link, useParams } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search'
import DescriptionIcon from '@mui/icons-material/Description'
import ImageIcon from '@mui/icons-material/Image'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import RoomIcon from '@mui/icons-material/Room'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AppsIcon from '@mui/icons-material/Apps'
import { Avatar } from '@mui/material'


const Search = () => {
    const params = useParams();
    // Live Api Calss
    const { data } = useGoogleSearch(params.keyword);

    // Local Api Call
    console.log(data);
    return (
        <React.Fragment>
            {/* 
                https://developers.google.com/custom-search/v1/using_rest 
                https://cse.google.com/cse/create/new
            */}
            <MetaData title={`${params.keyword} - Google Search`} />
            <div className="search__page">
                <div className="search__page__header">
                    <Link to="/">
                        <img className='search__page__logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
                    </Link>


                    <div className="search__page__header__body">
                        <SearchComp hideButtons />
                        <div className="search__page__options">
                            <div className="search__page__option_left">
                                <div className="search__page__option">
                                    <SearchIcon />
                                    <Link to="/all">All</Link>
                                </div>

                                <div className="search__page__option">
                                    <DescriptionIcon />
                                    <Link to="/news">News</Link>
                                </div>

                                <div className="search__page__option">
                                    <ImageIcon />
                                    <Link to="/images">Images</Link>
                                </div>

                                <div className="search__page__option">
                                    <LocalOfferIcon />
                                    <Link to="/shipping">Shipping</Link>
                                </div>

                                <div className="search__page__option">
                                    <RoomIcon />
                                    <Link to="/maps">Maps</Link>
                                </div>
                                <div className="search__page__option">
                                    <MoreVertIcon />
                                    <Link to="/more">More</Link>
                                </div>
                            </div>
                            <div className="search__page__option_right">
                                <div className="search__page__option">
                                    <Link to="/settings">Settings</Link>
                                </div>
                                <div className="search__page__option">
                                    <Link to="/tools">Tools</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="search__page__header__right__icons">
                        <Link to="/"><AppsIcon style={{ marginTop: "5px", color: "gray" }} /></Link>
                        <Link to="/"><Avatar /></Link>

                    </div>
                </div>


                <div className="search__page__results">
                    <div className="search__page__result__count">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for <strong>{params.keyword}</strong>
                    </div>
                    {
                        data?.items  ?
                            data?.items.map((item, index) => (
                                <div key={index} className="search__page__result">
                                    <a className="search__page__result_website" href={item.link} target="_blank" rel="noopener noreferrer">{item.displayLink}</a>
                                    <a className="search__page__result_title" href={item.link} target="_blank" rel="noopener noreferrer">
                                        <h2>{item.title}</h2>
                                    </a>
                                    <p className="search__page__result_snippet">{item.snippet}</p>
                                </div>
                            ))
                            : (
                                <center>
                                    <h1 style={{fontWeight:"200", marginTop:"15%"}}>{`Not Record Found with ( ${params.keyword} ) keyword...`}</h1>
                                </center>
                            )
                    }

                </div>
            </div>
        </React.Fragment>
    )
}

export default Search
