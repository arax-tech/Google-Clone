import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import MicIcon from '@mui/icons-material/Mic'
import { Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useStateValue } from '../contextApi/StateProvider'
import { actionType } from '../contextApi/reducer'

const Search = ({ hideButtons = false }) => {
    const navigate = useNavigate();
    const params = useParams();
    // eslint-disable-next-line
    const [{ }, dispatch] = useStateValue();
    const [input, setInput] = useState(params.keyword ? params.keyword : "");
    const search = (event) => {
        event.preventDefault();

        dispatch({
            type : actionType.SET_SEARCG_TERM,
            term : input
        })
        navigate(`/search/${input}`);
    }
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__nput__icon" />
                <input type="search" value={input} onChange={event => setInput(event.target.value)} />
                <MicIcon className='search__mic__icon' />
            </div>
            {
                !hideButtons ? (
                    <div className="search__buttons">
                        <Button type="submit" onClick={search} variant='outlined'>Google Search</Button>
                        <Button variant='outlined'>I'm Feeling Lucky</Button>
                    </div>
                ) : (
                    <div className="search__buttons search_hide_buttons">
                        <Button type="submit" onClick={search} variant='outlined'>Google Search</Button>
                        <Button variant='outlined'>I'm Feeling Lucky</Button>
                    </div>
                )
            }
        </form>

    )
}

export default Search
