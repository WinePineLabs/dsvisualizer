import React from 'react'
import './static_half_style.css'
import Algos from './algos'
import Array from './array'
export default class StaticHalf extends React.Component{
    state={
        newItem:'',
        data:'BinaryTree',
        items:[],
        showNums:false
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
    showNumsChanger=()=>{
        this.setState({showNums:!this.state.showNums})
    }
    addRandomNumbers=()=>{
        let Newarray=[]
        for(var i=0;i<30;i++){
            Newarray=[...Newarray,{text:Math.floor(Math.random()*160),id:Newarray.length+1}];
        }
        this.setState({
            items:Newarray
        })
    }
    additem=event=>{
        if(!/^[0-9]+$/.test(this.state.newItem)) {
            alert("You did not enter a number.");
        }else if(this.state.newItem>161){
            alert("Please Enter A Small Number For Better Visualization. (<162)");
        }
        else{
            if(this.state.items.length>102){
                alert('Memory Stack Is Full');
            }else{
            this.setState({
                items:[...this.state.items,{text:this.state.newItem,id:this.state.items.length+1}],
                newItem:''
            })
            {console.log(this.state.items)}
        }
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
                        <button onClick={this.showNumsChanger}>Show</button>
                        <button onClick={this.addRandomNumbers}>Random</button>
                    </div>
                    <Algos />
                </div>
            </div>
            <div className='arrayarea'>
                <Array show={this.state.showNums} elements={this.state.items} />
            </div>
        </div>             
        )
    }
}