import React, { Component } from 'react';
import productsjson from '../prod.json'
import MainApp from './mainapp'

class index extends Component {
    constructor(props){
        super(props);
        this.state = { 
            prod : [],
            url : ''
        }
        // this.renderproducts = this.renderproducts.bind(this)
    }
    componentDidMount(){
        // listReactFiles('../../files').then(files => console.log(files)).catch(err =>{
        //   console.log(err)
        // })
        
        let url = this.props.match.params.url;
        let changedurl = url.toUpperCase()
        let replacedurl = changedurl.replace("-" , " ")
        let replacedurlv = replacedurl.replace("-" , " ")
        let replacedurla = replacedurlv.replace("-" , " ")
        let replacedurlb = replacedurla.replace("-" , " ")
        this.setState({url: replacedurlb})
    
  
  
      }

   
    render() {
      
        return (
            <>
           {
             productsjson.map(ite => {
                // console.log(ite.)
                // console.log(ite.productname)
                  return ite.productname ? ite.productname.toUpperCase() === this.state.url ? <MainApp 
                  support={ite.SupportRequestHandling} deployment={ite.Deployment}  
                  plandetails={ite.plandetails} customer={ite.TypeOfCustomerSupported}
                  cus={ite.Customers} features={ite.catergoryfuturessuportedmap} awards={ite.awards}  proddetails={ite} /> : ''  : ''
                
            })}
           
            </>
        );
    }
}

export default index;