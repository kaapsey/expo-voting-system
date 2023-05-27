export type memberScheme = {
  name: string;
  role: 'leader' | 'member';
};

export type projectScheme = {
  _id: string;
  name: string;
  description: string;
  stall_no: number;
  cover_image: string;
  vote_count: number;
  members: memberScheme[];
};
