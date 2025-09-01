export interface ScrollFadeOptions {
	startVisible?: boolean;
	transitionDuration?: string;
	transitionTimingFunction?: string;
	threshold?: number;
}

export function scrollFade(
	node: HTMLElement,
	options?: ScrollFadeOptions
): import('svelte/action').ActionReturn {
	const opts: Required<ScrollFadeOptions> = {
		startVisible: false,
		transitionDuration: '0.5s',
		transitionTimingFunction: 'ease-in',
		threshold: 0.3,
		...options
	};

	let observer: IntersectionObserver | undefined;
	let hasIntersected: boolean = false;

	if (!opts.startVisible) {
		node.style.opacity = '0';
	} else {
		node.style.opacity = '1';
	}

	const setVisibility = (isVisible: boolean) => {
		if (isVisible) {
			node.style.transition = `opacity ${opts.transitionDuration} ${opts.transitionTimingFunction}`;
			node.style.opacity = '1';
		}
		// Optional: If you want to fade out when scrolling away, add else block here
	};

	const handleIntersect = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting && !hasIntersected) {
				setVisibility(true);
				hasIntersected = true;
				observer?.unobserve(node);
			}
		});
	};

	if (typeof IntersectionObserver !== 'undefined') {
		observer = new IntersectionObserver(handleIntersect, {
			root: null,
			rootMargin: '0px',
			threshold: opts.threshold
		});
		observer.observe(node);
	} else {
		// Fallback for browsers that don't support Intersection Observer
		console.warn('Intersection Observer not supported. Element visible by default.');
		setVisibility(true);
	}

	return {
		destroy() {
			if (observer) {
				observer.unobserve(node);
			}
		}
	};
}
