"use client";
import { Courier_Prime, Roboto_Mono } from "next/font/google";
import WindowControls from "../WindowControls/WindowControls";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const courierPrime = Courier_Prime({ subsets: ["latin"], weight: ["400"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function CodeSnippet({
  title,
  className,
}: {
  title: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-120 shadow-lg bg-white max-h-47.5 pb-2 px-2 rounded-3xl flex flex-col border-8 border-gray-50",
        className,
      )}
    >
      <div className="py-2 flex flex-row justify-between px-2">
        <WindowControls />
        <div>
          <p
            className={`${courierPrime.className} text-gray-400 text-sm tracking-tight`}
          >
            {title}
          </p>
        </div>
      </div>
      <pre
        className={`${robotoMono.className}  pointer-events-none p-5 bg-linear-180 from-[#101829] to-[#282F55]  relative text-sm rounded-2xl  grow overflow-hidden text-[#D1E9FF]`}
      >
        <div className="w-full z-20 pointeven h-full bg-linear-180 left-0 top-0 mask-t-from-0% from-[#101829]/10 to-[#282F55] absolute"></div>
        <motion.div
          initial={{ y: "0px" }}
          animate={{
            y: "-50%",
            transition: {
              duration: 12,
              repeatDelay: 2,
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
        >
          {JSON.stringify(
            {
              type: "automated_report",
              output_format: "presentation",
              presentation_settings: {
                length: 10,
                template: "business-report",
                language: "en",
                tone: "professional",
                include_charts: true,
                include_executive_summary: true,
                include_conclusion_slide: true,
              },
              schedule: {
                recurring: true,
                frequency: "monthly",
                delivery: "download",
              },
              report_data: {
                meta: {
                  title: "Monthly Performance Report – Q3 Overview",
                  period: "September 2026",
                },
                kpis: [
                  {
                    name: "Revenue Growth",
                    value: 12,
                    unit: "%",
                    trend: "up",
                  },
                  {
                    name: "Customer Acquisition Growth",
                    value: 9,
                    unit: "%",
                    trend: "up",
                  },
                  {
                    name: "Churn Rate",
                    value: 3.4,
                    unit: "%",
                    trend: "down",
                  },
                  {
                    name: "Marketing Efficiency",
                    value: 18,
                    unit: "%",
                    trend: "up",
                  },
                ],
                revenue: {
                  total: 1240000,
                  currency: "USD",
                  by_segment: [
                    { label: "Enterprise", value: 620000 },
                    { label: "Mid-Market", value: 410000 },
                    { label: "SMB", value: 210000 },
                  ],
                },
                customer_acquisition: {
                  new_customers: 1320,
                  conversion_rate: 4.8,
                  channels: [
                    { label: "Organic Search", value: 42 },
                    { label: "Paid Ads", value: 31 },
                    { label: "Referrals", value: 17 },
                    { label: "Partnerships", value: 10 },
                  ],
                },
                engagement: {
                  monthly_active_users: 18450,
                  avg_sessions_per_user: 6.3,
                  top_features: [
                    "Presentation Generation",
                    "Chart & Data Slides",
                    "Export to PowerPoint",
                  ],
                },
                retention: {
                  retention_rate: 96.6,
                  churn_rate: 3.4,
                },
                forecast: {
                  expected_revenue: 1320000,
                  growth_range: "6–8%",
                },
              },
            },
            null,
            2,
          )}
        </motion.div>
      </pre>
    </div>
  );
}
