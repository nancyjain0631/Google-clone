import React from 'react'
import './SearchPage.css';
import  { useStateValue } from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
import { Link } from "react-router-dom";
import Response from '../response';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';


// https://developers.google.com/custom-search/v1/using_rest
// https://cse.google.co.in/cse/create/new
function SearchPage() {
    const [{term},dispatch] = useStateValue();
// LIVE API CALL
    // const { data }= useGoogleSearch(term);
    const data = Response;
    console.log(data);
    return (
        <div className='searchPage'>
            <div className="searchPage_header">
                <Link to="/">
                    <img
                        className="searchPage_logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""
                    />
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons/>
                    <div className="searchPage_options">
                    <div className="searchPage_optionsLeft">
                        <div className="searchPage_option">
                            <SearchIcon/>
                            <Link to="/all">All</Link>
                        </div>
                        <div className="searchPage_option">
                            <DescriptionIcon/>
                            <Link to="/all">News</Link>
                        </div>
                        <div className="searchPage_option">
                            <ImageIcon/>
                            <Link to="/all">Images</Link>
                        </div>
                        <div className="searchPage_option">
                            <LocalOfferIcon/>
                            <Link to="/shopping">Shopping</Link>
                        </div>
                        <div className="searchPage_option">
                            <RoomIcon/>
                            <Link to="/maps">Maps</Link>
                        </div>
                        <div className="searchPage_option">
                            <MoreVertIcon/>
                            <Link to="/more">More</Link>
                        </div>
                    </div>
                    <div className="searchPage_optionsRight">
                        <div className="searchPage_option">
                            <Link to="/settings">Settings</Link>
                            <Link to="/settings">Tools</Link>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
            <div className="searchPage_results"></div>
            
        </div>
    )
}

export default SearchPage
