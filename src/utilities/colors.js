import Tinycolor from 'tinycolor2';

/**
 *
 * @param {*} color color to lighten
 * @param {*} amount amount from 0 to 100
 */
function lighten(color, amount = 10) {
	return Tinycolor(color)
		.lighten(amount)
		.toString();
}

/**
 *
 * @param {*} color color to darken
 * @param {*} amount amount from 0 to 100
 */
function darken(color, amount = 10) {
	return Tinycolor(color)
		.darken(amount)
		.toString();
}

/**
 *
 * @param {*} color color to transparentize
 * @param {*} amount amount from 0 to 1
 */
function transparentize(color, value) {
	const tnColor = Tinycolor(color);
	tnColor.setAlpha(1 - value);
	return tnColor.toString();
}

/**
 *
 * @param {*} color color to modify
 * @param {*} amount alpha value from 0 to 1
 */
function opacity(color, value) {
	const tnColor = Tinycolor(color);
	tnColor.setAlpha(value);
	return tnColor.toString();
}

/**
 *
 * @param {*} color1 first color to mix
 * @param {*} color2 second color to mix
 * @param {*} amount weight factor between 2 colors
 */
function mix(color1, color2, amount = 50) {
	return Tinycolor
		.mix(color1, color2, amount)
		.toString();
}

export { lighten, darken, transparentize, opacity, mix };
