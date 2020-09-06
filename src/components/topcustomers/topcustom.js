import React, { Component } from 'react'
import './topcustom.css'

export default class topcustom extends Component {
    componentDidMount(){
        console.log(this.props.customer)
    }
    render() {
        return (
            <div className="cusfloat">
                <div className="cusfloated">
                    {
                        this.props.customer.map((ite, index) => {
                            return  <div key={index} className="cusmar" >
                                        <div className="cus-icon">
                                        <img className="inside-cus-icon"  src={ite.customerlink} alt="" />

                                        </div>
                                        <div className="Whirlpool">
                                            <span className="Whirlpool"> {ite.customername} </span>
                                        </div>
                                    </div>
                        })
                    }
                   
                </div>
              
                
                
            </div>
        )
    }
}
