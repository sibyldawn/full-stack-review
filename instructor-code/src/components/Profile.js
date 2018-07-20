import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/reducer';
import axios from 'axios';

class Profile extends Component {
  componentDidMount() {
    axios.get('/api/profile').then(response => {
      this.props.login(response.data);
    })
  }
  
  render() {
    return (
      <div className="profile">
        <h1>Profile</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    user,
  };
};

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
