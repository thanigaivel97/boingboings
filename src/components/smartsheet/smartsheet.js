import React, { Component } from 'react';
import Feautures from './forfeatures'
import './smartsheet.css'

class smartsheet extends Component {
    constructor(props){
        super(props);
        this.functionforfea = this.functionforfea.bind(this)
    }
    componentDidMount() {
        // const a = this.props.product_features.categoryName[0];
        // console.log(this.props.product_features.Category_Features_Supported);
        // console.log(this.props.product_features)
    }
    functionforfea(num){
        for(var i=0; i< num ; i+=3){
        return  `${<Feautures value={i} fesup={this.props.product_features.Category_Features_Supported} />}`
        }
    }
    render() {
        let a = this.props.product_features.Category_Features_Supported.length ;
        const num = a/3;
                    
        return (
            <div className="insidesmartsheet">
            
            <div className="tittlehello"> {this.props.catname[0]} </div> 

            {num > 0 ? <Feautures value={0} fesup={this.props.product_features.Category_Features_Supported} /> : '' }
            {num > 1 ? <Feautures value={3} fesup={this.props.product_features.Category_Features_Supported} /> : '' }
            {num > 2 ? <Feautures value={6} fesup={this.props.product_features.Category_Features_Supported} /> : '' }
            {num > 3 ? <Feautures value={9} fesup={this.props.product_features.Category_Features_Supported} /> : '' }
            {num > 4 ? <Feautures value={12} fesup={this.props.product_features.Category_Features_Supported} /> : '' }
            {num > 5 ? <Feautures value={15} fesup={this.props.product_features.Category_Features_Supported} /> : '' }
            {num > 6 ? <Feautures value={18} fesup={this.props.product_features.Category_Features_Supported} /> : '' }

            
        </div>
        );
    }
}

export default smartsheet;
