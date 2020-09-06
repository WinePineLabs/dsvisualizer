import React from 'react'
import './static_half_style.css'

export default class Array extends React.Component{
    render(){
        console.log(this.props.elements.length);
        return(
            <div className='dynamic-half'>
                {
                    this.props.elements.map(element=>{
                        var text;
                        if(this.props.show){
                            text=<h2>{element.text}</h2>
                        }else{
                            text=<h2></h2>
                        }
                        return(
                            <div style={ {height :`${parseInt(element.text)*(this.props.show?100:window.screen.height/360)}px`,backgroundColor:`${element.color}`}}
                            className='single-item'>
                            {text}
                        </div>
                        )
                    }
                    )
                }
            </div>
        )
    }
}