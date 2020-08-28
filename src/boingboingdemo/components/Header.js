import React from 'react';
import logo from '../files/Screenshot 2020-06-30 at 8.57.06 AM.png'
import '../component-css/Header.css'

class Header extends React.Component {
	render() {
		return (
<div className="header">
<img src={logo} alt="boing boing" className="image"></img> |
    BoingBoing - Your single shop for getting a B2B Software Product Demo 

</div>
			)
	}
}

export default Header;