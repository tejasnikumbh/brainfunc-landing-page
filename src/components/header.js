import React,{Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className='aae-section__container header'>
        <div className='wrapper'>
          <img className='feature__image' src={`../../style/images/${this.props.logoImage}`}/>
        </div>
        <div className='wrapper'>
          <div className='title'> {this.props.title} </div>
          <div className='sub-title'> {this.props.subTitle} </div>
        </div>
      </div>
    );
  }
}

export default Header;
