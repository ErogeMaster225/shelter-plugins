const disableF1 = (e) => {
    if (e.key === "F1") {
        e.stopImmediatePropagation();
    }
};
document.addEventListener("keydown", disableF1);
export const onUnload = () => {
    document.removeEventListener("keydown", disableF1);
};
