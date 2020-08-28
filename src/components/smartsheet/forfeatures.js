import './forfeatures.css'
import React, { Component } from 'react'

export default class forfeatures extends Component {

    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (           
            <div className="forflex">                
                {this.props.fesup.map((ite,index) => {
                    return index >= this.props.value && index < (this.props.value + 3) ? 
                       <div className="" key={index}><span className="Budget-Management-Copy-2">{ite.feature}</span></div> : ''
                })}       
            </div>
        )
    }
}

