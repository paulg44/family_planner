export interface Chore {
  uid: string;
  name: string;
  reward: number;
  assignedBy: string | undefined;
  assignedTo: string;
  complete: boolean;
}
