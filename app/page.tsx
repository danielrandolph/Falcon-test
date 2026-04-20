"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { StatCard } from "@/components/stat-card";
import { SpotlightSection } from "@/components/spotlight-section";
import { PerformanceChart } from "@/components/performance-chart";
import { Leaderboard } from "@/components/leaderboard";
import { FileText, ShoppingCart, Users, Settings } from "lucide-react";
import { 
  Tabs, 
  TabList, 
  Tab, 
  TabPanel, 
  Button,
  Disclosure,
  DisclosureHeader,
  DisclosurePanel 
} from "../falcon-ui-kit/dist/index.js";
import { DisclosureGroup } from "react-aria-components";

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
    <div className="tw:min-h-screen tw:bg-white tw:font-sans">
      <AppSidebar />
      <div className="tw:pl-56">
        <DashboardHeader />
        <main className="tw:p-6">
          {/* Tabs */}
          <div className="tw:mb-6">
            <Tabs defaultSelectedKey="agronomy">
              <TabList className="tw:bg-neutral-100 tw:rounded-lg tw:p-1 tw:w-fit">
                <Tab id="agronomy">Agronomy</Tab>
                <Tab id="grain">Grain</Tab>
                <Tab id="energy">Energy</Tab>
              </TabList>
              <TabPanel id="agronomy" className="tw:p-0">
                {/* Stats Row */}
                <div className="tw:mt-6 tw:grid tw:gap-4 md:tw:grid-cols-3">
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
                <div className="tw:mt-6">
                  <DisclosureGroup>
                    <Disclosure id="reports" className="tw:rounded-lg tw:border tw:border-neutral-200 tw:bg-white">
                      <div className="tw:flex tw:items-center tw:justify-between tw:pr-2">
                        <DisclosureHeader>My Reports</DisclosureHeader>
                        <Button variant="quiet" className="tw:h-8 tw:w-8 tw:px-0">
                          <Settings className="tw:h-4 tw:w-4" />
                        </Button>
                      </div>
                      <DisclosurePanel>
                        <div className="tw:text-sm tw:text-neutral-500">
                          Your saved reports will appear here.
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  </DisclosureGroup>
                </div>

                {/* Spotlight & Performance Row */}
                <div className="tw:mt-6 tw:grid tw:gap-4 lg:tw:grid-cols-2">
                  <SpotlightSection items={spotlightItems} />
                  <PerformanceChart />
                </div>

                {/* Leaderboards Row */}
                <div className="tw:mt-6 tw:grid tw:gap-4 lg:tw:grid-cols-2">
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
              <TabPanel id="grain" className="tw:p-0">
                <div className="tw:mt-6 tw:text-center tw:py-12 tw:text-neutral-500">
                  Grain dashboard content coming soon...
                </div>
              </TabPanel>
              <TabPanel id="energy" className="tw:p-0">
                <div className="tw:mt-6 tw:text-center tw:py-12 tw:text-neutral-500">
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
