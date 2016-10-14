/**
*  @Author: Sunil bn <sunhick@gmail.com>
*  @Desc: javascript file
*
*  Copyright (c) 2016.
*/
var React = require('react');
var ReactDOM = require('react-dom');

var RootContainer = require('../containers/RootContainer');

var app = document.getElementById('app');
ReactDOM.render(<RootContainer />, app);