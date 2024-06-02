"use client";
import React from "react";
import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";
import { Col, Row } from "antd";
import { FcMoneyTransfer, FcSalesPerformance } from "react-icons/fc";
import FeatureCard from "@components/dashboard/feature-card.component";
import { MdOutlineInventory } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import RecentOrderList from "@components/dashboard/recent-order";

export default function IndexPage() {
  return (
    <div>
      <Col span={24}>
        <Authenticated key="home-page">
          <NavigateToResource />
        </Authenticated>
        {/* <PageBreadCrumbs items={["Dashboard"]} /> */}
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <h3>Welcome back, Ayeah 👋</h3>
            <p className="mb-0">Your current status and analytics are here</p>
          </Col>

          <Col sm={8} md={6} span={24}>
            <FeatureCard
              icon={<FcSalesPerformance size={24} />}
              title="Orders"
              price="1,000"
            />
          </Col>

          <Col sm={8} md={6} span={24}>
            <FeatureCard
              icon={<MdOutlineInventory size={24} fontWeight={"bold"} />}
              title="Inventory"
              price="05"
            />
          </Col>
          <Col sm={8} md={6} span={24}>
            <FeatureCard
              icon={<RiCustomerService2Line size={24} fontWeight={"bold"} />}
              title="Customers"
              price="05"
            />
          </Col>
          <Col sm={8} md={6} span={24}>
            <FeatureCard
              icon={<FcMoneyTransfer size={24} fontWeight={"bold"} />}
              title="Revenue"
              price="05"
            />
          </Col>

          <Col xs={22} md={24}>
            <RecentOrderList />
          </Col>
        </Row>
      </Col>
    </div>
  );
}
