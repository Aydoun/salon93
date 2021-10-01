// import { useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Badge,
  Typography,
  Button,
  Divider,
  DatePicker,
  Modal,
  Avatar,
  Table,
} from "antd";
import { Link } from "react-router-dom";
import { getSessionsAction } from "../redux/action/sessions";
import {
  EyeOutlined,
  CheckOutlined,
  CloseOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import { formatDate } from "src/utils/helpers";
import { useMemo, useRef, useState } from "react";
const { Meta } = Card;
const { Text, Title } = Typography;

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
    render: (text: any) => formatDate(text),
  },
  {
    title: "End Time",
    dataIndex: "endTime",
    key: "et",
    render: (text: any) => formatDate(text),
  },
  {
    title: "Room",
    dataIndex: "roomNumber",
    key: "rn",
  },
  {
    title: "Payment Method",
    dataIndex: "paymentMethod",
    key: "pm",
  },
  {
    title: "Action",
    key: "action",
    render: () => <Link to="/sessions">view session</Link>,
  },
];

function Sessions() {
  const [modalOpen, setModalOpen] = useState(false);
  const selectedSession = useRef<any>();
  const sessions = useMemo(getSessionsAction, []);
  const activeSessions = sessions.filter((item) => !item.endTime);
  const finishedSessions = sessions.filter((item) => item.endTime);

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

  const renderModal = () => {
    const { createdAt, roomNumber, endTime, paymentMethod, status } =
      selectedSession.current || {};

    return (
      <>
        <div>{renderStatus(createdAt, endTime, roomNumber)}</div>
        <div>
          <Text strong>Paid by: {paymentMethod}</Text>
        </div>
        <div>
          <Text strong>Status: {status === 0 ? "Closed" : "Active"}</Text>
        </div>
      </>
    );
  };

  return (
    <>
      <Row justify="space-between">
        <Col span={4}>
          <DatePicker />
        </Col>
        <Col span={4}>
          <Link style={{ float: "right" }} to="/sessions/open">
            <Button type="primary">Open new Session</Button>
          </Link>
        </Col>
      </Row>
      <Title className="top-margin" level={3}>
        Active Sessions ({activeSessions.length})
      </Title>
      <Row gutter={8}>
        {activeSessions.map((session: any) => (
          <Col key={session.id} className="bottom-margin" span={8}>
            <Card
              actions={[
                <EyeOutlined
                  onClick={() => {
                    selectedSession.current = session;
                    setModalOpen(true);
                  }}
                  key="view"
                />,
                <CheckOutlined key="accept" />,
                <CloseOutlined key="reject" />,
              ]}
            >
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
      <Divider />
      <Title className="top-margin" level={3}>
        Finished Sessions ({finishedSessions.length})
      </Title>
      <Table columns={columns} dataSource={finishedSessions} />
      <Modal
        title="Session Details"
        visible={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        {renderModal()}
      </Modal>
    </>
  );
}

export default Sessions;
