import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SearchFilter from './SearchFilter'

const backIcon = require('../assets/image/back.png')
const filterIcon = require('../assets/image/filter.png')
const cartIcon = require('../assets/image/cart.png')
const searchIcon = require('../assets/image/search.png')

function Header({cuisineList,selectedCuisine,setSelectedCuisine}) {
    const navigate = useNavigate()
    const [showFilter, setShowFilter] = useState(false);

    return (
        <div className="header flex-between">
            <div className="main-button" onClick={()=>navigate(-1)}>
                <img src={backIcon} className="menu-icon" />
            </div>

            <div className="flex-row">
                {/* <div className="main-button">Store Name</div> */}
                <div className="search-bar">
                    <img src={searchIcon} className="search-icon" />
                    <input className="search-box" type="text" placeholder="Search for Restaurants (Press Enter to search)" />
                </div>
                <div className="main-button p-r mr-10" onClick={()=>setShowFilter(true)}>
                    <img src={filterIcon} className="menu-icon" />
                   {selectedCuisine!=="all" && <label className='label'>1</label>}
                </div>
                <div className="main-button button2">
                    <img src={cartIcon} className="menu-icon" />
                </div>
            </div>
            {showFilter && 
                <SearchFilter 
                    setShowFilter={setShowFilter} 
                    cuisineList={cuisineList} 
                    selectedCuisine={selectedCuisine}
                    setSelectedCuisine={setSelectedCuisine}
                />}
        </div>
    )
}

export default Header;