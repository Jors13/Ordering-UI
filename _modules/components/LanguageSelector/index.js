"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageSelector = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _Select = require("../../styles/Select");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var LanguageSelectorUI = function LanguageSelectorUI(props) {
  var _languages$languages;

  var languages = props.languages,
      currentLanguage = props.currentLanguage,
      handleChangeLanguage = props.handleChangeLanguage;

  var _languages = languages.loading ? [] : (_languages$languages = languages.languages) === null || _languages$languages === void 0 ? void 0 : _languages$languages.map(function (language) {
    return {
      value: language.code,
      content: language.name,
      showOnSelected: language.code.toUpperCase()
    };
  });

  return /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: _languages,
    defaultValue: currentLanguage,
    onChange: function onChange(languageId) {
      return handleChangeLanguage(languageId);
    }
  });
};

var LanguageSelector = function LanguageSelector(props) {
  var DefaultChangeLanguage = function DefaultChangeLanguage() {};

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LanguageSelector, _extends({}, props, {
    UIComponent: LanguageSelectorUI,
    onChangeLanguage: props.onChangeLanguage || DefaultChangeLanguage
  }));
};

exports.LanguageSelector = LanguageSelector;