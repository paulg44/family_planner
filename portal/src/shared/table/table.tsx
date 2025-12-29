import { Table } from "antd";
import type { ISharedTable } from "./table.interface";

const SharedTable = ({ columns, dataSource }: ISharedTable) => {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default SharedTable;
