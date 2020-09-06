import React, { Component } from 'react'
import './index.css'
import Searchbox from '../prodpage/searchbar/search'
import prod from './productcatogory.json'
import prodDes from './catprod.json'
import {NavLink} from 'react-router-dom'

export default class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : ""

        }
    }

    componentDidMount(){
        // console.log(prod.categoryName)
        // console.log(this.props.match.params.id)
        let url = this.props.match.params.id;
        let changedurl = url.toUpperCase()
        let replacedurl = changedurl.replace("-" , " ")
        let replacedurlv = replacedurl.replace("-" , " ")
        let replacedurla = replacedurlv.replace("-" , " ")
        let replacedurlb = replacedurla.replace("-" , " ")



        this.setState({
            id : replacedurlb
        })
    }
    render() {
        return (
            <div>
                <Searchbox />
                <div className="container bg-color">

                    <div className="text-center"><span className="over-title">{prodDes.map((ite,index) =>  {
                        // let match = this.props.match.params.id;
                        // console.log(this.state.id)
                        return ite.cathead.toUpperCase() === this.state.id ? ite.cathead : null;
                    })  } </span></div>

                    <div className="text-center des-width"><p className="description"> {prodDes.map((ite,index) =>  {
                        // let match = this.props.match.params.id;
                        return ite.cathead.toUpperCase() ===this.state.id ? ite.catdescrip : null;
                    })  } </p></div>


                    {
                        prod.map((ite ,index) => {
                            //  console.log(ite.categoryName.toUpperCase())
                            // let match = this.props.match.params.id;
                            let prodnamesforurl = ite.productName;
                            let replaced = prodnamesforurl.replace(" " , "-");
                            let replacedr = replaced.replace(" ","-");
                            let replacedrf = replacedr.replace(" ", "-")

                            return ite.categoryName.toUpperCase() === this.state.id  ? <div className="prod-section-outer">  <div  className="prod-section">
                            <div className="prod-image">
                            <a className="aproperties" href={'/product/' + replacedrf}> <img  className="prod-image-inner-i" src={ite.productImageURL} alt="d" /></a>
                               
                               
                            </div>
                            <div className="prod-outer">
                                <div className="prod-section-inner">
                                    <div className="top-section">
                                        <div className="prod-title"><a className="aproperties" href={'/product/' + replacedrf}><span className="prod-title-inner"> {ite.productName} </span></a></div>
                                        <div className="prod-subtitle"><span className="prod-subtitle-text"> {ite.productSubtitle} </span></div>
                                    </div>
                                    <div className="top-middle">
                                        {ite.productRating === "" ? '' : <div className="prod-score"><span className="prod-score-inner">Score is <span className="prod-score-rating"> {ite.productRating} </span></span> </div> }
                                        <div className="prod-content"><p className="prod-content-inner"> {ite.productDescription} <a className="aproperties prod-readmore" href={'/product/' + replacedrf}><span className="prod-readmore">read more</span></a> </p></div>
                                    </div>
                                 
    
                                </div>
    
                            </div>
                        </div>
                        <div className="bt-class">
                             <button className="cotact-sales"><a href={"/setup-demo/" +replacedrf } className="contact-sales-text"> Contact Sales</a></button>     
                         </div>
                        
                         </div> : ''
                        })
                    }
                   

                    {/*simply example  */}

                    {/* <div className="prod-section">
                        <div className="prod-image">
                            <img src="fdf" alt="d" />
                        </div>
                        <div className="prod-outer">
                            <div className="prod-section-inner">
                                <div className="top-section">
                                    <div className="prod-title"><span className="prod-title-inner">SmartSheet</span></div>
                                    <div className="prod-subtitle"><span className="prod-subtitle-text">An award winning business App</span></div>
                                </div>
                                <div className="top-middle">
                                    <div className="prod-score"><span className="prod-score-inner">Score is <span className="prod-score-rating">94%</span></span> </div>
                                    <div className="prod-content"><p className="prod-content-inner">SmartSheet is an intuitive project management software and collaboration tool that is useful for small and mid-size organizations to track and manage various types of work. Besides project management, it assists <span className="prod-readmore">read more</span></p></div>
                                </div>

                            </div>

                        </div>

                    </div> */}

                    {/* end */}

                </div>
                
            </div>
        )
    }
}
