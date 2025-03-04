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
import AppointmentForm from "@components/appointment/book-appointment.component";

const { Title } = Typography;

export default function IndexPage() {
  const router = useRouter(); // Use Next.js router or react-router-dom's useHistory()

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
                  <Title level={3}>Create New Appointments</Title>
                  <AppointmentForm />
                </Col>
              </Row>
            </PageContent>
          </Col>
        </div>
      </DefaultLayout>
    </Suspense>
  );
}
