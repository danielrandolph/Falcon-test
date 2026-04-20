"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { StatCard } from "@/components/stat-card";
import { SpotlightSection } from "@/components/spotlight-section";
import { PerformanceChart } from "@/components/performance-chart";
import { Leaderboard } from "@/components/leaderboard";
import { FileText, ShoppingCart, Users, ChevronDown, Settings } from "lucide-react";
import { Tabs, TabList, Tab, TabPanel } from "../falcon-ui-kit/dist/index.js";

const spotlightItems = [
  { name: "Julia Tkachenko", href: "/clients/1", count: 2 },
  { name: "John Farmer", href: "/clients/2", count: 4 },
  { name: "Kostya Koshlak", href: "/clients/3", count: 2 },
  { name: "Anna Tovstyk", href: "/clients/4", count: 1 },
  { name: "Gizar Akhatov", href: "/clients/5", count: 2 },
  { name: "Bill Hader", href: "/clients/6", count: 7 },
];

const performanceLeaderboard = [
  {
    rank: 1,
    name: "Diana Sales 1: $106,701",
    value: "$106,701",
    details: ["$106,701 sold", "$0 booked"],
  },
  {
    rank: 2,
    name: "John Qwe Farmer: $42,996",
    value: "$42,996",
    details: ["$42,996 sold", "$0 booked"],
  },
  {
    rank: 3,
    name: "Austin Maske: $106,701",
    value: "$106,701",
    details: ["$28,063 sold", "$0 booked"],
  },
  {
    rank: 4,
    name: "Yehor Rozdolovskiy: $106,701",
    value: "$106,701",
    details: ["$3,317 sold", "$0 booked"],
  },
  {
    rank: 5,
    name: "Diana Sales 2 (Agronomy) $710",
    value: "$710",
    details: ["$700sold", "$0 booked"],
  },
];

const actionsLeaderboard = [
  {
    rank: 1,
    name: "Automation Salesperson: 4411",
    value: "4411",
    details: ["1617 orders", "2794 quotes", "0 plans"],
  },
  {
    rank: 2,
    name: "Pavel Admin: 197",
    value: "197",
    details: ["194 orders", "1 quotes", "2 plans"],
  },
  {
    rank: 3,
    name: "Diana Admin: 103",
    value: "103",
    details: ["79 orders", "24 quotes", "0 plans"],
  },
  {
    rank: 4,
    name: "Abr Admin: 73",
    value: "73",
    details: ["58 orders", "15 quotes", "0 plans"],
  },
  {
    rank: 5,
    name: "RVC Coop - Martelle: 47",
    value: "47",
    details: ["37 orders", "10 quotes", "0 plans"],
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <AppSidebar />
      <div className="pl-56">
        <DashboardHeader />
        <main className="p-6">
          {/* Tabs */}
          <div className="mb-6">
            <Tabs defaultSelectedKey="agronomy">
              <TabList className="!bg-[#f0f1f2] !rounded-lg !p-1 !w-fit">
                <Tab id="agronomy" className="!text-[#111111]">Agronomy</Tab>
                <Tab id="grain" className="!text-[#111111]">Grain</Tab>
                <Tab id="energy" className="!text-[#111111]">Energy</Tab>
              </TabList>
              <TabPanel id="agronomy">
                {/* Stats Row */}
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <StatCard
                    title="Quotes"
                    value="11,189"
                    icon={FileText}
                    badges={[
                      { value: "142", label: "Pending Approval" },
                      { value: "36", label: "New Requests" },
                    ]}
                  />
                  <StatCard
                    title="Orders"
                    value="10,962"
                    icon={ShoppingCart}
                    badges={[
                      { value: "75", label: "Pending Approval" },
                      { value: "9,256", label: "Open Orders" },
                    ]}
                  />
                  <StatCard
                    title="Clients"
                    value="13,042"
                    icon={Users}
                    badges={[
                      { value: "545", label: "Pending Invitations" },
                      { value: "752", label: "Active Clients" },
                    ]}
                  />
                </div>

                {/* My Reports Collapsible */}
                <div className="mt-6 rounded-lg border border-[#dee3e5] bg-white">
                  <button className="flex w-full items-center justify-between p-4">
                    <div className="flex items-center gap-2">
                      <ChevronDown className="h-4 w-4 text-[#6f7578]" />
                      <span className="font-medium text-[#111111]">My Reports</span>
                    </div>
                    <button className="rounded p-1 text-[#6f7578] hover:bg-[#f0f1f2]">
                      <Settings className="h-4 w-4" />
                    </button>
                  </button>
                </div>

                {/* Spotlight & Performance Row */}
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <SpotlightSection items={spotlightItems} />
                  <PerformanceChart />
                </div>

                {/* Leaderboards Row */}
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <Leaderboard
                    title="Leaderboard - Performance"
                    period="Current Crop Year"
                    items={performanceLeaderboard}
                  />
                  <Leaderboard
                    title="Leaderboard - Actions"
                    period="Current Crop Year"
                    items={actionsLeaderboard}
                  />
                </div>
              </TabPanel>
              <TabPanel id="grain">
                <div className="mt-6 text-center py-12 text-[#6f7578]">
                  Grain dashboard content coming soon...
                </div>
              </TabPanel>
              <TabPanel id="energy">
                <div className="mt-6 text-center py-12 text-[#6f7578]">
                  Energy dashboard content coming soon...
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
