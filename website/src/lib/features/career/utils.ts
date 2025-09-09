const monthNames = [
	'Januar',
	'Februar',
	'März',
	'April',
	'Mai',
	'Juni',
	'Juli',
	'August',
	'September',
	'Oktober',
	'November',
	'Dezember'
];

function formatPeriod(start: string, end: string): string {
	if (!start) return '';

	const [startMonth, startYear] = start.split('/').map(Number);
	const startString = `${monthNames[startMonth - 1]} ${startYear}`;

	let endString;
	if (end.toLowerCase() === 'now') {
		endString = 'heute';
	} else {
		const [endMonth, endYear] = end.split('/').map(Number);
		endString = `${monthNames[endMonth - 1]} ${endYear}`;
	}

	return `${startString} - ${endString}`;
}

export { formatPeriod };
