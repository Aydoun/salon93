import { Layout, Menu, Typography } from "antd";
import {
  HomeOutlined,
  WomanOutlined,
  DollarOutlined,
  SnippetsOutlined,
  SolutionOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
const { Header, Content, Sider } = Layout;
const { Text } = Typography;

function App() {
  return (
    <Layout>
      <Header className="header">
        <div className="app-logo" />
        <Text strong className="app-title" type="warning">
          Salon93 Platform
        </Text>
      </Header>
      <Content style={{ padding: "24px" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <Menu.Item icon={<HomeOutlined />} key="1">
                Home
              </Menu.Item>
              <Menu.Item icon={<WomanOutlined />} key="2">
                Sessions
              </Menu.Item>
              <Menu.Item icon={<DollarOutlined />} key="3">
                Fiancials
              </Menu.Item>
              <Menu.Item icon={<SnippetsOutlined />} key="4">
                Tax
              </Menu.Item>
              <Menu.Item icon={<SolutionOutlined />} key="5">
                Presence
              </Menu.Item>
              <Menu.Item icon={<SettingOutlined />} key="6">
                Management
              </Menu.Item>
              <Menu.Item icon={<LogoutOutlined />} key="7">
                Logout
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className="app-content">Content</Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default App;
