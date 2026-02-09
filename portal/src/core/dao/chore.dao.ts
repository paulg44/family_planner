export interface Chore {
  id: string;
  name: string;
  reward: number;
  assignedBy: string;
  assignedTo: string;
  complete: boolean;
}
