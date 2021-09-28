import { Layout, Form, Input, Button, Typography } from "antd";
const { Header } = Layout;
const { Text } = Typography;

function login() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    localStorage.setItem("app-token", "value");
    window.location.reload();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="app-logo" />
        <Text strong className="app-title" type="warning">
          Salon93 Platform
        </Text>
      </Header>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}

export default login;
