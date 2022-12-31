import React, { useState } from "react";
import './movieRow.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default (props) => {

    const [scrollX,setScrollX] = useState(0);

    const size = props.items.results.length * 150;
    const windowSize = window.innerWidth;

    const handleLeftArrow = () => {
        if (Math.abs(scrollX - windowSize) < size) {
            setScrollX(scrollX - 150);
        } else {
            setScrollX(0);
        }
    } 
    
    const handleRightArrow = () => {
        if (Math.abs(scrollX - windowSize) >= 0) {
            setScrollX(scrollX - 150);
        } else {
            setScrollX(size * -1);
        }
    }


    return (
        <div className="movieRow">
            <h2>{props.title}</h2>

            <div className="movieRow--listArea">

                <div className="movieRow--left">
                    <ChevronLeftIcon style={{fontSize: 50}} onClick={handleLeftArrow}/>
                </div>
                <div className="movieRow--right">
                    <KeyboardArrowRightIcon style={{fontSize: 50}} onClick={handleRightArrow}/>
                </div>

                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: props.items.results.length * 150
                }}>
                    {props.items.results.length > 0 && props.items.results.map((item,key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    )
}