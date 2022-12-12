/**
 * @param {Array<string>} sentence
 * @return {number}
 */
const distanceOfClosestRepeatedEntries = (sentence) => {
	const obj = {}

	let min = Number.POSITIVE_INFINITY

	for (let i = 0; i < sentence.length; i += 1) {
		if (!obj.hasOwnProperty(sentence[i])) {
			obj[sentence[i]] = i
		} else {
			const thisMin = obj[sentence[i]] > i ? obj[sentence[i]] - i : i - obj[sentence[i]]
			console.log(obj, sentence[i], thisMin)
			min = Math.min(min, thisMin)
		}
	}

	return min === Number.POSITIVE_INFINITY ? -1 : min
}
