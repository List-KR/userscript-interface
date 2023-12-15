/**
 * @name ReplaceStringWithBooleanInObject
 * @description Replace string-based boolean properties with real booleans in an object.
 * @param {unknown} Source A Object.
 * @returns {unknown} A modified object.
 */
export function ReplaceStringWithBooleanInObject(Source: unknown): unknown {
	for (const Property of Object.keys(Source)) {
		switch (Source[Property]) {
			case 'true':
				Source[Property] = true
				break
			case 'false':
				Source[Property] = false
				break
			default:
				break
		}

		if (typeof Source[Property] === 'object') {
			ReplaceStringWithBooleanInObject(Source[Property])
		}
	}

	return Source
}
