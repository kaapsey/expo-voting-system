export type memberScheme = {
  name: string;
  role: 'leader' | 'member';
};

export type projectScheme = {
  id: string;
  name: string;
  description: string;
  stall_no: number;
  cover_image: string;
  vote_count: number;
  college: string;
  members: memberScheme[];
};
