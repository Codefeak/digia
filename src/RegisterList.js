import React, { Component } from 'react';
import MdCreate from 'react-icons/lib/md/create';
import MdDelete from 'react-icons/lib/md/delete';
import './registerList.css';


class RegisterList extends Component{

  constructor (props){
    super(props);
    this.state = {
      isEditing :false,
      name:'',
      email:'',
      phoneNumber:''
    }

    this.createList =this.createList.bind(this);
    this.deleteParticipant = this.deleteParticipant.bind(this);
    this.editParticipant = this.editParticipant.bind(this);
    this.updateParticipant = this.updateParticipant.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);

  }

  componentWillMount(){
    this.setState({
      name: this.props.entries.name,
      email : this.props.entries.email,
      phoneNumber : this.props.entries.phoneNumber,
    });
  }

  toggleEdit(){
      const isEditing = this.state.isEditing;
      this.setState({
        isEditing : !isEditing,
      });
  }

  change(e){
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  updateParticipant(e) {
    e.preventDefault();
    this.toggleEdit();
  }

  deleteParticipant(key){
    this.props.delete(key);
  }

  editParticipant(){
      return(
        <tr>
          <td>
            <input type='text' name ='name'
                    className = 'form-control-edit'
                    onChange = {(e) => this.change(e)}
                    value = { this.state.name} />
          </td>
          <td>
            <input type='text' name ='email'
                    className = 'form-control-edit'
                    onChange = {(e) => this.change(e)}
                    value = { this.state.email} />
          </td>
          <td>
            <input type='text' name ='phoneNumber'
                    className = 'form-control-edit'
                    onChange = {(e) => this.change(e)}
                    value = { this.state.phoneNumber} />
          </td>
          <td>
            <button type='button' className = 'btn-cancel'
                    onClick = {(e)=>{
                      e.stopPropagation();
                      this.toggleEdit()
                    }}>
              Cancel
            </button>
          </td>
          <td>
            <button type='button' className = 'btn-save'
                    onClick ={ this.updateParticipant}>
              Save
            </button>
          </td>
        </tr>
    )
  }

  createList(){
    return (
      <tr>
        <td >{this.state.name}</td>
        <td >{this.state.email}</td>
        <td >{this.state.phoneNumber}</td>
        <td >
          <MdCreate className ="create"
                    onClick = {(e)=>{
                      e.stopPropagation();
                      this.toggleEdit()
                    }}
          />
        </td>
        <td>
          <MdDelete className ="delete"
                    onClick={()=>this.deleteParticipant(this.props.entries.key)}/>
        </td>
      </tr>
    )
  }

render()  {
  const isEditing = this.state.isEditing;
  return(
    <tbody>
      {
        isEditing ? this.editParticipant() : this.createList()
      }
    </tbody>

  );
}
}



export default RegisterList;
