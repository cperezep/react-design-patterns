export type Tree = {
  id: string;
  label: string;
  branches?: Array<Tree>;
};
