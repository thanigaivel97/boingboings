import './mainapp.css'
import linkedin from './fbopp.png'
import fb from './linkedin.png'
import twitter from './twitter.png'
import insta from './insta.png'
import Smartsheet from  '../smartsheet/smartsheet'
import Smartech from '../smarttechdetails/smartech'
import Reachout from '../reachoutdata/reachout'
import awards from './awards.png'
import Pricingf from '../outerpricing/outerpricing'
import awardsimage from './awardstitlle.png'
import Alternative from '../alternatives/outeralter'
import Topcustom from '../topcustomers/topcustom'
import Searchbox from '../../prodpage/searchbar/search'
import fs from 'fs'

import productsjson from '../prod.json'

// import files from '../../files'




import React, { Component } from 'react'

export default class mainapp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prod : {
                "productImageUrl": "https://images.saasworthy.com/web_2980_logo_1587552638_vsudb.jpg",
                "productname": "10Web",
                "productsubtitle": "Platform for Building, Hosting, and Managing WordPress Websites",
                "productsoftwarescore": "86%",
                "prodnofratings": "",
                "proddescription": "10Web offers solutions to manage the WordPress website creation process, designing and maintenance. The user can build the website by using the products of 10Web such as Hosting, Website Builder, and Plugins. The user can choose from a wide variety of templates available. It offers over 50 plugins to broaden the functionality of the website, for example, google maps, photo gallery, form maker, and more. Users can customize the website using elementor enhanced with their premium widgets. 10Web is powered by Google Cloud, making it fast and secure. It provides the user with backup, security, Search Engine Optimisation and Image Optimisation options that help to make their websites better. User can automatically migrate their existing websites to 10Web. The tool claims that users can build websites in significantly less time and manage them easily. 10Web offers a convenient way to set up a website from a single dashboard. Users can get overview reports for each website’s updates, performance, backups, security, rankings, image optimisation, SEO and more.",
                "LinkedInProfileURL": "https://www.linkedin.com/company/10web",
                "LinkedInProfileFollowers": "516",
                "TwitterProfileURL": "https://twitter.com/10Web_io",
                "TwitterProfileFollowers": "1,737",
                "FacebookProfileURL": "https://www.facebook.com/10Web.io/",
                "FacebookProfileFollowers": "3,683",
                "InstagramProfileURL": "https://www.youtube.com/user/WebDorado88",
                "InstagramProfileFollowers": "",
                "awards": [],
                "Location": "Newark, Delaware - 19711",
                "phonenumber": " ",
                "SupportRequestHandling": [
                  "Online"
                ],
                "TypeOfCustomerSupported": [
                  "Freelancers",
                  "Large Enterprises",
                  "Medium Business",
                  "Small Business"
                ],
                "Deployment": [
                  "SaaS/Web/Cloud"
                ],
                "catogoriessupport": [],
                "pricingModel": "Free Trial , Subscription",
                "plandetails": [
                  {
                    "plantitle": "Personal",
                    "planprices": "$12.50 /Month",
                    "feautures": [
                      "30 connected sites",
                      "WordPress installs : 1",
                      "Monthly Visits : 25000",
                      "30 plus 10Web Premium Widgets",
                      "Premium Website Templates",
                      "Website Templates",
                      "50 plus Premium Plugins",
                      "Backup Solution",
                      "High-Class Security",
                      "Website Speed",
                      "SEO",
                      "Analytics",
                      "Technical Support"
                    ]
                  },
                  {
                    "plantitle": "Premium",
                    "planprices": "$35 /Month",
                    "feautures": [
                      "40 connected sites",
                      "Includes features of Personal plan, plus",
                      "3 hosted sites",
                      "100000 monthly visitors",
                      "10 GB SSD Storage"
                    ]
                  },
                  {
                    "plantitle": "Enterprise",
                    "planprices": "$100 /Month",
                    "feautures": [
                      "50 connected sites",
                      "Includes features of Premium plan, plus",
                      "10 hosted sites",
                      "400000 monthly visitors",
                      "40 GB SSD Storage"
                    ]
                  },
                  {
                    "plantitle": "Basic (Bundle)",
                    "planprices": "$75One-time Payment",
                    "feautures": [
                      "6 months access to Updates",
                      "6 months premium Support",
                      "3 domains Supported",
                      "15 plus Premium WordPress Plugins",
                      "35 plus Premium Plugin Extensions",
                      "Lifetime Use of All Plugins"
                    ]
                  },
                  {
                    "plantitle": "Standard (Bundle)",
                    "planprices": "$100One-time Payment",
                    "feautures": [
                      "Includes features of Basic plan"
                    ]
                  },
                  {
                    "plantitle": "Advanced (Bundle)",
                    "planprices": "$170One-Time Payment",
                    "feautures": [
                      "1 year access to Updates",
                      "1 year premium Support",
                      "Includes features of Standard plan"
                    ]
                  }
                ],
                "productalternatelink": "https://www.saasworthy.com/product-alternative/2980/10web-io",
                "Customers": [],
                "catergoryfuturessuportedmap": {
                  "categoryName": [
                    "Website Builder Software Features"
                  ],
                  "Category_Features_Supported": [
                    {
                      "feature": "SEO Management",
                      "featuredescription": "Allows to optimize the website to support easy indexing by search engines"
                    },
                    {
                      "feature": "Landing Pages (Web Forms)",
                      "featuredescription": "A webform or a popup which can be used to capture the lead or ask user his preferences"
                    },
                    {
                      "feature": "Surveys",
                      "featuredescription": "Optimize survey response rate with A/B testing"
                    },
                    {
                      "feature": "Drag and Drop",
                      "featuredescription": "Makes designing easy by simple drag and drop of symbols and elements."
                    },
                    {
                      "feature": "Content Import-Export",
                      "featuredescription": "Helps in displaying the list of content to be exported and imported and also facilitates editing the list"
                    },
                    {
                      "feature": "WYSIWYG Editor",
                      "featuredescription": "Helps to edit in real time while building the website using the software"
                    },
                    {
                      "feature": "Templates",
                      "featuredescription": "Templates are patterns that help to provide the layout to build and design a website quickly."
                    },
                    {
                      "feature": "Newsletter Management",
                      "featuredescription": "Sends emails regarding new products, campaigns etc to targeted customers"
                    },
                    {
                      "feature": "Auto update",
                      "featuredescription": "Ensures your software is up to date by downloading updates automatically"
                    },
                    {
                      "feature": "Online Booking",
                      "featuredescription": "Facilitates your customer doing an online reservation or booking for shows or any event or service from your website"
                    },
                    {
                      "feature": "Online Store Builder",
                      "featuredescription": "Helps to build an e-commerce store on the website."
                    }
                  ]
                }
              },
            acc : []
        }
    }
    componentDidMount(){
      console.log("hello")
      console.log(this.props.proddetails)
      this.setState({
        acc : this.props.proddetails
      } , () => {
        console.log("updated" , this.state.acc.awards.length)
      })
      console.log(this.props.support)
     


    }
    render() {
        return (
            <div className="overall">
                <Searchbox/>

                
                <div className="insideoverall">
                    <div className="topmainpart">
                        <div className="Smartsheet">
                            <div className="toppart">
                              {this.state.acc ?<h1 className="insidetop" >{this.state.acc.productname}</h1> : '' }
                                   {/* <h1 className="insidetop" >{this.state.prod.productname}</h1> */}
    
                            </div>
                            <div className="subtittle">
                                <div className="rating">
    
                                </div>
                                <div className="subsubtitle">

                                    
                                        <p className="An-award-winning-bus"> {this.state.acc.productsubtitle} </p>
                                </div>
    
                            </div>
    
                        </div>
                        <div className="foricon">
                            <img className="iconimage" src={this.state.acc.productImageUrl} alt="productlogo"></img>
    
                        </div>
    
    
                    </div>
    
                    <div className="getdemobutton">
                        <button className="insidebutton"><span className="buttontext">Contact Sales</span></button>
    
                    </div>
                    {this.state.acc.productsoftwarescore ?<div className="softwarescore">
                      
                      <p className="The-software-score-i">The software score is <span className="forpercentage"> {this.state.acc.productsoftwarescore} </span></p>

                  </div> : '' }
                    
                    <div className="textdescriptionpart">
    
                        <p className="SmartSheet-is-an-int "> {this.state.acc.proddescription} </p>
    
                    </div>
                    <div className="socialprofile">
                        <div className="social">
                            <h1 className="Social-Profile-Follo">Social Profile Follower Score</h1>
    
                        </div>
                        <div className="forlogossocial">
                            <div className="insidesocial">
                              {
                                this.state.acc.LinkedInProfileFollowers === "" ? '' :  <div className="linkedin">
                                <img className="Social-media_Instagram-512" src={linkedin}  alt="linkedin"></img><span className="foll"> {this.state.acc.LinkedInProfileFollowers} </span>

                            </div>
                              }
                               
                                {
                                  this.state.acc.TwitterProfileFollowers === "" ? '' : <div className="linkedin">    
                                      <img className="Social-media_Instagram-512" src={twitter} alt="twitter"></img><span className="foll">  {this.state.acc.TwitterProfileFollowers} </span>

                                 </div>
                                }
                                
                                {
                                  this.state.acc.FacebookProfileFollowers === "" ? '' : <div className="linkedin">
                                      <img className="Social-media_Instagram-512" src={fb} alt="fb"></img><span className="foll"> {this.state.acc.FacebookProfileFollowers} </span>
                                  </div>
                                }
                                
                                {
                                  this.state.acc.InstagramProfileFollowers === "" ? '' : <div className="linkedin">
                                        <img  className="Social-media_Instagram-512" src={insta} alt="insta"></img><span className="foll">  {this.state.acc.InstagramProfileFollowers} </span>
                                  </div>
                                }
                                
                               
    
                            </div>
    
                        </div>


                        { this.props.awards.length === 0 ? "" : 
                        <div className="awardsbox">
    
                            <div className="awardsboxinside">
                                <div className="trophy">
                                    <img className="Trophy-2" src={awardsimage} alt="awards" ></img>
                                </div>
                                <div className="awardstitle">
                                Awards
                                </div>
                               
    
                            </div>
                            <div className="hellosout">
                                <div className="hellos">
                                        <div className="firstbox">
                                            <div>
                                                <img className="Group" src={awards} alt="awards" />
                                                
                                            </div>
                                            <div className="footertitle">
                                                Fast Growing
    
                                            </div>
                                            
                                        </div>
                                        <div className="firstbox">
                                            <div>
                                                <img className="Group" src={awards} alt="awards" />
                                                
                                            </div>
                                            <div className="footertitle">
                                                Fast Growing
    
                                            </div>
                                            
                                        </div>
    
                                </div>
                                <div className="hellos">
                                            <div className="firstbox">
                                                <div>
                                                    <img className="Group" src={awards} alt="awards" />
                                                    
                                                </div>
                                                <div className="footertitle">
                                                    Fast Growing
    
                                                </div>
                                                
                                            </div>
                                            <div className="firstbox">
                                                <div>
                                                    <img className="Group" src={awards} alt="awards" />
                                                    
                                                </div>
                                                <div className="footertitle">
                                                    Fast Growing
    
                                                </div>
                                                
                                            </div>
    
                                </div>
    
    
                            </div>
    
    
                        </div> }
    
    
                        <div className="smrtsheetfeautures">
                            <div className="smartsheettittle">{this.state.acc.productname} Features</div>
                                    <Smartsheet catname={this.props.features.categoryName} product_features={this.props.features} />
                                    {/* <Smartsheet />  */}
    
                        </div>
    
                        <div>
                            <div className="SmartSheet-Technical">{this.state.acc.productname} Technical Details</div>

                    
                            <Smartech support={this.props.support} typeofcus={this.props.customer} 
                            deployment={this.props.deployment} />
                        </div>
    
                        <div>
                            <div className="How-to-reachout-deta">How to reachout details</div>
                            <Reachout location={this.state.acc.Location} phonenumber={this.state.acc.phonenumber}  />
    
                        </div>
    
                        <div>
    
                            <div className="SmartSheet-Pricing">{this.state.acc.productname} Pricing</div>
                            <div className="text-style-1 " >{this.state.acc.productname} supports <span className="Smartsheet-supports"> {this.state.acc.pricingModel} </span> </div>
                            <Pricingf plandetails={this.props.plandetails} />
                        </div>
    
                        <div>
                            <div className="SmartSheet-Alternati">SmartSheet Alternatives</div>
                            <Alternative />
                            <div className="See-More">
                                <span className="See-More">See More</span>
    
                            </div>
                        </div>
    
    
                        {this.props.cus.length ===0 ? "" : <div>
                            <div className="Top-Customers">Top Customers</div>
                           <Topcustom ></Topcustom>
                        </div>}
                        
    
                    </div>
    
    
                </div>
    
                
            </div>
        )
    }
}
