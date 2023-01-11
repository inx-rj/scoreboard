// App's all colors list
export const GlobolColors = {
    mainBg: '#363942',
    listBg: '#f7f4f6',
    listHoverBg: '#4a69dd',
    white: 'white',
    text: 'black',
    smallText: '#a3a6af',
    badgeBg: '#83b0f4',
    top1BadgeBg: '#f53b3e',
    top2BadgeBg: '#ff793e',
    top3BadgeBg: '#ffa132'
};

/**
 * to verify the argument value/string is true-boolean, null, undefined, empty or length is 0 then true else false.
 * @param {any} checkValue variable is argument of various types passed into isEmpty function.
 * @returns boolean value.
 */
export const isEmpty = (checkValue) => {
    if (checkValue === false) return !checkValue;
    if (checkValue === true) return !checkValue;
    return (checkValue === null ||
        checkValue === "undefined" ||
        checkValue === "null" ||
        checkValue === undefined ||
        checkValue === "" ||
        checkValue.length === 0 ||
        Object.keys(checkValue).length === 0)
};

// Static url of gray background image
export const GreyImgUrl = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Grey_background.jpg';

// MediaQuery-Breakpoints: display size, device variables
const DisplaySize = {
    xs: '320px',
    sm: '375px',
    m: '600px',
    lg: '768px',
    xl: '1200px',
}
const DeviceWidth = {
    xs: `(max-width: ${DisplaySize.xs})`,
    sm: `(max-width: ${DisplaySize.sm})`,
    m: `(max-width: ${DisplaySize.m})`,
    lg: `(max-width: ${DisplaySize.lg})`,
    xl: `(max-width: ${DisplaySize.xl})`
}
export { DisplaySize, DeviceWidth };