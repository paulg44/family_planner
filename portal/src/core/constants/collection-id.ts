export const CollectionID = {
  USERS: "users",
} as const;

export type CollectionID = (typeof CollectionID)[keyof typeof CollectionID];
