const SVGWidth = 1103.378
const SVGHeight = 500
const delayDecrease = 1000
var percentWidth = 0.9
var tempScale = window.innerWidth / 1103.375 * percentWidth

drawUAVlogo((window.innerWidth - SVGWidth) / 2, (window.innerHeight - SVGHeight) / 2, 1)
// drawUAVlogo((window.innerWidth - (SVGWidth * tempScale)) / 2, (window.innerHeight - (SVGHeight * tempScale)) / 2, tempScale)

function drawUAVlogo(shiftX, shiftY, scale) {
	// var paper = Snap((SVGWidth * scale) + shiftX, (SVGHeight * scale) + shiftY);
	var paper = Snap(window.innerWidth, window.innerHeight)
	var tempWidth, tempHeight;
	var tempAngle = Snap.atan(13.751 / 29.806);

	// paper.rect((window.innerWidth - (SVGWidth)) / 2, (window.innerHeight - SVGHeight) / 2, SVGWidth, SVGHeight).attr({
	// 	strokeWidth: 5,
	// 	stroke: "#FAF",
	// 	fill: "rgba(0, 0, 0, 0)"
	// })

	// -- BACKGROUND -- //
	paper.rect(0, 0, window.innerWidth, window.innerHeight).attr({
		fill: "#000",
		"fill-opacity": 0.75
	})

	// -- TOP OF T -- //
	createWithMask({
		startX: (shiftX + 58.526) * scale,
		startY: (shiftY + 125.675) * scale,
		width: 995.503 * scale,
		height: 24.279 * scale,
		animation: {
			width: 995.503 * scale
		},
		animationDuration: 1500,
		animationDelay: 1000 - delayDecrease,
		color: "rgb(204,19,0)",
		path: `M${(shiftX + 58.526) * scale}, ${(shiftY + 125.675) * scale}L${(shiftX + 1054.029) * scale},${(shiftY + 125.675) * scale},L${(shiftX + 1031.241) * scale},${(shiftY + 149.954) * scale}L${(shiftX + 81.314) * scale},${(shiftY + 149.954) * scale}Z`
	});

	// -- TOP OF J -- //
	createWithMask({
		startX: (shiftX + 128.717) * scale,
		startY: (shiftY + 159.14) * scale,
		width: 855.12 * scale,
		height: 24.279 * scale,
		animation: {
			width: 855.12 * scale
		},
		animationDuration: 1500,
		animationDelay: 1000 - delayDecrease,
		color: "rgb(48,106,191)",
		path: `M${(shiftX + 128.717) * scale},${(shiftY + 159.14) * scale}L${(shiftX + 983.837) * scale},${(shiftY + 159.14) * scale}L${(shiftX + 961.049) * scale},${(shiftY + 183.419) * scale}L${(shiftX + 151.505) * scale},${(shiftY + 183.419) * scale}Z`
	})

	// -- BOTTOM OF J -- //
	tempHeight = Snap.len(327.936, 319.785, 360.27, 352.119);
	createWithMask({
		startX: (shiftX + 445.431 - 48.758) * scale,
		startY: (shiftY + 159.14) * scale,
		width: 250 * scale,
		height: 107.957 * scale,
		animation: {
			transform: `t${49.147 * scale},r${90 + tempAngle}, ${paper.rect((shiftX + 445.431 - 48.758) * scale, (shiftY + 159.14) * scale, 0, 107.957 * scale).getBBox().x}, ${paper.rect((shiftX + 445.431 - 48.758) * scale, (shiftY + 159.14) * scale, 0, 107.957 * scale).getBBox().y}`
		},
		animationDuration: 0,
		animationDelay: 0,
		animationCallback: {
			width: 250 * scale
		},
		animationCallbackDuration: 1000,
		animationCallbackDelay: 1750 - delayDecrease,
		color: "rgb(48,106,191)",
		path: `M${(shiftX + 445.431 - 48.758) * scale},${(shiftY + 159.14) * scale} L${(shiftX + 494.952 - 48.758) * scale},${(shiftY + 159.14) * scale} L${(shiftX + 398.559 - 48.758) * scale},${(shiftY + 362.823) * scale} L${(shiftX + 363.241 - 48.758) * scale},${(shiftY + 362.823) * scale}L${(shiftX + 315.915 - 48.758) * scale},${(shiftY + 312.407) * scale}L${(shiftX + 331.89 - 48.758) * scale},${(shiftY + 277.808) * scale}L${(shiftX + 371.289 - 48.758) * scale},${(shiftY + 319.785) * scale}Z`
	})
	//-- BOTTOM OF T -- //
	tempWidth = Snap.len(407.377, 125.675, 325.54, 303.051);
	tempHeight = Snap.len(320.877, 207.704, 360.987, 226.214);
	createWithMask({
		startX: (shiftX + 450.73 - 48.758) * scale,
		startY: (shiftY + 125.675) * scale,
		width: tempWidth * scale,
		height: tempHeight * scale,
		animation: {
			height: tempHeight * scale,
			transform: `r${90 + tempAngle}, ${(shiftX + 450.73 - 48.758) * scale}, ${(shiftY + 125.675) * scale}`
		},
		animationDuration: 1000,
		animationDelay: 0,
		animationCallback: {
			width: tempWidth * scale
		},
		animationCallbackDuration: 1000,
		animationCallbackDelay: 2000 - delayDecrease,
		color: "rgb(204,19,0)",
		path: `M${(shiftX + 450.73 - 48.758) * scale},${(shiftY + 125.675) * scale}L${(shiftX + 402.078 - 48.758) * scale},${(shiftY + 125.675) * scale}L${(shiftX + 336.273 - 48.758) * scale},${(shiftY + 268.296) * scale}L${(shiftX + 368.893 - 48.758) * scale},${(shiftY + 303.051) * scale}Z`
	})

	// -- BOTTOM LINE -- //
	tempWidth = 913.237 - 208.562 + 6.45;
	tempHeight = 216.879 - 192.594;
	createWithMask({
		startX: (shiftX + 251.915 - 48.758) * scale,
		startY: (shiftY + 192.594) * scale,
		width: tempWidth * scale,
		height: tempHeight * scale,
		animation: {
			width: 0,
			transform: `t${(tempWidth / 2) * scale}`
		},
		animationDuration: 1000,
		animationDelay: 0,
		animationCallback: {
			transform: `t0`,
			width: tempWidth * scale
		},
		animationCallbackDuration: 1500,
		animationCallbackDelay: 2000 - delayDecrease,
		color: "#FFF",
		path: `M${(shiftX + 251.915 - 48.758) * scale},${(shiftY + 192.594) * scale}L${(shiftX + 274.7 - 48.758) * scale},${(shiftY + 216.879) * scale}L${(shiftX + 349.88 - 48.758) * scale},${(shiftY + 216.879) * scale}L${(shiftX + 361.079 - 48.758) * scale},${(shiftY + 192.594) * scale}M${(shiftX + 489.246 - 48.758) * scale},${(shiftY + 192.594) * scale}L${(shiftX + 477.753 - 48.758) * scale},${(shiftY + 216.879) * scale}L${(shiftX + 890.452) * scale},${(shiftY + 216.879) * scale}L${(shiftX + 913.237) * scale},${(shiftY + 192.594) * scale}Z`
	})
	// -- U in UAV -- //
	var pathU = paper.path(`M435.045,368.901c-10.763,0 -20.565,-1.899 -29.133,-5.646c-9.502,-4.157 -15.885,-11.319 -18.975,-21.286c-3.029,-9.774 -1.365,-21.721 5.454,-36.356c9.48,-20.348 32.128,-67.852 32.128,-67.852l46.623,0l-3.705,8.509c-7.33,16.837 -15.351,34.876 -24.519,55.15c-3.184,7.009 -4.839,12.706 -4.924,16.937c-0.062,3.13 0.597,5.284 1.96,6.403c1.767,1.451 4.661,2.188 8.606,2.193c4.296,0 8.6,-0.99 12.827,-2.944c4.285,-1.978 8.471,-5.237 12.441,-9.684c4.12,-4.618 7.872,-10.617 11.148,-17.83c9.456,-20.881 17.28,-38.392 24.623,-55.1l1.595,-3.634l48.699,0l-3.737,8.523c-8.901,20.303 -18.214,40.809 -27.22,60.64l-1.657,3.649c-4.914,10.811 -11.193,20.18 -18.667,27.844c-7.428,7.617 -15.552,13.722 -24.147,18.15c-8.454,4.355 -17.017,7.539 -25.448,9.459c-8.372,1.908 -16.438,2.875 -23.972,2.875`)
	var pathA = paper.path(`M632.57,310.505c0.302,-4.896 0.753,-12.315 1.187,-19.752c-5.73,6.706 -13.07,13.316 -18.54,19.752l17.353,0Zm-2.937,56.895l1.032,-23.884l-46.058,-0.397l-20.315,21.645l-2.461,2.622l-46.013,-0.009l121.653,-129.615l46.021,0l-1.287,129.647l-52.572,-0.009Z`)
	var pathV = paper.path(`M721.15,368.901l1.816,-131.14l49.291,0l-3.128,55.806l48.413,-55.806l53.332,0l-123.083,131.14l-26.641,0Z`)
	var temp = Snap.set(pathU, pathA, pathV).attr({
		fill: "#FFF",
		"fill-opacity": 0,
		transform: `scale(${scale}) translate(${shiftX}, ${shiftY})`
	}).animate({}, 2500 - delayDecrease, () => {
		temp.animate({
			"fill-opacity": 1
		}, 1500, mina.easeout)
	})

	function createWithMask(args) {
		var mask = paper.rect(args.startX, args.startY, 0, args.height).attr({
			strokeWidth: 1,
			fill: "#FFF"
		})

		setTimeout(() => {
			mask.animate(args.animation, args.animationDuration, mina.easeinout);
		}, args.animationDelay)

		setTimeout(() => {
			mask.animate(args.animationCallback, args.animationCallbackDuration, mina.easein)
		}, args.animationDelay + args.animationCallbackDelay)

		paper.path(args.path).attr({
			fill: args.color,
			mask: mask
		})
	}
}
//(0, 0, 1)