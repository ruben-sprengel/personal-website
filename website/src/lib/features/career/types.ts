interface Skill {
	id: number;
	name: string;
}

interface Position {
	title: string;
	start: string;
	end: string;
	description: string;
	skills: Skill[];
	isCurrent: boolean;
}

interface Company {
	company: string;
	start: string;
	end: string;
	positions: Position[];
}

export type { Company, Position };
