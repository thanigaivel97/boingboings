import React, { Component } from 'react'
import './search.css'
import json from '../../seperatecat/catprod.json'
import prod from './productnames.json'
import {NavLink} from 'react-router-dom'
import icon from '../searchicon.jpg'

export default class search extends Component {
    constructor(props){
        super(props);
        this.state = {
            libraries : [

                { name: 'Backbone.js'},
                { name: 'AngularJS'},
                { name: 'jQuery'},
                { name: 'Prototype'},
                { name: 'React'},
                { name: 'Ember'},
                { name: 'Knockout.js'},
                { name: 'Dojo'},
                { name: 'Mootools'},
                { name: 'Underscore'},
                { name: 'Lodash'},
                { name: 'Moment'},
                { name: 'Express'},
                { name: 'Koa'},
            
            ],
            searchvalue : "",
            showcontrol : false
            
        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    componentDidMount(){
        // json.map(ite => {
        //     console.log(ite.cathead)

        // })

    }

    changeHandler(event){
        this.setState({
            searchvalue : event.target.value,
            showcontrol : true
        })
    }

    render() {
        let prodnames = json;

        let produc = prod ;
       
        let search = this.state.searchvalue.trim().toLowerCase();
        if (search.length > 0) {
            prodnames = prodnames.filter(function(user , index) {

                // console.log(user.cathead)
              return  user.cathead.toLowerCase().match(search) ;
            });
          }

          if (search.length > 0) {
            produc = produc.filter(function(user,index) {
              return user.toLowerCase().match(search) ;
            });
          }

        return (
            <div className="entirepage">


        <div className="top-boing">
             <div className="inner-h">
               <div className="img-boing">
                 {/* <img  className="BOING-BOING-Copy" src={Logo} alt="img" /> */}
                 <a  href="/" className="boing-txt">  BOING BOING </a><span className="will-make-your-produ">will make your product purchase a breeze</span>
               </div>
               <div>

                      
                <div className="prodsearchsd ">
                   
                {/* <i className="search-icon fas fa-search"></i> */}
                {/* <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a> */}
                <input  onChange={this.changeHandler} placeholder="Enter product name, software category, service name.. " className={search.length > 0 ? "Rectangleforinputon " : "Rectangleforinput" } type="text" />
                    <div className={this.state.showcontrol && search.length > 0 ? "border " : " border enclosed" }>
                        <div className="catlist">
                            <span className="Categories">Categories</span>
                            {prodnames.length === 0 ? <li className="margin"><span className="sales">No Category Found</span></li> :
                            prodnames.map((l,index) => {
                                return ( index <=4 ?
                                <li className="margin">
                                    <span className="Sales">{l.cathead} </span>
                                    
                                </li> : ''
                                );
                            })}

                        </div>
                        <div className="prodlist">
                            <span className="Categories">Products</span>
                            {produc.length === 0 ? <li className="margin"><span className="sales">No Products Found</span></li> :
                            produc.map((l,index) => {
                                return (  index <=4 ? 
                                <li className="margin">
                                    <span className="Sales">{l} </span>
                                    
                                </li> : ''
                                );
                            })}

                        </div>


                    </div>

                   
                      
               </div>



               </div>


             </div>
           </div>




   
                
            </div>
        )
    }
}
