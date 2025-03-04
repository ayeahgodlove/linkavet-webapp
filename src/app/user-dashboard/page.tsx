"use client";
import React, { Suspense } from "react";
import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";
import { Col, Row, Spin, Typography, Table, Button } from "antd";
import { eventAPI } from "@store/api/event_api";
import DefaultLayout from "@layouts/default-layout";
import PageContent from "@components/page-content/page-content";
import { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";

const { Title } = Typography;

// Define Appointment Data Type
interface Appointment {
  key: string;
  date: string;
  time: string;
  doctor: string;
  status: string;
}

// Sample Appointments Data
const appointmentsData: Appointment[] = [
  {
    key: "1",
    date: "2024-09-18",
    time: "10:00 AM",
    doctor: "Dr. Emily Green",
    status: "Confirmed",
  },
  {
    key: "2",
    date: "2024-09-20",
    time: "2:00 PM",
    doctor: "Dr. John Brown",
    status: "Pending",
  },
];

// Define columns for the appointments table
const columns: ColumnsType<Appointment> = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Vet Doctor",
    dataIndex: "doctor",
    key: "doctor",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];
export default function IndexPage() {
  const router = useRouter(); // Use Next.js router or react-router-dom's useHistory()

  const handleNewAppointmentClick = () => {
    router.push("/user-dashboard/new-appointment"); // Navigate to appointment creation page
  };

  const {
    data: events,
    isLoading: isLoadingEvent,
    isFetching: isFetchEvent,
  } = eventAPI.useFetchAllEventsQuery(1);

  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            minHeight: "65vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      }
    >
      <DefaultLayout
        title={"Store - LinkaVet | Quality Pet Products"}
        description={
          "Shop high-quality pet products at LinkaVet. From pet food to accessories, find everything your pet needs in our online store."
        }
        keywords="pet products, veterinary store, LinkaVet store, pet food, pet accessories, buy pet supplies"
        uri="store"
      >
        <div>
          <Col span={24}>
            <Authenticated key="home-page">
              <NavigateToResource />
            </Authenticated>
            <PageContent>
              <Row gutter={[32, 32]} justify={"center"} align={"middle"}>
                <Col xs={24} md={20} lg={16}>
                  <h3>Welcome back, Ayeah 👋</h3>
                  <p className="mb-0">
                    With linkavet.com your animal farm and furry friends are
                    save.
                  </p>

                  <Title level={3}>Upcoming Appointments</Title>
                  <Table
                    dataSource={appointmentsData}
                    columns={columns}
                    pagination={false}
                    bordered
                  />
                  <Button
                    type="primary"
                    style={{ marginTop: "16px" }}
                    onClick={handleNewAppointmentClick}
                  >
                    Book New Appointment
                  </Button>
                </Col>
              </Row>
            </PageContent>
          </Col>
        </div>
      </DefaultLayout>
    </Suspense>
  );
}
