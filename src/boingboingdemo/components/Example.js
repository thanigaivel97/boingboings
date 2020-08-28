import React from 'react';
import '../component-css/Example.css';


class Example extends React.Component {
	render() {
		return (
			<div class="example-main">
				<div className="example-main-heading">Following Product demo are taken in the last 10 minutes.</div>
				<ul>
				<li>Salesforce</li>
				<li>Mailchimp</li>
				<li>Marketo</li>
				<li>Pendo</li>
				<li>Slack</li>
				
				</ul>
			</div>	
			)
	}
}


export default Example;