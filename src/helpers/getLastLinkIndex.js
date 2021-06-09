export const getLastLinkIndex = (url) => {
	return Number(url.split('/')[url.split('/').length - 1]) - 1
}