import React from 'react';
import { Col } from 'antd';
export var WrapperDefault = function WrapperDefault(props) {
  return /*#__PURE__*/React.createElement(Col, {
    span: props.span || 12
  }, props.children);
};
export var extendSymbol = Symbol('extend');