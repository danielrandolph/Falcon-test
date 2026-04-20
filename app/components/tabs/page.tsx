"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Tabs, TabList, Tab, TabPanel } from "../../../package/dist/index.js";

const tabsProps = [
  { name: "selectedKey", type: "Key", description: "The currently selected tab key (controlled)" },
  { name: "defaultSelectedKey", type: "Key", description: "The default selected tab key (uncontrolled)" },
  { name: "disabledKeys", type: "Iterable<Key>", description: "Keys of tabs that should be disabled" },
  { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "The orientation of the tabs" },
  { name: "onSelectionChange", type: "(key: Key) => void", description: "Handler called when the selected tab changes" },
];

const tabProps = [
  { name: "id", type: "Key", description: "The unique identifier for the tab" },
  { name: "children", type: "ReactNode", description: "The content of the tab" },
  { name: "isDisabled", type: "boolean", default: "false", description: "Whether the tab is disabled" },
];

export default function TabsPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Tabs</h1>
        <p className="text-lg text-muted-foreground">
          Tabs organize content into multiple sections and allow users to navigate between them.
        </p>
      </div>

      <ComponentPreview
        title="Basic Tabs"
        description="Simple tab navigation"
        code={`<Tabs>
  <TabList>
    <Tab id="overview">Overview</Tab>
    <Tab id="features">Features</Tab>
    <Tab id="pricing">Pricing</Tab>
  </TabList>
  <TabPanel id="overview">Overview content here...</TabPanel>
  <TabPanel id="features">Features content here...</TabPanel>
  <TabPanel id="pricing">Pricing content here...</TabPanel>
</Tabs>`}
      >
        <Tabs>
          <TabList>
            <Tab id="overview">Overview</Tab>
            <Tab id="features">Features</Tab>
            <Tab id="pricing">Pricing</Tab>
          </TabList>
          <TabPanel id="overview">
            <div className="p-4 text-muted-foreground">Overview content here...</div>
          </TabPanel>
          <TabPanel id="features">
            <div className="p-4 text-muted-foreground">Features content here...</div>
          </TabPanel>
          <TabPanel id="pricing">
            <div className="p-4 text-muted-foreground">Pricing content here...</div>
          </TabPanel>
        </Tabs>
      </ComponentPreview>

      <ComponentPreview
        title="With Disabled Tab"
        description="Some tabs can be disabled"
        code={`<Tabs disabledKeys={["settings"]}>
  <TabList>
    <Tab id="profile">Profile</Tab>
    <Tab id="account">Account</Tab>
    <Tab id="settings">Settings (Disabled)</Tab>
  </TabList>
  <TabPanel id="profile">Profile settings...</TabPanel>
  <TabPanel id="account">Account settings...</TabPanel>
  <TabPanel id="settings">Settings panel...</TabPanel>
</Tabs>`}
      >
        <Tabs disabledKeys={["settings"]}>
          <TabList>
            <Tab id="profile">Profile</Tab>
            <Tab id="account">Account</Tab>
            <Tab id="settings">Settings (Disabled)</Tab>
          </TabList>
          <TabPanel id="profile">
            <div className="p-4 text-muted-foreground">Profile settings...</div>
          </TabPanel>
          <TabPanel id="account">
            <div className="p-4 text-muted-foreground">Account settings...</div>
          </TabPanel>
          <TabPanel id="settings">
            <div className="p-4 text-muted-foreground">Settings panel...</div>
          </TabPanel>
        </Tabs>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Tabs Props</h2>
      <PropsTable props={tabsProps} />

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Tab Props</h2>
      <PropsTable props={tabProps} />
    </DocsLayout>
  );
}
