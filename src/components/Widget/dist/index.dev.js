"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border-radius: ", ";\n  font-size: 13px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 5px 7px;  \n  background-color: ", ";  \n  * {\n    margin: 1;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 15px 26px;\n  background-color: ", ";\n  * {\n    margin: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 16px 24px 16px 24px;\n  &>*:first-child{\n    margin-top: 0;\n  }\n  &>*:last-child{\n    margin-bottom: 0;\n  }\n  ul{\n    list-style: none;\n    padding: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 12px;\n  margin-bottom : 12px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  overflow: hidden;\n  background-color: ", ";\n\n  h1, h2, h3 {\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 1;\n    margin-bottom: 0;\n    \n  }\n\n  p {\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1;\n  }\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Widget = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.mainBg;
});

Widget.Content = _styledComponents["default"].div(_templateObject2());
Widget.Header = _styledComponents["default"].header(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primary;
});
Widget.Input = _styledComponents["default"].input(_templateObject4(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.radius;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.mainBg;
});
var _default = Widget;
exports["default"] = _default;