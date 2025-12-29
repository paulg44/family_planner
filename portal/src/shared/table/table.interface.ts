import type { TableColumnsType } from "antd";
import type React from "react";

export interface ISharedTable {
  columns: TableColumnsType<ISharedTableColumn>;
  dataSource: ISharedTableColumn[];
}

export interface ISharedTableColumn {
  key: React.Key;
  name: string;
  rewards: number;
  assignedTo: string;
  completed: boolean;
  assignee: string;
}
