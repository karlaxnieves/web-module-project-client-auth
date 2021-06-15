import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js'


class Friends extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res=> {
        this.setState({
          ...this.state,
          friends: res.data
        });
      })
      .catch(err=> {
        console.log(err);
      })
  };

  render() {
    return(
<div>Hi</div>
    );
  }
  };

export default Friends;