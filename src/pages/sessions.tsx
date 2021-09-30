// import { useEffect } from "react";
import { Row, Col, Card, Badge, Typography } from "antd";
import { Link } from "react-router-dom";
import { getSessionsAction } from "../redux/action/sessions";
import {
  EyeOutlined,
  CheckOutlined,
  CloseOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import { formatDate } from "src/utils/helpers";
const { Meta } = Card;
const { Text, Title } = Typography;

function Sessions() {
  const sessions = getSessionsAction();
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

  return (
    <>
      <Title level={3}>Active Sessions ({activeSessions.length})</Title>
      <Row gutter={8}>
        {activeSessions.map((session: any) => (
          <Col key={session.id} span={8}>
            <Card
              actions={[
                <Link to={`/session/${session.id}`}>
                  <EyeOutlined key="view" />
                </Link>,
                <CheckOutlined key="accept" />,
                <CloseOutlined key="reject" />,
              ]}
            >
              <Meta
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
      <br />
      <Title level={3}>Finished Sessions ({finishedSessions.length})</Title>
      <Row gutter={8}>
        {finishedSessions.map((session: any) => (
          <Col key={session.id} span={8}>
            <Card actions={[<EyeOutlined key="view" />]}>
              <Meta
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

export default Sessions;
