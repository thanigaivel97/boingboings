import React, { Component } from 'react'
import './reachout.css'

export default class reachout extends Component {
    render() {
        return (
            <div className="footer">
                <div className="flo">
                    <div className="Phone-Number">Setup Demo</div>
                    <div className="bt-classs">
                        <button className="cotact-saless"><a className="removeline" href={"/setup-demo/" + this.props.urlfordemo }><span className=" contact-sales-texts"> Contact Sales</span></a></button>     
                        
                    </div>
                </div>
                <div className="flo">
                    <div className="Phone-Number">Location</div>
                    <div className="Bellevue-Washington"> {this.props.location} </div>
                </div>
                <div className="flo">
                    <div className="Phone-Number">Phone Number</div>
                    <div className="Bellevue-Washington"> {this.props.phonenumber === "" ? "Not Available" : this.props.phonenumber} </div>

                </div>

                
            </div>
        )
    }
}
