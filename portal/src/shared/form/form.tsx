import { Form } from "antd";
import type { ISharedForm } from "./form.interface";

const SharedForm = <T,>({
  formInstance,
  disabled,
  // fields,
  className = "p-4",
  initialValues,
  onFinish,
  onChange,
  requiredMark,
  layout = "vertical",
}: ISharedForm<T>) => {
  const [form] = Form.useForm();
  return (
    <>
      <Form
        onFinish={onFinish}
        onValuesChange={onChange}
        requiredMark={requiredMark}
        form={formInstance || form}
        layout={layout}
        className={className}
        initialValues={initialValues}
        disabled={disabled}
      ></Form>
    </>
  );
};

export default SharedForm;
