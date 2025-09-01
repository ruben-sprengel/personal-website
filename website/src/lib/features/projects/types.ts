interface Project {
	id: number;
	title: string;
	description: string;
	githubLink: string;
	jetbrainsMarketplaceLink?: string;
	tags: string[];
}

export type { Project };
