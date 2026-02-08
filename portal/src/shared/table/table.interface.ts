import type { TableColumnsType } from "antd";
import type React from "react";
import type { Chore } from "../../services/chores.service";

export interface ISharedTable {
  columns: TableColumnsType<ISharedTableColumn>;
  dataSource: ISharedTableColumn[] | Chore[];
}

export interface ISharedTableColumn {
  id: string;
  key?: React.Key;
  name: string;
  reward: number;
  assignedTo: string;
  complete: boolean;
  assignedBy: string;
}
