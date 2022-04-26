const decodeRoman = require("../script")

const caseSensitiveTestCases = [
	{
		roman: "Iv",
		decoded: 4
	}, {
		roman: "Ix",
		decoded: 9
	}, {
		roman: "xL",
		decoded: 40
	}, {
		roman: "Xc",
		decoded: 90
	}, {
		roman: "dCcCLxIx",
		decoded: 869
	}, {
		roman: "dLxXIiI",
		decoded: 573
	}, {
		roman: "DlXxIx",
		decoded: 579
	}, {
		roman: "CmLiX",
		decoded: 959
	}, {
		roman: "CcClXXxIX",
		decoded: 389
	}, {
		roman: "CDxLiv",
		decoded: 444
	}, {
		roman: "ccXLiX",
		decoded: 249
	}
];

const invalidTestCases = [
	{
		roman: "CCXZIV",
		decoded: -1
	}, {
		roman: "CMXXXV4I",
		decoded: -1
	}, {
		roman: "DCC6CVIp",
		decoded: -1
	}, {
		roman: "866",
		decoded: -1
	}, {
		roman: "1V",
		decoded: -1
	}
]

describe('Expert version requirements 🚀', () => {
	it('Can handle incorrect casing', () => {
		for (const test of caseSensitiveTestCases) {
			const result = decodeRoman(test.roman);
			expect(result).toBe(test.decoded);
		}
	});
	
	it('Correctly handles invalid numerals', () => {
		for (const test of invalidTestCases) {
			const result = decodeRoman(test.roman);
			expect(result).toBe(test.decoded);	
		}
	})
})