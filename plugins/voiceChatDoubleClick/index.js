const {
    flux: { intercept },
    util: { log },
} = shelter;

const timers = {};
const unintercept = intercept((dispatch) => {
    log(dispatch);
    if (dispatch?.type === "VOICE_CHANNEL_SELECT") {
        log(dispatch);
        const { channelId } = dispatch;
        if (!channelId) return dispatch; // allow exit voice channel with single click
        const data = (timers[channelId] ??= { timeout: void 0, i: 0 });
        clearTimeout(data.timeout);

        // if we already have 2 or more clicks, run the callback immediately
        if (++data.i >= 2) {
            delete timers[channelId];
            return dispatch;
        }
        // else reset the counter in 400ms
        data.timeout = setTimeout(() => {
            delete timers[channelId];
        }, 400);
        return false;
    }
});
export const onUnload = () => {
    unintercept();
};
