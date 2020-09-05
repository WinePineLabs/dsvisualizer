import React from 'react'
import './static_half_style.css'
import Algos from './algos'
import Array from './array'
export default class StaticHalf extends React.Component{
    state={
        newItem:'',
        data:'BinaryTree',
        items:[],
        showNums:false,
        algo:'BubbleSort',
        speed:40
    }

    inputchanges=event=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    resetitems=()=>{
        this.setState({
            items:[]
        },()=>{window.location.reload(false)})
    }
    showNumsChanger=()=>{
        this.setState({showNums:!this.state.showNums})
    }
    addRandomNumbers=()=>{
        if(!/^[0-9]+$/.test(this.state.newItem)) {
            this.addNumbers(50);
        }else if(this.state.newItem>111){
            this.addNumbers(50);
        }
        else{
            this.addNumbers(this.state.newItem);
        }
    }
    addNumbers=(x)=>{
        let Newarray=[]
        for(var i=0;i<x;i++){
            Newarray=[...Newarray,{text:Math.floor(Math.random()*160),color:'rosybrown',id:Newarray.length+1}]
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
                items:[...this.state.items,{text:this.state.newItem,color:'rosybrown',id:this.state.items.length+1}],
                newItem:''
            })
        }
    }
    }
    runAlgo=(i,j)=>{
        console.log(this.state.length,i,j);
        const length=this.state.items.length;
        let array=this.state.items;
        if(array[j].text>array[j+1].text){
            let x = array[j + 1].text;
            this.state.items[j].color='rgba(200,0,0,0.7)';
            this.state.items[j+1].color='rgba(200,0,0,0.7)';
            array[j + 1].text = array[j].text;
            array[j].text = x;
        }else{
            this.state.items[j].color='rgba(0,0,200,0.7)';
            this.state.items[j+1].color='rgba(0,0,200,0.7)';
        }
        j++;
        if(j==length-i-1){
            this.state.items[j].color='rgba(0,200,0,0.6)';
            i++;j=0;
        }
        if(i==length-1){
            this.state.items[0].color='rgba(0,200,0,0.6)';
            this.state.items[1].color='rgba(0,200,0,0.6)';
            this.forceUpdate(); 
            return;
        }
        setTimeout(()=>{
            this.setState({items:array},()=>{this.runAlgo(i,j)})
        },this.state.speed)
    }
    render(){
        console.log(this.state.speed)
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
                        </select>
                        <input placeholder='New Item' name='newItem' value={this.state.newItem} type="text" onChange={this.inputchanges}/>
                        <button onClick={this.additem}>Add Item</button>
                        <button onClick={this.resetitems}>Reset</button>
                        <button onClick={this.showNumsChanger}>Show</button>
                        <button onClick={this.addRandomNumbers}>Random</button>
                    </div>
                        <div className='algos'>
                            <select onChange={this.inputchanges} value={this.state.algo} name="algo" id="">
                                <option>Bubble-Sort</option>
                                <option disabled>Merge-Sort</option>
                                <option disabled>Quick-Sort</option>
                            </select>
                            <button onClick={()=>{
                                let x=0,y=0;
                                this.runAlgo(x,y);}}>Apply</button>
                                <input onChange={this.inputchanges} name="speed" value={this.state.speed} min="0.1" max="300" type="range"/>
                        </div>
                </div>
            </div>
            <div className='arrayarea'>
                <Array show={this.state.showNums} elements={this.state.items} />
            </div>
        </div>             
        )
    }
}