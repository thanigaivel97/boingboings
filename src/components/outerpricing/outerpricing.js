import React, { Component } from 'react'
import Pricing from '../pricing/pricing'
import './outerpricing.css'

export default class outerpricing extends Component {
    componentDidMount(){
        // console.log(this.props)
    }
    render() {
        return (
            <div>
                <div className="outerf">
                {this.props.plandetails.map((ite,index) => {
                    // console.log(ite)
                    if(index < 4)
                        return <Pricing features={ite.feautures} planprices={ite.planprices} title={ite.plantitle}  key={index} />
                })}
               
                </div>
                {this.props.plandetails.length > 4 ?  <div className="outerfa">
                {this.props.plandetails.map((ite,index) => {
                    // console.log(ite)
                    if(index >= 4)
                        return <Pricing features={ite.feautures} planprices={ite.planprices} title={ite.plantitle}  key={index} />
                })}
               
                </div> : ''}
               

            </div>
            
        )
    }
}
