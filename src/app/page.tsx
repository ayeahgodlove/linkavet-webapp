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
      <DefaultLayout
        title={
          "Welcome to Linkavet - Comprehensive Veterinary Services for Your Furry Friends and Animal Farms "
        }
        description={
          "From routine check-ups to specialized treatments, we prioritize the health and happiness of your furry companions and farm. Additionally, explore our online store for a wide range of vet products, including nutrition, grooming essentials, and wellness items. Trust Linkavet for all your veterinary needs – where compassion meets excellence in pet care."
        }
        keywords="linkavet, homepage, veterinary, animal, farm, appointments, faqs"
      >
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
