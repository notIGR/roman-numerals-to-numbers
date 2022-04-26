const decodeRoman = require("../script");

const singleTestCases = [
	{
		roman: "I",
		decoded: 1
	}, {
		roman: "V",
		decoded: 5
	}, {
		roman: "X",
		decoded: 10
	}, {
		roman: "L",
		decoded: 50
	}, {
		roman: "C",
		decoded: 100
	}, {
		roman: "D",
		decoded: 500
	}, {
		roman: "M",
		decoded: 1000
	}
]

const generalTestCases = [
	{
		roman: "XXVII",
		decoded: 27
	}, {
		roman: "XVI",
		decoded: 16
	}, {
		roman: "CLI",
		decoded: 151
	}, {
		roman: "LXX",
		decoded: 70
	}, {
		roman: "CX",
		decoded: 110
	}, {
		roman: "XXX",
		decoded: 30
	}, {
		roman: "LVIII",
		decoded: 58
	}, {
		roman: "LV",
		decoded: 55
	}, {
		roman: "MMDXXXII",
		decoded: 2532
	}, {
		roman: "MMCXXII",
		decoded: 2122
	}, {
		roman: "MMCX",
		decoded: 2110
	}, {
		roman: "CCCXVIII",
		decoded: 318
	}, {
		roman: "MMMCXVIII",
		decoded: 3118
	}
];

describe('Basic Version Requirements', () => {
	it('Can decode single roman numerals', () => {
		for (const test of singleTestCases) {
			const result = decodeRoman(test.roman);
			expect(result).toBe(test.decoded);
		}
	});
	it('Can decode multi character roman numerals', () => {
		for (const test of generalTestCases) {
			const result = decodeRoman(test.roman);
			expect(result).toBe(test.decoded);
		}
	})
})