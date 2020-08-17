import React from 'react'
import './static_half_style.css'
import Algos from './algos'
import Array from './array'
export default class StaticHalf extends React.Component{
    state={
        newItem:'',
        data:'BinaryTree',
        items:[],
    }

    inputchanges=event=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    resetitems=()=>{
        this.setState({
            items:[]
        })
    }
    additem=event=>{
        if(this.state.items.length>12){
            alert('Memory Stack Is Full');
        }else{
        this.setState({
            items:[...this.state.items,{text:this.state.newItem,id:this.state.items.length+1}],
            newItem:''
        })
    }
    }
    dynamicRender=()=>{
        if(this.state.data==='Array'){
            return <Array elements={this.state.items}/>
        }
    }
    render(){
        return(
            <div className='app'>
            <div className='staticDiv'>
                <div className='sitename'>
                    <h1>Data Structures & Algorithms Visualizer</h1>
                </div>

                <div className='options'>

                    <div className='data'>
                        <select onChange={this.inputchanges} value={this.state.data} name="data" id="">
                            <option>Array</option>
                            <option>BinaryTree</option>
                            <option>Trie</option>
                            <option>Heap</option>
                        </select>
                        <input placeholder='New Item' name='newItem' value={this.state.newItem} type="text" onChange={this.inputchanges}/>
                        <button onClick={this.additem}>Add Item</button>
                        <button onClick={this.resetitems}>Reset</button>
                    </div>
                    
                    <Algos />
                </div>
            </div>
                {this.dynamicRender()}
        </div>             
        )
    }
}