import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Row,
  Statistic,
  Table,
  Typography,
} from "antd";
import {
  EyeOutlined,
  KeyOutlined,
  ClockCircleOutlined,
  PrinterOutlined,
  EuroCircleOutlined,
  CreditCardOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { useMemo } from "react";
import moment from "moment";
import { getPresenceList, getSessionsAction } from "src/redux/action/sessions";
import { formatDate } from "src/utils/helpers";

const { Text, Title } = Typography;
const { Meta } = Card;

const columns = [
  {
    title: "Name",
    dataIndex: "workerName",
    key: "name",
    render: (text: string, record: any) => (
      <>
        <Avatar src={record.avatar} />
        <Text className="left-margin">{text}</Text>
      </>
    ),
  },
  {
    title: "Start Time",
    dataIndex: "createdAt",
    key: "st",
    render: (text: any) => {
      return text ? (
        formatDate(text)
      ) : (
        <Button shape="circle" icon={<ClockCircleOutlined />} />
      );
    },
  },
  {
    title: "End Time",
    dataIndex: "endTime",
    key: "et",
    render: (text: any) =>
      text ? (
        formatDate(text)
      ) : (
        <Button shape="circle" icon={<ClockCircleOutlined />} />
      ),
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
];

function Home() {
  const sessions = useMemo(getSessionsAction, []);
  const presenceList = useMemo(getPresenceList, []);

  const renderStatus = (
    startDate: string,
    endDate: string,
    roomNumber: string
  ) => {
    return (
      <>
        <div>
          <KeyOutlined />
          &nbsp;&nbsp;
          <Text>Room {roomNumber}</Text>
        </div>
        <div>
          <Badge status="success" />
          <Text>{formatDate(startDate)}</Text>
        </div>
        <div>
          <Badge status="error" />
          <Text>{formatDate(endDate)}</Text>
        </div>
      </>
    );
  };

  return (
    <>
      <Row gutter={8} justify="space-between">
        <Col span={4}>
          <DatePicker defaultValue={moment()} />
        </Col>
        <Col span={4}>
          <Button
            style={{ float: "right" }}
            icon={<PrinterOutlined />}
            type="primary"
          >
            Print
          </Button>
        </Col>
      </Row>
      <Title className="top-margin" level={3}>
        Presence
      </Title>
      <Row gutter={8}>
        {Object.keys(presenceList)
          .sort()
          .map((key) => {
            return (
              <Col span={12}>
                <Table
                  title={() => <Title level={4}>{key}</Title>}
                  size="small"
                  columns={columns}
                  dataSource={presenceList[key]}
                />
              </Col>
            );
          })}
      </Row>
      <Divider />
      <Title className="top-margin" level={3}>
        DagStaat
      </Title>
      <Row gutter={16}>
        <Col span={6}>
          <Statistic
            title="Cash Total"
            prefix={<EuroCircleOutlined />}
            value={1200}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Pin Total"
            prefix={<CreditCardOutlined />}
            value={500}
          />
        </Col>
        <Col span={6}>
          <Statistic title="Total" prefix={<AuditOutlined />} value={700} />
        </Col>
      </Row>
      <Divider />
      <Title className="top-margin" level={3}>
        Sessions (3)
      </Title>
      <Row gutter={8}>
        {sessions.slice(0, 3).map((session: any) => (
          <Col key={session.id} className="bottom-margin" span={8}>
            <Card actions={[<EyeOutlined key="view" />]}>
              <Meta
                avatar={<Avatar src={session.avatar} />}
                title={session.workerName}
                description={renderStatus(
                  session.createdAt,
                  session.endTime,
                  session.roomNumber
                )}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Home;
