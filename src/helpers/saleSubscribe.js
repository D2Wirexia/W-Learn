
export const saleSubscribeLesson = (val = 1) => {
	switch (val) {
		case 0:
		case 1:
		case 2: return 0;
		case 3: return 1;
		case 4:
		case 5 : return 2;
		case 6:
		case 7:
		case 8: return 3;
		case 9:
		case 10: return 4;
		case 11:
		case 12: return 5;
		case 13:
		case 14: return 6;
		case 15:
		case 16: return 7;
		case 17:
		case 18: return 8;
		case 19:
		case 20: return 9;
		case 21:
		case 22: return 10;
		case 23:
		case 24: return 11;
		case 25:
		case 26: return 12;
		case 27:
		case 28:
		case 29: return 13;
		case 30:
		case 31:
		case 32: return 14;
		case 33:
		case 34: return 15;
		default: return 16;
	}
}

export const getTotalCost = (val, cost) => {
	const sale = saleSubscribeLesson(val);
	return Math.round(val * (cost - (cost / 100 * sale)))
}
