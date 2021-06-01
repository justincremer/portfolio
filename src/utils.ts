import path from 'path';

export function projectRoot(): string {
	return path.resolve(__dirname);
}

export function genRandString(length: number): string {
	const allowed: string =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	let res: string = "";
	for (let i = 0; i < length; i++) {
		res += allowed[Math.floor(Math.random() * 53)];
	}
	return res;
}
