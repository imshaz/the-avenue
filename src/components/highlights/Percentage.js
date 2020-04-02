import React, {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default function Percentage() {

    const [state, setState] = useState({
        start:0, 
        end:30
    })

    const setPercentage =()=>{
        if(state.start<state.end){
            setState({
               ...state,  start:state.start+1
            })
        }
    }
    useEffect(() => {
       setTimeout(() => {
           setPercentage()
       }, 30);
    }, [state])
    return (
        <div className="percentage-wrapper">
           <div className="discount-wrapper"> 
               <Fade>
                    <span>{state.start}%</span>
                    
                   </Fade>
                <span>OFF</span>

           </div>
           <Slide right> 
           <div className="description-wrap"> 
<h2>Purchase tickets before 20th JUNE</h2>
<div>Veniam amet laborum velit non voluptate deserunt voluptate ex duis pariatur. Sunt aliqua non ex nisi anim est do reprehenderit consectetur do ullamco ipsum anim pariatur. Labore magna cupidatat eu elit. Reprehenderit do irure dolore qui est consequat occaecat laboris amet. Ad commodo est eu pariatur dolor consectetur Lorem sunt. Nulla exercitation aliquip incididunt aute.</div>
           </div>
           </Slide>
        </div>
    )
}
