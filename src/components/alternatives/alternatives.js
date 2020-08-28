import React, { Component } from 'react'
import './alternatives.css'

export default class alternatives extends Component {
    render() {
        return (
            <div className="letter">
                <div className="insideletter">
                    <div className="leetericon">image icon</div>
                    <div className="AirTable">AirTable</div>
                    <div><p className="AirTable-is-a-Cloud">
                    AirTable is a Cloud Collaboration platform to organize work. The software offers features like Grid View,<span className="text-style-1s">read more </span>    
                    </p></div>
                    <div className="Compare-SmartSheet-w"><a> Compare SmartSheet with AirTable</a></div>
            
               </div>



            </div>
        )
    }
}
