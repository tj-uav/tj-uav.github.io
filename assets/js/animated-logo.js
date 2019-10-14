const SVGWidth = 995.503;
const SVGHeight = 243.227;


(function drawUAVlogo(scale) {
	let hasRemovedStuffs = false;
	window.addEventListener('click', () => {
		removeStuffs()
		let banner = document.querySelector('section#banner.animated-banner')
		let nav = document.querySelector('nav#nav.animated-nav')
		banner.classList.remove('animated-banner')
		nav.classList.remove('animated-nav')
	})

	var paper = Snap(SVGWidth * scale, SVGHeight * scale),
		LOGO = new Array(),
		index = 0
	paper.node.id = "animated-logo" //give the SVG an ID



	var background = Snap(window.innerWidth, window.innerHeight)
	background.node.id = "animated-logo-background"

	function removeStuffs() {
		if (hasRemovedStuffs === false)
			hasRemovedStuffs = true;
		let logo = document.getElementById("animated-logo")
		let background = document.getElementById("animated-logo-background")
		if (logo !== null)
			logo.remove()
		if (background !== null)
			background.remove()
	}

	setTimeout(() => {
		if (hasRemovedStuffs === false)
			removeStuffs()
	}, 4000);
	/*****************************
	 *   	     TOP T	 		 *
	 * ***************************/
	let topT = Snap.parsePathString(`M1054.03,125.675l-995.503,0l22.788,24.279l949.927,0l22.788,-24.279Z`)
	let topTmask = paper.rect(findLowestX(topT), findLowestY(topT), 0, findHighestY(topT) - findLowestY(topT)).attr({
		fill: "#FFF"
	})
	setTimeout(() => {
		topTmask.animate({
			width: findHighestX(topT) - findLowestX(topT)
		}, 1500, mina.easeinout)
	}, 1000)
	LOGO.push(topT)
	LOGO[index++].push({
		fill: "#cc1300",
		fillRule: "nonzero",
		mask: topTmask
	})

	/*****************************
	 *   	   BOTTOM T 		 *
	 * ***************************/
	let bottomT = Snap.parsePathString(`M407.377,125.675l-30.872,66.919l-11.212,24.285l-39.753,86.172l-32.62,-34.755l23.721,-51.417l11.212,-24.285l30.872,-66.919l48.652,0Z`)
	let bottomTmask = paper.rect(findHighestX(bottomT) - Snap.len(378.28, 188.746, 338.168, 170.235), findLowestY(bottomT), Snap.len(378.28, 188.746, 338.168, 170.235), 0).attr({
		transform: `r${Snap.atan(20.286/42.896)},${findHighestX(bottomT)},${findLowestY(bottomT)}`,
		fill: "#FFF"
	})
	setTimeout(() => {
		bottomTmask.animate({
			height: Snap.len(407.377, 125.675, 325.54, 303.051)
		}, 1000, mina.easeinout)
	}, 2000)
	LOGO.push(bottomT)
	LOGO[index++].push({
		fill: "#cc1300",
		fillRule: "nonzero",
		mask: bottomTmask
	})

	/*****************************
	 *   	     TOP J	 		 *
	 * ***************************/
	let topJ = Snap.parsePathString(`M983.837,159.14l-855.12,0l22.788,24.279l809.544,0l22.788,-24.279Z`)
	let topJmask = paper.rect(findLowestX(topJ), findLowestY(topJ), 0, findHighestY(topJ) - findLowestY(topJ)).attr({
		fill: "#FFF"
	})
	setTimeout(() => {
		topJmask.animate({
			width: findHighestX(topJ) - findLowestX(topJ)
		}, 1500, mina.easeinout)
	}, 1000)
	LOGO.push(topJ)
	LOGO[index++].push({
		fill: "#306abf",
		fillRule: "nonzero",
		mask: topJmask
	})

	/*****************************
	 *   	    BOTTOM J		 *
	 * ***************************/
	let bottomJ = Snap.parsePathString(`M451.559,159.14l-15.832,33.453l-11.48,24.285l-69.041,145.945l-35.318,0l-47.326,-50.416l15.975,-34.599l39.399,41.977l74.142,-160.645l49.481,0.001Z`)
	let bottomJmask = paper.rect(findHighestX(bottomJ) - Snap.len(272.562, 312.408, 360.384, 353.953), findLowestY(bottomJ), Snap.len(272.562, 312.408, 360.384, 353.953), 0).attr({
		fill: "#FFF",
		transform: `r${Snap.atan(20.286/42.896)},${findHighestX(bottomJ)},${findLowestY(bottomJ)}`,
	})
	setTimeout(() => {
		bottomJmask.animate({
			height: Snap.len(348.747, 376.476, 451.559, 159.14),
		}, 1000)
	}, 1750)
	LOGO.push(bottomJ)
	LOGO[index++].push({
		fill: "#306abf",
		fillRule: "nonzero",
		mask: bottomJmask
	})

	/*********************************************************************
	 *   	  WHITE LINES (must be dead reckoned due to combined path)	 *
	 * *******************************************************************/
	let lines = Snap.parsePathString(`M317.726,192.594l-11.199,24.285l-75.18,0l-22.785,-24.285l109.164,0M913.237,192.594l-22.785,24.285l-456.052,0l11.493,-24.285l467.345,0Z`)
	let linesMask = paper.rect(208.562 + (913.237 - 208.562) / 2, 192.594, 0, findHighestY(lines) - findLowestY(lines) - 192.594).attr({
		fill: "#FFF"
	})
	setTimeout(() => {
		linesMask.animate({
			width: 913.237 - 208.562,
			transform: `t${-((913.237 - 208.562) / 2)},0`
		}, 1500, mina.easein)
	}, 2000)
	LOGO.push(lines)
	LOGO[index++].push({
		fill: "#fff",
		fillRule: "nonzero",
		mask: linesMask
	})

	let textUAV = Snap.parsePathString(`M435.045,368.901c-10.763,0 -20.565,-1.899 -29.133,-5.646c-9.502,-4.157 -15.885,-11.319 -18.975,-21.286c-3.029,-9.774 -1.365,-21.721 5.454,-36.356c9.48,-20.348 32.128,-67.852 32.128,-67.852l46.623,0l-3.705,8.509c-7.33,16.837 -15.351,34.876 -24.519,55.15c-3.184,7.009 -4.839,12.706 -4.924,16.937c-0.062,3.13 0.597,5.284 1.96,6.403c1.767,1.451 4.661,2.188 8.606,2.193c4.296,0 8.6,-0.99 12.827,-2.944c4.285,-1.978 8.471,-5.237 12.441,-9.684c4.12,-4.618 7.872,-10.617 11.148,-17.83c9.456,-20.881 17.28,-38.392 24.623,-55.1l1.595,-3.634l48.699,0l-3.737,8.523c-8.901,20.303 -18.214,40.809 -27.22,60.64l-1.657,3.649c-4.914,10.811 -11.193,20.18 -18.667,27.844c-7.428,7.617 -15.552,13.722 -24.147,18.15c-8.454,4.355 -17.017,7.539 -25.448,9.459c-8.372,1.908 -16.438,2.875 -23.972,2.875` + `M632.57,310.505c0.302,-4.896 0.753,-12.315 1.187,-19.752c-5.73,6.706 -13.07,13.316 -18.54,19.752l17.353,0Zm-2.937,56.895l1.032,-23.884l-46.058,-0.397l-20.315,21.645l-2.461,2.622l-46.013,-0.009l121.653,-129.615l46.021,0l-1.287,129.647l-52.572,-0.009Z` + `M721.15,368.901l1.816,-131.14l49.291,0l-3.128,55.806l48.413,-55.806l53.332,0l-123.083,131.14l-26.641,0Z`)
	let textUAVmask = paper.rect(385.486, 237.761, 485.388, 131.14).attr({
		fill: "#000"
	})
	setTimeout(() => {
		textUAVmask.animate({
			fill: "#FFF"
		}, 1500, mina.easeout)
	}, 2500)
	LOGO.push(textUAV)
	LOGO[index++].push({
		fill: "#FFF",
		mask: textUAVmask
	})

	LOGO.forEach(section => {
		let pathString = ""
		for (let i = 0; i < section.length - 1; i++)
			for (let j = 0; j < section[i].length; j++) { //the one with individual values like "M", 123.456, etc
				pathString += section[i][j] + (j >= 1 ? "," : "")
			}
		section[section.length - 1].transform = `t${-58.526 * scale},${-125.675 * scale}s${scale}, 0, 0`
		paper.path(pathString).attr(section[section.length - 1])
	})

	background.rect(0, 0, window.innerWidth, window.innerHeight).attr({
		fill: "#000",
		"fill-opacity": 0.5
	}) //add black background

})((window.innerWidth * 0.85) / SVGWidth)

function findHighestX(parsedPathString) {
	let highestX = 0
	let tempX = 0
	parsedPathString.forEach(path => {
		if (Array.isArray(path))
			if (path.length > 1) {
				tempX += path[1]
				if (highestX < tempX)
					highestX = tempX
			}
	})
	return highestX
}

function findLowestX(parsedPathString) {
	let lowestX = window.innerWidth
	let tempX = 0
	parsedPathString.forEach(path => {
		if (Array.isArray(path))
			if (path.length > 1) {
				tempX += path[1]
				if (lowestX > tempX)
					lowestX = tempX
			}
	})
	return lowestX
}

function findHighestY(parsedPathString) {
	let highestY = 0
	let tempY = 0
	parsedPathString.forEach(path => {
		if (Array.isArray(path))
			if (path.length > 1) {
				tempY += path[2]
				if (highestY < tempY)
					highestY = tempY
			}
	})
	return highestY
}

function findLowestY(parsedPathString) {
	let lowestY = window.innerHeight
	let tempY = 0
	parsedPathString.forEach(path => {
		if (Array.isArray(path))
			if (path.length > 1) {
				tempY += path[2]
				if (lowestY > tempY)
					lowestY = tempY
			}
	})
	return lowestY
}