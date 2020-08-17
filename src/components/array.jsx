import React from 'react'
import './static_half_style.css'

export default class Array extends React.Component{
    displayElements=()=>
    this.props.elements.map(element=>{
            return(<div style={ {marginTop:`${element.id*-30}px`}} className='single-item'><h2>{element.text}</h2></div>)
        })
    render(){
        return(
            <div className='dynamic-half'>
                <div className='stackbox'></div>
                    {this.displayElements()}
            </div>
        )
    }
}