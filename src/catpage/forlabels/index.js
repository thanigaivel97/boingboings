import React, { Component } from 'react'
import json from '../allcat/cat.json'
import {NavLink , Link} from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <div className="" id={this.props.hre ? `${this.props.hre}` : '' }>
                    <button  className={this.props.color}>
                            <a className={this.props.color} href="/"><span className="fortext"> {this.props.name} </span></a>
                    </button>

                    <ul>
                    {
                        json.map((ite ,index) =>{
                        // console.log(ite.supercatagory.trim().toUpperCase())
                        // console.log(ite.catname.toLowerCase())
                        let  name = ite.catname.toLowerCase();
                        let replace = name.replace(" " , "-")
                        let replaced = replace.replace(" " , "-")
                        let replacedv = replaced.replace(" " , "-")
                        // console.log(replacedv)
                        return ite.supercatagory.trim().toUpperCase() === this.props.name ?  <li key={replacedv} className="liitems">
                           <a className="link" href={'/categories/' + replacedv} >{ite.catname}</a></li> : null

                        })
                    }
                    </ul>

            </div>
        )
    }
}
