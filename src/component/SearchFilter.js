import { useState } from 'react'

const close = require('../assets/image/close.png')
const fire = require('../assets/image/fire.png')

function SearchFilter({setShowFilter,cuisineList,selectedCuisine,setSelectedCuisine}) {
    const [selectedValue,setSelectedValue] = useState(selectedCuisine)

    const handleApply = () =>{
        setSelectedCuisine(selectedValue);
        setShowFilter(false);
    }

    return (
        <div className="filter-container">
            <div className="filter-box">
                <div className="flex-between">
                    <h2 className="mb-30">Search filters</h2>
                    <div className="main-button button3" onClick={()=>setShowFilter(false)}>
                        <img src={close} width={14} height={14}/>
                    </div>
                </div>
                <h2 >Sort by</h2>
                <div className="flex-row">
                    <div className="flex-row center text-orange">
                        <div className="orange-btn">
                            <img src={fire} width={18} height={18}/>
                        </div>
                        Open
                    </div>
                </div>
                <h2>Cuisine</h2>
                <div className="restaurant-container">
                    <div 
                        onClick={()=>setSelectedValue('all')}
                        className={selectedValue === 'all' ? 'orange-btn' : 'main-button button3'}
                        style={{fontWeight:'400'}}>All</div>
                    {cuisineList.map(item=>{
                        return <div 
                        onClick={()=>setSelectedValue(item)}
                        className={selectedValue === item ? 'orange-btn' : 'main-button button3'}
                        style={{fontWeight:'400'}}>{item}</div>
                    })}
                </div>
                <div 
                className='main-button' 
                onClick={handleApply}
                style={{position:"absolute",bottom:20,width:'80%'}}>Apply Filter</div>
            </div>
        </div>
    );
}

export default SearchFilter;
