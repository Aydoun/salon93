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

function Sessions() {
  const [modalOpen, setModalOpen] = useState(false);
  const selectedSession = useRef<any>();
  const sessions = useMemo(getSessionsAction, []);
  const activeSessions = sessions.filter((item) => !item.endTime);
  const finishedSessions = sessions.filter((item) => item.endTime);

  console.log("sessions :>> ", sessions);

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
          <Link to="/sessions/open">
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
      <Row gutter={8}>
        {finishedSessions.map((session: any) => (
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
