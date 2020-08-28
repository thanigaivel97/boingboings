import './smartech.css'

import React, { Component } from 'react'

export default class smartech extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div className="tech">
                <div className="insidefloat">
                    <div className="Support">Support</div>
                    <div>
                        <ul className="Freelancers-Large-En">
                            {this.props.support.length === 0 ? "NIL" : this.props.support.map((ite,index) => {
                               return <li key={index}>{ite}</li>
                            }) }
                          
                        </ul>
                    </div>
                </div>
                <div  className="insidefloat">
                    <div className="Support">Customer type</div>
                        <div>
                            <ul className="Freelancers-Large-En">
                                {this.props.typeofcus.length === 0 ? "NIL" : this.props.typeofcus.map((ite,index) => {
                                return <li key={index}>{ite}</li>
                                }) }
                            </ul>
                        </div>
                </div>
                <div  className="insidefloat">
                    <div className="Support">API Support</div>
                        <div>
                            <ul className="Freelancers-Large-En">
                                <li>Yes</li>
                                
                            </ul>
                        </div>
                </div>
                <div  className="insidefloat">
                    <div className="Support">Deployment</div>
                        <div>
                            <ul className="Freelancers-Large-En">
                                {this.props.deployment.length === 0 ? "NIL" : this.props.deployment.map((ite,index) => {
                                    return <li key={index}>{ite}</li>
                                    }) }
                            </ul>
                        </div>
                </div>
               
                
            </div>
        )
    }
}
