import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './index.css';
import {getText} from '../../core/module/selector';

export class Page extends Component {
  
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: getText(state)
});
export default connect(mapStateToProps)(Page);
