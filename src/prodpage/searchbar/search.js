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
          
            searchvalue : "",
            showcontrol : false,
            popupVisible : false
            
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentDidMount(){
        // json.map(ite => {
        //     console.log(ite.cathead)

        // })

    }


        
    handleClick() {
        if (!this.state.popupVisible) {
        // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            popupVisible: !prevState.popupVisible,
        }));
    }
    
    handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return;
        }
        
        this.handleClick();
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
                 <a  href="/" className="boing-txt"> ZOIN ZOIN  </a><span className="will-make-your-produ">will make your product purchase a breeze</span>
               </div>
               <div>

                      
                <div className="prodsearchsd ">
                   
                {/* <i className="search-icon fas fa-search"></i> */}
                {/* <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a> */}
                <input  onChange={this.changeHandler} onClick={this.handleClick} ref={node => { this.node = node; }}  placeholder="Enter product name, software category, service name.. " className={search.length > 0 ?  "Rectangleforinputon " : "Rectangleforinput" } type="text" />

                {
                    this.state.popupVisible && (
                        <div className={this.state.showcontrol && search.length > 0 ? "border " : " border enclosed" }>
                        <div className="catlist">
                            <span className="Categories">Categories</span>
                            {prodnames.length === 0 ? <li className="margin"><span className="sales">No Category Found</span></li> :
                            prodnames.map((l,index) => {
                                return ( index <=4 ?
                                <li className="margin">
                                    <a className="sea" href={"/categories/" + l.cathead }><span className="Sales">{l.cathead} </span></a>

                                   
                                    
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
                                    <a  className="sea" href={"/product/" + l }><span className="Sales">{l} </span></a>
                                    
                                    
                                </li> : ''
                                );
                            })}

                        </div>
                    </div>

                    )
                }    


                    

                   
                      
               </div>



               </div>


             </div>
           </div>




   
                
            </div>
        )
    }
}
