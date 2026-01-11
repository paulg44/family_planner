import type { FormInstance, RequiredMark } from "antd/es/form/Form";

export interface ISharedForm<T> {
  formInstance?: FormInstance<T>;
  title: string;
  disabled?: boolean;
  fields: string[];
  className?: string;
  initialValues?: string[];
  onFinish?: (value: T) => void;
  onChange?: (changedValues: Partial<T>, allValues: T) => void;
  requiredMark?: RequiredMark;
  layout?: "horizontal" | "vertical" | "inline";
}
