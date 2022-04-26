const decodeRoman = require("../script")

const advancedTestCases = [
	{
		roman: "IV",
		decoded: 4
	}, {
		roman: "IX",
		decoded: 9
	}, {
		roman: "XL",
		decoded: 40
	}, {
		roman: "XC",
		decoded: 90
	}, {
		roman: "DCCCLXIX",
		decoded: 869
	}, {
		roman: "DLXXIII",
		decoded: 573
	}, {
		roman: "DLXXIX",
		decoded: 579
	}, {
		roman: "CMLIX",
		decoded: 959
	}, {
		roman: "CCCLXXXIX",
		decoded: 389
	}, {
		roman: "DCCXCVII",
		decoded: 797
	}, {
		roman: "CXLIX",
		decoded: 149
	}, {
		roman: "CDXXIX",
		decoded: 429
	}, {
		roman: "DCCLXII",
		decoded: 762
	}, {
		roman: "CMXXXVII",
		decoded: 937
	}, {
		roman: "CDXLIV",
		decoded: 444
	}, {
		roman: "CCXLIX",
		decoded: 249
	}
]

describe('Advanced version requirements 😎', () => {
	it('Can handle advanced Roman numerals', () => {
		for (const test of advancedTestCases) {
			const result = decodeRoman(test.roman);
			expect(result).toBe(test.decoded);
		}
	})
})