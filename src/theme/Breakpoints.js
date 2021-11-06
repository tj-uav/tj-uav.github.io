export const mobile = `@media only screen and (min-width: ${0}px)`
export const tablet = `@media only screen and (min-width: ${480}px)`
export const desktop = `@media only screen and (min-width: ${860}px)`

export function isDesktop(){
	return (window.innerWidth >= 860)
}

export function isTablet(){
	return ((window.innerWidth <= 860) && (window.innerWidth >= 480))
}

export function isMobile(){
	return window.innerWidth <= 480
}