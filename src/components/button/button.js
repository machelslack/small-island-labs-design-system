"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_1 = __importDefault(require("@emotion/styled"));
var Button = styled_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 32px;\n  background-color: hotpink;\n  font-size: 24px;\n  border-radius: 4px;\n  color: black;\n  font-weight: bold;\n  &:hover {\n    color: white;\n  }\n"], ["\n  padding: 32px;\n  background-color: hotpink;\n  font-size: 24px;\n  border-radius: 4px;\n  color: black;\n  font-weight: bold;\n  &:hover {\n    color: white;\n  }\n"])));
exports["default"] = (function () { return ((0, jsx_runtime_1.jsx)(Button, __assign({ onClick: function () { return alert("button clicked"); } }, { children: "This is a button to click" }))); });
var templateObject_1;
//# sourceMappingURL=button.js.map