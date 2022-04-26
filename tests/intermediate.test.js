const decodeRoman = require("../script")

describe('Intermediate version requirements', () => {
	it('Can handle empty strings', () => {
		const result = decodeRoman("");
		expect(result).toBe(0);
	})
})