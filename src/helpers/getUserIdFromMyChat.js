export const getUserIdFromMyChat = (messageWithMe, myId) => {
	return  Object.keys(messageWithMe).map(e => e.replace(String(myId), '').replace(/&/g, ''))
}