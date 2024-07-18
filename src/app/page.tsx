"use client";

import { Suspense } from "react";
import { Spin } from "antd";
import DefaultLayout from "@layouts/default-layout";
import AppHero from "@components/app-hero/app-hero.component";
import IntroSection from "@components/app-service/intro-section.component";
import AboutUs from "@components/app-about/app-about.component";
import ProductSection from "@components/app-product/app-product.component";
import TeamSection from "@components/app-team/app-team.component";
import FaqSection from "@components/faq/faq.component";
import ServicesSection from "@components/app-service/service.component";
import Testimonials from "@components/testimonial/testimonial.component";
import BlogSection from "@components/blog/blog.component";

export default function IndexPage() {
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
      <DefaultLayout>
        <AppHero />
        <IntroSection />
        <AboutUs />
        <ProductSection /> 
        <TeamSection />
        <ServicesSection />
        <FaqSection />
        <Testimonials />
        <BlogSection />
      </DefaultLayout>
    </Suspense>
  );
}
