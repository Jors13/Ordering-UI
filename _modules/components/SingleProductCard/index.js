"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleProductCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _utils = require("../../utils");

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SingleProductCard = function SingleProductCard(props) {
  var _cart$products, _cart$products2, _theme$images, _theme$images$dummies;

  var businessId = props.businessId,
      product = props.product,
      isSoldOut = props.isSoldOut,
      isSkeleton = props.isSkeleton,
      onProductClick = props.onProductClick;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 2),
      stateConfig = _useConfig2[0],
      parsePrice = _useConfig2[1].parsePrice;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var theme = (0, _styledComponents.useTheme)();
  var editMode = typeof (product === null || product === void 0 ? void 0 : product.code) !== 'undefined';
  var removeToBalance = editMode ? product === null || product === void 0 ? void 0 : product.quantity : 0;
  var cart = orderState.carts["businessId:".concat(businessId)];
  var productCart = cart === null || cart === void 0 ? void 0 : (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.find(function (prod) {
    return prod.id === (product === null || product === void 0 ? void 0 : product.id);
  });
  var totalBalance = ((productCart === null || productCart === void 0 ? void 0 : productCart.quantity) || 0) - removeToBalance;
  var maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance;
  var productBalance = ((cart === null || cart === void 0 ? void 0 : (_cart$products2 = cart.products) === null || _cart$products2 === void 0 ? void 0 : _cart$products2.reduce(function (sum, _product) {
    return sum + (product && _product.id === (product === null || product === void 0 ? void 0 : product.id) ? _product.quantity : 0);
  }, 0)) || 0) - removeToBalance;
  var maxCartProductInventory = ((product === null || product === void 0 ? void 0 : product.inventoried) ? product === null || product === void 0 ? void 0 : product.quantity : undefined) - productBalance;
  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig;
  var maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory);
  return /*#__PURE__*/_react.default.createElement(_styles.CardContainer, {
    soldOut: isSoldOut || maxProductQuantity === 0,
    onClick: function onClick() {
      return onProductClick(product);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.CardInfo, {
    soldOut: isSoldOut || maxProductQuantity === 0
  }, !isSkeleton ? /*#__PURE__*/_react.default.createElement("h1", null, product === null || product === void 0 ? void 0 : product.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), !isSkeleton ? /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.description) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), !isSkeleton ? /*#__PURE__*/_react.default.createElement("span", null, parsePrice(product === null || product === void 0 ? void 0 : product.price)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), !isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.WrapLogo, null, /*#__PURE__*/_react.default.createElement(_styles.CardLogo, {
    soldOut: isSoldOut || maxProductQuantity === 0,
    bgimage: (0, _utils.optimizeImage)((product === null || product === void 0 ? void 0 : product.images) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.product), 'h_200,c_limit')
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 75,
    width: 75
  }), (isSoldOut || maxProductQuantity === 0) && /*#__PURE__*/_react.default.createElement(_styles.SoldOut, null, t('SOLD_OUT', 'SOLD OUT')));
};

exports.SingleProductCard = SingleProductCard;