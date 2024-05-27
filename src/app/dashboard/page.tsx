"use client";
import React from "react";
import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";
import { Col, Row } from "antd";

export default function IndexPage() {
  return (
    <div>
      <Authenticated key="home-page">
        <NavigateToResource />
      </Authenticated>
      <Col span={24}>
        {/* <PageBreadCrumbs items={["Dashboard"]} /> */}
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <h3>Welcome back, Ayeah 👋</h3>
            <p className="mb-0">Your current status and analytics are here</p>
          </Col>
        </Row>
      </Col>
    </div>
  );
}
