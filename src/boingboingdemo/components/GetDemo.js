import React from 'react';
import '../component-css/GetDemo.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Example from './Example';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CustomizedSnackbars from './CustomizedSnackbars'
import Autocomplete from '@material-ui/lab/Autocomplete';
import amplitude from 'amplitude-js'

import Search from './search'



import dataofproducts from '../data/productnames.json'

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};






class GetDemo extends React.Component {


	
	constructor(props) {
    super(props)
    this.snackbar = React.createRef();
    

    this.state = {
      value: '',
      list: [],
      firstName: '',
      lastName: '',
      companyName: '',
      companyEmailID: '',
      phoneNumber: '',
      country: '',
      comments: '',
      allowSubmit: false,
      firstNameError: '',
      lastNameError: '',
      companyNameError: '',
      companyEmailIDError: '',
      phoneNumberError: '',
      countryError: '',
      commentsError: '',
      listError: '',
      expectedbudget : '',
      currentrole : '',
      desisionofpur : '',
      changedinurorganisation : '',
      dropdownvalues : [
        "1 to 10","10 to 50","50 to 200","200 to 500","500 to 1000","1000 to 5000", "5000 plus"

      ],
      employeenumbers : '',
      employeenumberserror : '',
      questionone : '',
      questiontwo :'',
      questionthree : '',
      questionfour : ''
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onChangeCompanyEmailID = this.onChangeCompanyEmailID.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);

    this.onAddItem = this.onAddItem.bind(this);
    this.onClickGetDemo = this.onClickGetDemo.bind(this);

    this.onChangeValuedrop = this.onChangeValuedrop.bind(this);


    this.onChangeexpectedbudget = this.onChangeexpectedbudget.bind(this);
    this.onChangeCurrentrole = this.onChangeCurrentrole.bind(this);
    this.desisionofpur = this.desisionofpur.bind(this);
    this.changedinurorganisation = this.changedinurorganisation.bind(this);


}

componentDidMount(){
  this.setState({value : this.props.item})
}


onChangeValuedrop = event =>{
  this.setState({employeenumbers : event.target.value});
}

onChangeexpectedbudget = event =>{
  this.setState({expectedbudget : event.target.value});
}

onChangeCurrentrole = event =>{
  this.setState({currentrole : event.target.value});
}
desisionofpur = event =>{
  console.log(event.target.value)
  this.setState({desisionofpur : event.target.value});
}

changedinurorganisation = event =>{
  console.log(event.target.value)
  this.setState({changedinurorganisation : event.target.value});
}


onChangeFirstName = event => {
    this.setState({ firstName: event.target.value });
   };


onChangeLastName = event => {
    this.setState({ lastName: event.target.value });
  };

  
onChangeCompanyName = event => {
	this.setState({ companyName: event.target.value });
	};

onChangeCompanyEmailID = event => {
    this.setState({ companyEmailID: event.target.value });
  };

onChangePhoneNumber = event => {
    
    this.setState({ phoneNumber: event.target.value });
  };

onChangeCountry = event => {
    this.setState({ country: event.target.value });
  };

onChangeComments = event => {
    this.setState({ comments: event.target.value });
  };


onClickGetDemo = () => {

  if(this.state.firstName.length < 1) {
    this.setState({ firstNameError: 'First Name cannot be empty ' });
    console.error(this.state.firstNameError);
  }
  else if (this.state.lastName.length < 1) {
    this.setState({ firstNameError: '' });
    this.setState({ lastNameError: 'Last Name cannot be empty' });
    console.log(this.state.lastNameError);
  }
  else if (this.state.companyName.length < 1) {
    this.setState({ lastNameError: '' });
    this.setState({ companyNameError: 'Company Name cannot be empty' });
    console.log(this.state.companyNameError);
  }else if(this.state.employeenumbers === ""){
    this.setState({ companyNameError: '' });
    this.setState({employeenumberserror : 'Employee number cant be empty'})
  }
  else if (this.state.country.length < 1) {
    this.setState({ employeenumberserror: '' });
    this.setState({ countryError: 'Country name cannot be empty' });
    console.log(this.state.countryError);
  }
  else if (this.state.phoneNumber.length !== 10) {
    this.setState({ countryError: '' });
    this.setState({ phoneNumberError: 'Phone number should be of 10 characters' });
    console.log(this.state.phoneNumberError);
  }else if(isNaN(this.state.phoneNumber)){
    this.setState({ countryError: '' });
    this.setState({ phoneNumberError: 'Accept numbers only' });
  }
  else if (!validEmailRegex.test(this.state.companyEmailID)) {
    this.setState({ phoneNumberError: '' });
    this.setState({ companyEmailIDError: 'Error is email format' });
    console.log(this.state.companyEmailIDError);
  }else if( this.state.expectedbudget === ""   ){
    this.setState({companyEmailIDError : ''});
    this.setState({questionone : "Fill in the details"})

  }else if(this.state.currentrole === ""){
    this.setState({questionone : ""});
    this.setState({questiontwo:"Fill in the details"})
  }else if(this.state.desisionofpur === ""){
    this.setState({questiontwo : ""});
    this.setState({questionthree:"Fill in the details"})
  }else if(this.state.changedinurorganisation === ""){
    this.setState({questionthree : ""});
    this.setState({questionfour:"Fill in the details"})
  }
  else if (this.state.list.length < 1 ) {
    this.setState({ questionfour: '' });
    this.setState({ listError: 'No company added to the list' });
    console.log(this.state.listError);
  }
  else {
    this.setState({countryError: ''})
    this.setState({questionone : ''})
    this.setState({questiontwo : ''})
    this.setState({questionthree : ''})
    this.setState({questionfour : ''})
    this.setState({ firstNameError: '' });
    this.setState({ lastNameError: '' });
    this.setState({ companyNameError: '' });
    this.setState({ companyEmailIDError: '' });
    this.setState({ phoneNumberError: '' });
    this.setState({ countryError: '' });
    this.setState({ commentsError: '' });
    this.setState({ listError: '' });
    this.setState({employeenumberserror : ''});






    console.log("First Name: "+this.state.firstName);
    console.log("Last Name: "+this.state.lastName);
    console.log("Company Name: "+this.state.companyName);
    console.log("Company Email ID: "+this.state.companyEmailID);
    console.log("Mobile Number: "+this.state.phoneNumber);
    console.log("Country: "+this.state.country);
    console.log("Comments: "+this.state.comments);
    console.log(this.state.expectedbudget + " " + this.state.currentrole + "  " + this.state.changedinurorganisation );
    console.log("third thing" + this.state.desisionofpur);
    console.log(this.snackbar);
      
    this.state.list.map(item => (console.log("Product:"+item)));
    
    const formdata = {
      firstname : this.state.firstName,
      lastname :this.state.lastName,
      companyname : this.state.companyName ,
      employeenumbers : this.state.employeenumbers,
      companyemailid : this.state.companyEmailID ,
      mobilenumber: this.state.phoneNumber,
      country:this.state.country,
      comments :this.state.comments,
      expectedbudget:this.state.expectedbudget ,
      currentrole:this.state.currentrole,
      changedinurorganisation:this.state.changedinurorganisation ,
      desisionofpor:this.state.desisionofpur,
      products: this.state.list
    }
    const userprop = {
      firstname : this.state.firstName,
      lastname :this.state.lastName,
      companyname : this.state.companyName ,
     
      companyemailid : this.state.companyEmailID ,
      mobilenumber: this.state.phoneNumber,
      country:this.state.country,
      comments : this.state.comments,
      currentrole : this.state.currentrole
      
    }
    const DemoSetupDone ={
      product : this.state.list,
      expectedbudget: this.state.expectedbudget,
      timeofdesision: this.state.desisionofpur,
      recentchanges : this.state.changedinurorganisation

    }
 
    console.log(formdata);

    amplitude.getInstance("boingboing").setUserProperties(userprop);
    amplitude.getInstance("boingboing").logEvent("Demo Setup Done" , DemoSetupDone);




    this.snackbar.current.handleClick();

    fetch('https://backboi.herokuapp.com/pro/details' , {
            method : 'POST',
            body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res=>{
            return res.json();
        }).then(res=>{
            console.log(res);
             
              this.setState({ firstName : '' ,lastName :'' , companyName: '' ,companyEmailID : '',
              phoneNumber: '',country: '',comments: '',expectedbudget: '',
              currentrole: '',changedinurorganisation: '',desisionofpur : '',
              changedinurorganisation: '',desisionofpur : '',desisionofpur : '',
              employeenumbers : '',list : []
            
            } ,() => {
              console.log(this.state)
            });
            
           
        }).catch(err => {

        })

  }

  };

 	
onChangeValue = event => {
    this.setState({ value: event.target.value });
  };
 
  onAddItem = () => {
    // not allowed AND not working
   
  
    
    this.setState(state => {
      const list = state.list.concat(state.value);
 
      return {
        list,
      };
    });
    const CustomProductName ={
      customproductname : this.state.value
    }
    amplitude.getInstance("boingboing").logEvent("Custom Product Entered" , CustomProductName);
    this.setState({value : ''});
  };

	render() {

    const amplitudeInstance = amplitude.getInstance("boingboing");
  amplitudeInstance.init("566d7c0b7b476bafb82e48ebf7fd3a45");
  amplitudeInstance.logEvent("Demo Page Visited");

  		return (
        <div>

          {/* <Search /> */}
        
        <div className="getdemo">

  			

        <div className="select-company">
  				<div className="enter-value-label">I want a demo of the following B2B software products</div> 
          <br></br>
              <Autocomplete
              	value={this.state.value}
            id="free-solo-demo"
            freeSolo
            options={dataofproducts.map((option) => option)}
            renderInput={(params) => (
              <TextField {...params}
              value={this.state.value}  onSelect={this.onChangeValue} 
              id="standard-basic" label="Product name" className="company-names" />	
            )}
          />


  			
  				<label className="error-message">
            <br/>
            {this.state.listError} <br/>
          </label>
          
          <Button variant="contained" color="primary"
  				onClick={this.onAddItem} disabled={!this.state.value} startIcon={<AddShoppingCartIcon />} >
  				Add</Button>
  				 


           <ul>
            {this.state.list.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>


  				<Example />	


  				</div>



  			<div className="personal-details">
  			<p  className="enter-value-label"> Here are my details</p>
  				
  				<TextField 
  				value={this.state.firstName} onChange={this.onChangeFirstName} 
  				id="standard-basic" label="First Name" className="personal-details" />	<br/>
          <label className="error-message">
            {this.state.firstNameError} <br/>
          </label>



  				<TextField 
  				value={this.state.lastName} onChange={this.onChangeLastName} 
  				id="standard-basic" label="Last Name" className="personal-details" />	<br/>
          <label className="error-message">
            {this.state.lastNameError} <br/>
          </label>

  				<TextField 
  				value={this.state.companyName} onChange={this.onChangeCompanyName} 
  				id="standard-basic" label="Company Name" className="personal-details" />	<br/>
          <label className="error-message">
            {this.state.companyNameError} <br/>
          </label>


         

  				<TextField 
  				value={this.state.companyEmailID} onChange={this.onChangeCompanyEmailID} 
  				id="standard-basic" label="Official Email ID" className="personal-details" />	<br/>
          <label className="error-message">
            {this.state.companyEmailIDError} <br/>
          </label>

  				<TextField 
  				value={this.state.phoneNumber} onChange={this.onChangePhoneNumber} 
  				id="standard-basic" label="Mobile Number" className="personal-details" />	<br/>
          <label className="error-message">
            {this.state.phoneNumberError} <br/>
          </label>

  				<TextField 
  				value={this.state.country} onChange={this.onChangeCountry} 
  				id="standard-basic" label="Country" className="personal-details" />	<br/>
          <label className="error-message">
            {this.state.countryError} <br/>
          </label>
            


            <TextField 
              value={this.state.comments} onChange={this.onChangeComments} 
              id="standard-basic" label="Any Comments " className="personal-details" />	<br/>
           
  		</div>





      <div className="select-company">
  				<div className="enter-value-label">Here are some questions</div> 
          <br></br>
         
          <label>What is the expected budget you have allocated for this purchase?</label><br></br>
         <TextField 	value={this.state.expectedbudget}
                fullWidth onChange={this.onChangeexpectedbudget} placeholder="Tell us about amount of $ you want to spend" />
          <label className="error-message">
            {this.state.questionone} <br/>
          </label>
         <br></br>
         <br></br>
         <br></br>
          
         <label>What is your current role in the organization?</label><br></br>
         <TextField 	value={this.state.currentrole}
                fullWidth onChange={this.onChangeCurrentrole} placeholder="Sr.Purchase Manager/Product Manager/Marketing Head" />
          <label className="error-message">
            {this.state.questiontwo} <br/>
          </label>
         <br></br>
         <br></br>
         <br></br>

         <label>How many number of employees do you have in your company?</label><br></br>
         <Autocomplete 	value={this.state.employeenumbers}
            id="free-solo-demo"
            freeSolo
            options={this.state.dropdownvalues.map((option) => option)}
            renderInput={(params) => (
              <TextField {...params}
              value={this.state.value}  onSelect={this.onChangeValuedrop} 
              id="standard-basic"  className="company-names" />	
            )}
          />
          <label className="error-message">
            {this.state.employeenumberserror} <br/>
          </label>

          <br></br>
        
         <br></br>



         <label>In how much time do you want to close on this decision of purchase? (In weeks)</label><br></br>
         <TextField 	value={this.state.desisionofpur}
                fullWidth onChange={this.desisionofpur} placeholder="Immediate / 10 Weeks / 15 Weeks" />
        <label className="error-message">
            {this.state.questionthree} <br/>
          </label>
         
         <br></br>
         <br></br>
         <br></br>

         
         <label>What has recently changed in your organization which led to this question around purchase?</label><br></br>
         <TextField 	value={this.state.changedinurorganisation}
                fullWidth onChange={this.changedinurorganisation} placeholder="Management priority / Customer Problem / Systemic Problem cleanup" />

        <label className="error-message">
            {this.state.questionfour} <br/>
          </label>
        

  				</div>




              



           
        </div>
        <div className="main-button">
                <Button variant="contained" color="primary"
                onClick={this.onClickGetDemo}
                >
                Setup demo now</Button>
                <CustomizedSnackbars ref={this.snackbar} />

              
                </div>

       </div>     
            
			)
	}
}



export default GetDemo;