import React from 'react';
import GetDemo from './GetDemo'


import Header from './Header';
import Footer from './Footer';

class MainBody extends React.Component {

	
componentDidMount(){
	let url = this.props.match.params.item;
  
	console.log(url)
  }


	render() {
		return (
<div className="mainbody">
	<Header />
<GetDemo item={this.props.match.params.item} />
<Footer />

</div>
			)
	}
}



export default MainBody;