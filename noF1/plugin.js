(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugins/noF1/index.js
  var noF1_exports = {};
  __export(noF1_exports, {
    onUnload: () => onUnload
  });
  var disableF1 = (e) => {
    if (e.key === "F1") {
      e.stopImmediatePropagation();
    }
  };
  document.addEventListener("keydown", disableF1);
  var onUnload = () => {
    document.removeEventListener("keydown", disableF1);
  };
  return __toCommonJS(noF1_exports);
})();
