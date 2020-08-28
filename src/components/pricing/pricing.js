import React, { Component } from 'react'
import './pricing.css'

export default class pricing extends Component {
    
    componentDidMount(){
        // console.log("hello")
        // console.log(this.props.features)
    }
    render() {
        return (
            <div className="individual">
                <div className="insidepricing">
                <div className="Individual"> {this.props.title} </div>
                <div className="-per-month">{this.props.planprices}</div>
                <div className="Features">Features</div>
                <div className="Free-Users">
                    <div className="forusers">
                       
                    <ul>
                         {this.props.features.map((ite , index) => {
                             return   <li className="liforprice" key={index}> {ite} </li>
                        })}
                      

                    
                    </ul>
                        
                    </div>
                   
                </div>

                </div>
                
                
            </div>
        )
    }
}
