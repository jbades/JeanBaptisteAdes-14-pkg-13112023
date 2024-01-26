"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DayPicker;
var _react = _interopRequireWildcard(require("react"));
var _pikaday = _interopRequireDefault(require("pikaday"));
require("./day-picker.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function DayPicker(_ref) {
  var type = _ref.type,
    id = _ref.id,
    value = _ref.value,
    onChange = _ref.onChange,
    className = _ref.className;
  var ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var picker = new _pikaday["default"]({
      field: ref.current,
      onSelect: function onSelect() {
        var selectedDate = picker.toString('YYYY-MM-DD');
        onChange(selectedDate);
      }
    });
    return function () {
      return picker.destroy();
    };
  }, [onChange]);
  return /*#__PURE__*/_react["default"].createElement("input", {
    type: type,
    id: id,
    className: className,
    ref: ref,
    value: value || ''
    // onChange={onChange} 
    ,
    placeholder: "Choose a date",
    required: true,
    readOnly: true
  });
}