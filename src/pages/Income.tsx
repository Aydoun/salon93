import {
  Row,
  Col,
  Typography,
  DatePicker,
  Space,
  Table,
  Statistic,
  Card,
  Button,
} from "antd";
// import { Link } from "react-router-dom";
import { getIncomeAction } from "../redux/action/sessions";
import {
  EuroCircleOutlined,
  CreditCardOutlined,
  AuditOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import { formatDate } from "src/utils/helpers";
import moment from "moment";
const { Title } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "workerName",
    key: "name",
    render: (text: any) => <a>{text}</a>,
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
    title: "Method",
    dataIndex: "paymentMethod",
    key: "pm",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>view session</a>
      </Space>
    ),
  },
];

const mainColumns = [
  {
    title: "Worker",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Clock-in",
    dataIndex: "clockIn",
    key: "cI",
  },
  {
    title: "Clock-out",
    dataIndex: "clockOut",
    key: "cO",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
];

function Income() {
  const { data: income, mainData, groupped } = getIncomeAction();

  const dayTotal = income.reduce((acc, cur) => acc + cur.total, 0);
  const cashTotal = income.reduce(
    (acc, cur) => (cur.paymentMethod === "cash" ? acc + cur.total : acc),
    0
  );
  const pinTotal = income.reduce(
    (acc, cur) => (cur.paymentMethod === "pin" ? acc + cur.total : acc),
    0
  );

  const expandedRowRender = ({ name }: any) => {
    const rowData = groupped[name];
    console.log("rowData :>> ", rowData);
    const subDayTotal = rowData.reduce((acc, cur) => acc + cur.total, 0);
    const subCashTotal = rowData.reduce((acc, cur) => {
      return cur.paymentMethod === "cash" ? acc + cur.total : acc;
    }, 0);
    const subPinTotal = rowData.reduce((acc, cur) => {
      return cur.paymentMethod === "pin" ? acc + cur.total : acc;
    }, 0);

    return (
      <>
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic
                title="Cash Total"
                prefix={<EuroCircleOutlined />}
                value={subCashTotal}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Pin Total"
                prefix={<CreditCardOutlined />}
                value={subPinTotal}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Total"
                prefix={<AuditOutlined />}
                value={subDayTotal}
              />
            </Card>
          </Col>
        </Row>
        <Table columns={columns} dataSource={rowData} pagination={false} />
      </>
    );
  };

  return (
    <>
      <Row justify="space-between">
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
        DagStaat
      </Title>
      <Row gutter={16}>
        <Col span={6}>
          <Statistic
            title="Cash Total"
            prefix={<EuroCircleOutlined />}
            value={cashTotal}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Pin Total"
            prefix={<CreditCardOutlined />}
            value={pinTotal}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Total"
            prefix={<AuditOutlined />}
            value={dayTotal}
          />
        </Col>
      </Row>
      <Table
        className="top-margin"
        columns={mainColumns}
        dataSource={mainData}
        expandable={{ expandedRowRender }}
      />
    </>
  );
}

export default Income;
