import { Layout, Form, Input, Button, Typography, Card } from "antd";
const { Header } = Layout;
const { Text, Title } = Typography;

function login() {
  const onFinish = (values: any) => {
    localStorage.setItem("app-token", "value");
    window.location.reload();
  };

  return (
    <Layout>
      <Header className="header">
        <div className="app-logo" />
        <Text strong className="app-title" type="warning">
          Salon93 Platform
        </Text>
      </Header>
      <Card>
        <Form
          name="basic"
          className="login-form"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Title level={3} className="bottom-margin">
            Login
          </Title>
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
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
}

export default login;
