// import React from 'react';
// import BugIcon from 'octicons-plain-react/Bug';
import * as pageDetect from 'github-url-detection';

import features from '../feature-manager.js';
// import observe from '../helpers/selector-observer.js';

// function applyToButton(button: HTMLButtonElement): void {
// button.append(<BugIcon />);
// console.log('✨');
// }

function init(_signal: AbortSignal): void {
	// observe('button.btn', applyToButton, {signal});
	console.log('PORRA');
}

void features.add(import.meta.url, {
	include: [
		pageDetect.isRepoTree,
	],
	exclude: [pageDetect.isRepoFile404],
	init,
});
