export const colors = {
    paleLilac: '#f9f9ff',
    almostBlack: '#0a1019',
    fuchsia: '#d816b6',
    pinkPurple: '#ee32db',
    darkBlueGrey: '#15143b',
    pinkishGrey: '#c2c2c2',
    pinkishGreyTwo: '#cecece',
    warmGrey: '#979797',
    slateGrey: '#5e5d75',
    greyish: '#b3b3b3',
    steel: '#778093',
    strongPink: '#ff007e',
    yellow: '#f2d200',
    yellowishGreen: '#9bdf10',
    darkBlueGreyTwo: '#0c1329',
    form: '#adb5c5',
    grey: '#d8d8d8',
    inputGrey: '#f2f3f7',
    white: '#FFFFFF',
    blueyGrey: '#adb5c5'
};
export const mapIndicatorToColor = (num: number) => {
    if (num < 2) return colors.strongPink;
    if (num < 3.5) return colors.yellow;
    return colors.yellowishGreen;
};
