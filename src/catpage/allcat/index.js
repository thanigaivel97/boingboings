import React, { Component } from 'react'
import './index.css'
import Searchbox from '../../prodpage/searchbar/search'
import json from './cat.json'
import jsons from '../../seperatecat/catprod.json'
import Labelforcat from '../forlabels/index'
import Logo from './logo.png'
import '../../prodpage/searchbar/search.css'


//search

import prod from '../../prodpage/searchbar/productnames.json'

export default class index extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchvalue : "",
      showcontrol : false
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
    componentDidMount() {
        // console.log(json)
    }
    changeHandler(event){
      this.setState({
          searchvalue : event.target.value,
          showcontrol : true
      })
  }

    render() {
      let prodnames = jsons;

      let produc = prod ;
     
      let search = this.state.searchvalue.trim().toLowerCase();
      if (search.length > 0) {
          prodnames = prodnames.filter(function(user , index) {

              // console.log(user.cathead)
            return   user.cathead.toLowerCase().match(search);
          });
        }

        if (search.length > 0) {
          produc = produc.filter(function(user,index) {
            return user.toLowerCase().match(search);
          });
        }
        const NameColor = [
            { name: "ARTIFICIAL INTELLIGENCE", color: "colorgreen", hre: "ai" },
            { name: "E-COMMERCE", color: "colorblue", hre: "ec" },
            { name: "EMAIL MARKETING", color: "colorgreen", hre: "em" },
            { name: "DIGITAL ADVERTISING/MARKETING", color: "colorsandal", hre: "dm" },
            { name: "DEVELOPMENT TOOLS", color: "colorpink", hre: "dt" },
            { name: "CMMS SOFTWARE", color: "coloryellow", hre: "cmms" },
            { name: "CRM", color: "colorgreen", hre: "crm" },
            { name: "ERP", color: "colorlightyellow", hre: "erp" },
            { name: "COLLABORATION & PRODUCTIVITY", color: "colorsandal", hre: "cp" },
            { name: "CONTENT MANAGEMENT", color: "colorgreen", hre: "cm" },
            { name: "CYBERSECURITY SERVICES", color: "colorblue", hre: "cys" },
            { name: "DESIGN SOFTWARES", color: "colorpink", hre: "ds" },
            { name: "IT INFRASTRUCTURE", color: "colorblue", hre: "iti" },
            { name: "LEGAL", color: "coloryellow", hre: "legal" },
            { name: "VERTICAL INDUSTRY SOFTWARE", color: "colorblue", hre: "vis" },
            { name: "MARKETING SERVICES", color: "colorpink", hre: "ms" },
            { name: "SUPPLY CHAIN & LOGISTICS", color: "colorgreen", hre: "scl" },
            { name: "HR", color: "colorsandal", hre: "hr" },
            { name: "PROJECT MANAGEMENT", color: "colorgreen", hre: "pm" },
            { name: "SALES", color: "colorpink", hre: "sal" },
            { name: "RECENTLY LAUNCHED SOFTWARES", color: "colorgreen", hre: "rls" },
            { name: "SEO", color: "coloryellow", hre: "seo" },
            { name: "PLM", color: "colorblue", hre: "plm" }
        ]
        return (
            <div className="">
           <Searchbox />
           
            <div className="catouter bg-color">
              <div className="catinner">
                <div className="top-part">
                  <div className="p-20">
                      <span className="Browse-Software-Cate">Browse Software Category</span>
                  </div>
                  <div  className="p-20">
                    <span className="Find-what-youve-bee">Find what you’ve been looking for with BoingBoing’s list of categories or  by directly searching your product</span>

                  </div>

                </div>
                <div className="forlab">
                  <button className="colorgreen">
                    <a className="colorgreen" href="#ai">
                      
                      <span className="fortext"> Artificial Intellegence </span>
                    </a>
                  </button>
                  <button className="colorblue">
                    <a className="colorblue" href="#ec">
                      
                      <span className="fortext"> E - Commerce </span>
                    </a>
                  </button>
                  <button className="colorsandal">
                    <a className="colorsandal" href="#em">
                      
                      <span className="fortext"> Email Marketing </span>
                    </a>
                  </button>
                </div>
                <div className="forlab">
                  <button className="colorpink">
                    <a className="colorpink" href="#dm">
                      
                      <span className="fortext"> Digital Advertising / Marketing </span>
                    </a>
                  </button>
                  <button className="coloryellow">
                    <a className="coloryellow" href="#cad">
                      
                      <span className="fortext"> CAD </span>
                    </a>
                  </button>
                  <button className="colorgreen">
                    <a className="colorgreen" href="#dt">
                      
                      <span className="fortext"> Development Tools </span>
                    </a>
                  </button>
                </div>
                <div className="forlab">
                  <button className="colorlightyellow">
                    <a className="colorlightyellow" href="#cmms">
                      
                      <span className="fortext"> CMMS Software </span>
                    </a>
                  </button>
                  <button className="colorsandal">
                    <a className="colorsandal" href="#crm">
                      
                      <span className="fortext"> CRM </span>
                    </a>
                  </button>
                  <button className="colorgreen">
                    <a className="colorgreen" href="#erp">
                      
                      <span className="fortext"> ERP </span>
                    </a>
                  </button>
                  <button className="colorblue">
                    <a className="colorblue" href="#cp">
                      
                      <span className="fortext"> Collboration & Productivity </span>
                    </a>
                  </button>
                </div>
                <div className="forlab">
                  <button className="colorpink">
                    <a className="colorpink" href="#cm">
                      
                      <span className="fortext"> Content Management </span>
                    </a>
                  </button>
                  <button className="colorblue">
                    <a className="colorblue" href="#cys">
                      
                      <span className="fortext"> Cyber Security Services </span>
                    </a>
                  </button>
                  <button className="coloryellow">
                    <a className="coloryellow" href="#ds">
                      
                      <span className="fortext"> Design Software </span>
                    </a>
                  </button>
                </div>
                <div className="forlab">
                  <button className="colorold">
                    <a className="colorold" href="#iti">
                      
                      <span className="fortext"> IT Infrastructure </span>
                    </a>
                  </button>
                  <button className="colorpink">
                    <a className="colorpink" href="#fia">
                      
                      <span className="fortext"> Financial / Accounting Software </span>
                    </a>
                  </button>
                  <button className="colorgreen">
                    <a className="colorgreen" href="#endregion">
                      
                      <span className="fortext"> IT Management </span>
                    </a>
                  </button>
                </div>
                <div className="forlab">
                  <button className="colorsandal">
                    <a className="colorsandal" href="#legal">
                      
                      <span className="fortext"> Legal </span>
                    </a>
                  </button>
                  <button className="colorgreen">
                    <a className="colorgreen" href="#vis">
                      
                      <span className="fortext"> Vertical Industry Software </span>
                    </a>
                  </button>
                  <button className="colorpink">
                    <a className="colorpink" href="#ms">
                      
                      <span className="fortext"> Marketing Services </span>
                    </a>
                  </button>
                </div>
                <div className="forlab">
                  <button className="colorold">
                    <a className="colorold" href="#scl">
                      
                      <span className="fortext"> Supply Chain & Logistics </span>
                    </a>
                  </button>
                  <button className="coloryellow">
                    <a className="coloryellow" href="#hr">
                      
                      <span className="fortext"> HR </span>
                    </a>
                  </button>
                  <button className="colorblue">
                    <a className="colorblue" href="#pm">
                      
                      <span className="fortext"> Project Management </span>
                    </a>
                  </button>
                </div>
                <div className="forlab">  
                  <button className="colorblue">
                    <a className="colorblue" href="#sal">
                      
                      <span className="fortext"> Sales </span>
                    </a>
                  </button>
                  <button className="colornew">
                    <a className="colornew" href="#rls">
                      
                      <span className="fortext"> Recently Launched Software </span>
                    </a>
                  </button>
                  <button className="colorlightyellow">
                    <a className="colorlightyellow" href="#seo">
                      
                      <span className="fortext"> SEO </span>
                    </a>
                  </button>
                  <button className="colorgreen">
                    <a className="colorgreen" href="#plm">
                      
                      <span className="fortext"> PLM </span>
                    </a>
                  </button>
                </div>



                <div className="catbottom bg-color">
              {NameColor.map((ite, index) => {
                return (
                  <Labelforcat
                    key={index}
                    name={ite.name}
                    color={ite.color}
                    hre={ite.hre}
                  />
                );
              })}
            </div>

              </div>
            </div>

            {/* for the bottom id parts */}

            {/* <div className="catbottom bg-color">
              {NameColor.map((ite, index) => {
                return (
                  <Labelforcat
                    key={index}
                    name={ite.name}
                    color={ite.color}
                    hre={ite.hre}
                  />
                );
              })}
            </div> */}
          </div>

        )
    }
}