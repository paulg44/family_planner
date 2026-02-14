import type { TableColumnsType } from "antd";
import type React from "react";
import type { Chore } from "../../core/dao/chore.dao";

export interface ISharedTable {
  columns: TableColumnsType<ISharedTableColumn>;
  dataSource: ISharedTableColumn[] | Chore[];
}

export interface IChoreTable extends ISharedTable {
  reward: number;
  assignedTo: string;
  complete: boolean;
  assignedBy: string;
}

export interface IEventsTable extends ISharedTable {
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface ISharedTableColumn {
  uid: string;
  key?: React.Key;
  name: string;
}
