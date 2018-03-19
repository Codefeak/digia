import React, { Component } from 'react';
import RegisterList from './RegisterList';
import uniqid from 'uniqid';
import './registerList.css';


class SignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
      fullName: '',
      fullNameError:'',
      email: '',
      emailError:'',
      phoneNumber: '',
      phoneNumberError:'',
      key:'',
      participants:[
        { id:0, name:'Susana Huolto',
          email: 'susanna.huolto@digia.com',
          phoneNumber:'0445566256',
          key:uniqid()},
        { id:1, name: 'Susanna Maharjan',
          email: 'susanna.yamamoto@digia.com',
          phoneNumber:'0445566256',
          key:uniqid()},
        { id:2, name: 'Susanna Jarvi',
          email: 'susanna.yamamoto@digia.com',
          phoneNumber:'0445566256',
          key:uniqid()},
        { id:3, name: 'Susanna Yamamoto',
          email: 'susanna.yamamoto@digia.com',
          phoneNumber:'0445566256',
          key:uniqid()},
        { id:4, name: 'Susanna Yamamoto',
          email: 'susanna.yamamoto@digia.com',
          phoneNumber:'0445566256',
          key:uniqid()},
        { id:5, name: 'Susanna Yamamoto',
          email: 'susanna.yamamoto@digia.com',
          phoneNumber:'0445566256',
          key:uniqid()},
        { id:6, name: 'Susanna Yamamoto',
          email: 'susanna.yamamoto@digia.com',
          phoneNumber:'0445566256',
          key:uniqid()},
        { id:7, name: 'Cherry Hilton',
          email: 'cherry.hilto@digia.com',
          phoneNumber:'0445566256',
          key:uniqid()},
      ]
    };
    this.addChange = this.addChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.sortItems = this.sortItems.bind(this);
    this.handleValidation = this.handleValidation.bind(this);

  }

  change(e){

    this.setState({
      [e.target.name]:e.target.value
    });
  }

  handleValidation(){
    let isErrors = false;
    let errors  = {
      fullNameError:'',
      emailError:'',
      phoneNumberError:''
    }

    if(this.state.fullName===""){
        isErrors = true;
        errors.fullNameError=  "Name Shouldn't be empty!!";
    }
      else if(this.state.fullName.length<5){
          isErrors = true;
          errors.fullNameError=  "aatleast 5 char";
      }
      else if(!(this.state.fullName.match(/^[a-z A-Z]+$/))){
          isErrors = true;
          errors.fullNameError=  "No Special Characters";
      }
      else if(!(this.state.fullName.match(' '))){
          isErrors = true;
          errors.fullNameError=  "Plz seperate Lastname with space";
      }

    let lastDotPos = this.state.email.lastIndexOf('.');
    let lastAtPos = this.state.email.lastIndexOf('@');
    if(this.state.email===""){
        isErrors = true;
        errors.emailError=  "Email Shouldn't be empty!!";
    }
      else if(!(lastAtPos<lastDotPos && lastAtPos>0 &&
        this.state.email.indexOf ('@@') === -1 && lastDotPos>2 &&
        (this.state.email.length - lastDotPos)>2)){
          isErrors = true;
          errors.emailError = 'Email is not Valid!!!';
        }
    if(this.state.phoneNumber===""){
        isErrors = true;
        errors.phoneNumberError=  "Phone number Shouldn't be empty!!";
    }
    else if (this.state.phoneNumber.length<10){
        isErrors = true;
        errors.phoneNumberError=  "Not a valid number!!!";
    }
    else if (this.state.phoneNumber.match(/^[0-9]+$/)){
        isErrors = true;
        errors.phoneNumberError=  "Add Countrycode!!!";
    }

    this.setState({
        ...this.state,
        ...errors
    });
    return isErrors;
  }

  addChange(e){

    e.preventDefault();
    if(this.handleValidation()){
        alert('Form has errors!!');
      }
      else{
        alert('Participants added Successfully!!')
        let newParticipant = {
          name:this.state.fullName,
          email:this.state.email,
          phoneNumber:this.state.phoneNumber,
          key:uniqid()
        }

      this.setState((prevState)=>{
      return{
        participants :prevState.participants.concat(newParticipant)
      };
    });
  }
      if (this.state.fullName!==""){
        this.setState({
          fullName: '',
          email: '',
          phoneNumber: '',
        });
      }
  }

  deleteItem(e){
    let filteredParticipants = this.state.participants.filter(function(participant){
      return(participant.key !== e);
    });
    this.setState({
      participants:filteredParticipants
    });
  }

  sortItems(){
    let fields = this.state.participants;
    let reversed = this.state.participants.reverse();
    let sortedList = this.state.participants.sort(function(a,b){
      let nameA = a.name;
      let nameB = b.name;
      if (nameA < nameB){ return -1;}
      if(nameA > nameB) { return 1;}
      return 0;
    });
    if(fields['fullName'] === sortedList['fullName']) {
    this.setState({ participants:reversed });
    }else{
      this.setState({ participants:sortedList });
    }
  }

  render(){
    return(
      <div className ='signUpContainer'>
        <div className ='inputs'>
          <form onSubmit = {this.addChange}>
            <table className = 'listTable'>
              <tbody>
                <tr>
                  <td>
                    <input type="text"
                        className="form-control"
                        name="fullName"
                        value={this.state.fullName}
                        placeholder="Enter Name"
                        onChange ={(e)=> this.change(e)}
                    />
                    <span className="help-block">
                      {this.state.fullNameError}
                    </span>
                  </td>
                  <td className = 'email-td'>
                    <input type="text"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        placeholder="Enter Email"
                          onChange ={(e)=> this.change(e)}
                    />
                    <span className="help-block">{this.state.emailError}</span>
                  </td>
                  <td>
                    <input type="text"
                        className="form-control"
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        placeholder="Enter Phone"
                          onChange ={(e)=> this.change(e)}
                    />
                    <span className="help-block">
                      {this.state.phoneNumberError}
                    </span>
                  </td>
                  <td>
                  <button type="submit" className="btn btn-default">
                    Add new
                  </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <div className ='registerList'>
          <table>
            <thead>
              <tr className = 'tableHeader'>
                <th onClick ={this.sortParticipants}>FullName</th>
                <th>Email address</th>
                <th>PhoneNumber</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            {this.state.participants.map((participants) => {
              return <RegisterList entries={participants}
                            delete = {this.deleteItem}
                            sort = {this.sortItems}
                            key = {participants.key}
                            />
              })
            }
          </table>

        </div>


      </div>

    )};
}

export default SignUp;
