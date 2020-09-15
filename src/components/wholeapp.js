import React from 'react'
import './static_half_style.css'
import Array from './array'
export default class StaticHalf extends React.Component{
    state={
        newItem:'',
        data:'BinaryTree',
        items:[],
        showNums:false,
        algo:'Bubble-Sort',
        speed:50
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
        }else if(this.state.newItem>150){
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
        }else if(this.state.newItem>170){
            alert("Please Enter A Small Number For Better Visualization. (<170)");
        }
        else{
            if(this.state.items.length>149){
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
        const length=this.state.items.length;
        let array=this.state.items;
        if(array[j].text>array[j+1].text){
            this.state.items[j].color='rgba(200,0,0,0.7)';
            this.state.items[j+1].color='rgba(200,0,0,0.7)';
            let x = array[j + 1].text;
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

    mergeSort=async(arr,l,r)=>{
        let m = Math.floor((l + r) / 2);
        if(l<r){
            await this.mergeSort(arr,l,m);
            await this.mergeSort(arr,m+1,r);
            // setTimeout(()=>{
            //     this.setState({items:arr},()=>{this.merge(arr,l,m,r)})
            // },this.state.speed)
            await this.delay(Math.floor(this.state.speed)+170)
            this.merge(arr,l,m,r)
            return Promise.resolve();    
        }
    }
    merge=async(arr,l,m,r)=>{
        
        let left = l;
        let right = m + 1;
        let index = 0; 
        let temp=[];
        while (left <= m && right <= r){
            if (arr[left].text < arr[right].text) {
                this.state.items[left].color='rgba(200,0,0,0.7)';
                this.state.items[right].color='rgba(200,0,0,0.7)';
                temp[index] = arr[left].text;
                index++;
                left++;
            }
            else {
                this.state.items[left].color='rgba(0,0,200,0.7)';
                this.state.items[right].color='rgba(0,0,200,0.7)';
                temp[index] = arr[right].text;
                index++;
                right++;
            }
        }
            for (let i = left; i <= m; i++) {
                temp[index] = arr[i].text;
                index++;
            }
            for (let i = right; i <= r; i++) {
                temp[index] = arr[i].text;
                index++;
            }
            index = 0;
            for (let i = l; i <= r; i++) {
                arr[i].text = temp[index];
                this.setState({items:arr});
                index++;
            }
    }   
    delay=(time)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(resolve, time);
        })
    }
    triggerMergeinAsync=async(l,r)=>{
        let arr=this.state.items;
        await this.mergeSort(arr,l,r);
        await this.delay(500);
        this.setGreen(r);
    }
    setGreen=(r)=>{
        for(let i=0;i<=r;i++){
            this.state.items[i].color='rgba(0,200,0,0.6)';
        }
        this.forceUpdate();
    }
    timeComplexity=()=>{
        if(this.state.algo==='Bubble-Sort'){
            return(
                <h3 style={{textAlign:'center',paddingTop:'1%'}}>Time Complexity : O(n^2)</h3>
            )
        }
        if(this.state.algo==='Merge-Sort'){
            return(
                <h3 style={{textAlign:'center',paddingTop:'1%'}}>Time Complexity : O(n*log n)</h3>
            )
        }
    }
    render(){
        return(
            <div className='app'>
            <div className='staticDiv'>
                <div className='sitename'>
                    <h1>Array & Algorithms Visualizer</h1>
                </div>
                <div className='options'>
                    <div className='data'>
                        <input className='visible' placeholder='Value' name='newItem' value={this.state.newItem} type="text" onChange={this.inputchanges}/>
                        <button className='visible' onClick={this.additem}>Add Item</button>
                        <button className='visible' onClick={this.resetitems}>Reset</button>
                        <button className='visible' onClick={this.showNumsChanger}>Show</button>
                        <button onClick={this.addRandomNumbers}>Random</button>
                    </div>
                        <div className='algos'>
                            <select onChange={this.inputchanges} value={this.state.algo} name="algo" id="">
                                <option>Bubble-Sort</option>
                                <option>Merge-Sort</option>
                                <option disabled>Quick-Sort</option>
                            </select>
                            <button onClick={()=>{
                                let x=0,y=0;
                                if(this.state.algo==='Bubble-Sort'){
                                    this.runAlgo(x,y);
                                }else if(this.state.algo==='Merge-Sort'){
                                    this.triggerMergeinAsync(0,this.state.items.length-1);
                                }
                                }}>Apply</button>
                                <input onChange={this.inputchanges} name="speed" value={this.state.speed} min="0.1" max="400" type="range"/>
                        </div>
                </div>
                <div className='complexityHere'>
                    {this.timeComplexity()}
                </div>
            </div>
            <div className='arrayarea'>
                <Array show={this.state.showNums} elements={this.state.items} />
            </div>
            <div className='source'>
                <a href="https://github.com/winepine/dsvisualizer" target="_blank">Source Code</a>
            </div>
        </div>             
        )
    }
}