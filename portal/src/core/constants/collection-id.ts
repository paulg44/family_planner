export const CollectionID = {
  USERS: "users",
  CHORES: "chores",
} as const;

export type CollectionID = (typeof CollectionID)[keyof typeof CollectionID];
