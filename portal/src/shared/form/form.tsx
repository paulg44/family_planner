import { Form } from "antd";
import type { ISharedForm } from "./form.interface";

const SharedForm = <T,>({
  formInstance,
  title,
  disabled,
  fields,
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
      <Form>
        {fields
          //   .filter((field) => !field.hidden)
          .map((field) => (
            <div key={field}></div>
          ))}
      </Form>
    </>
  );
};

export default SharedForm;
