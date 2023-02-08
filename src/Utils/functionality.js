import Compressor from "compressorjs";

export const compressImage = (image) => {
	return new Promise((resolve, reject) => {
		// eslint-disable-next-line no-new
		new Compressor(image, {
			quality: 0.6,
			maxHeight: 1024,
			maxWidth: 1024,
			success(result) {
				resolve(result);
			},
			error(err) {
				reject(err);
			},
		});
	});
};

export const guidGenerator = () => {
	const S4 = () => {
		// eslint-disable-next-line no-bitwise
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	};
	return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
};
