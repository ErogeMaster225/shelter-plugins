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

  // plugins/voiceChatDoubleClick/index.js
  var voiceChatDoubleClick_exports = {};
  __export(voiceChatDoubleClick_exports, {
    onUnload: () => onUnload
  });
  var {
    flux: { intercept },
    util: { log }
  } = shelter;
  var timers = {};
  var unintercept = intercept((dispatch) => {
    log(dispatch);
    if (dispatch?.type === "VOICE_CHANNEL_SELECT") {
      log(dispatch);
      const { channelId } = dispatch;
      if (!channelId)
        return dispatch;
      const data = timers[channelId] ??= { timeout: void 0, i: 0 };
      clearTimeout(data.timeout);
      if (++data.i >= 2) {
        delete timers[channelId];
        return dispatch;
      }
      data.timeout = setTimeout(() => {
        delete timers[channelId];
      }, 400);
      return false;
    }
  });
  var onUnload = () => {
    unintercept();
  };
  return __toCommonJS(voiceChatDoubleClick_exports);
})();
