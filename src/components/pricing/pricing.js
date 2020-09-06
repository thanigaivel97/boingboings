import React, { Component } from 'react'
import './pricing.css'

export default class pricing extends Component {

    constructor(props){
        super(props)
        this.state = {
            total : ''
        }
    }
    
    componentDidMount(){
        // console.log("hello")
        // console.log(this.props.features)
        let totalitems = this.props.features.length;
        if(totalitems > 5){

            totalitems -= 5
        }else{
            totalitems = 0;
        }
        this.setState({total : totalitems})
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
                            if(index <= 5){
                                return <li className="liforprice" key={index}> {ite} </li>

                            }
                        })}
                      

                    
                    </ul>

                    {
                        this.state.total  ?  <ul>
                        <li className="liforprice" > + {this.state.total}  more </li>
                        </ul> : '' 
                    }
                   
                    
                        
                    </div>
                   
                </div>

                </div>
                
                
            </div>
        )
    }
}
