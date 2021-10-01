import { useState } from "react";
import { Form, Button, Select, Typography, Divider } from "antd";
import { Link } from "react-router-dom";

type SizeType = Parameters<typeof Form>[0]["size"];

const { Title } = Typography;

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const config = {
    rules: [
      {
        type: "object" as const,
        required: true,
        message: "Please select time!",
      },
    ],
  };

  return (
    <>
      <Title level={3}>Session Form</Title>
      <Divider />
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Worker" {...config}>
          <Select>
            <Select.Option value="Foxy">Foxy</Select.Option>
            <Select.Option value="Roxy">Roxy</Select.Option>
            <Select.Option value="Amber">Amber</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Service">
          <Select defaultValue="Combination">
            <Select.Option value="Sex">Sex</Select.Option>
            <Select.Option value="Massage">Massage</Select.Option>
            <Select.Option value="Combination">Combination</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Payment Method">
          <Select defaultValue="Cash">
            <Select.Option value="Cash">Cash</Select.Option>
            <Select.Option value="Pin">Pin</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Room">
          <Select defaultValue="Room 1">
            <Select.Option value="Room 1">Room 1</Select.Option>
            <Select.Option value="Room 2">Room 2</Select.Option>
            <Select.Option value="Room 3">Room 3</Select.Option>
            <Select.Option value="Room 4">Room 4</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Submit">
          <Link to="/sessions">
            <Button type="primary" className="right-margin">
              Open Session
            </Button>
          </Link>
          <Link to="/sessions">
            <Button>Cancel Session</Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormSizeDemo;
