// 1year - 31k sec
//0.2year - ? sec

const yearSec = 60 * 60 * 24 * 365.25;
const dogYear = 7;

const period = Object.freeze({
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
});

const dogYears = (planet,ageSec) => Math.round(ageSec / (yearSec * period[planet]) * dogYear * 100) / 100;