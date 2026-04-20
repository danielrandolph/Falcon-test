"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Calendar, DatePicker, DateRangePicker } from "../../../falcon-ui-kit/dist/index.js";

const calendarProps = [
  { name: "value", type: "DateValue", description: "The currently selected date (controlled)" },
  { name: "defaultValue", type: "DateValue", description: "The default selected date (uncontrolled)" },
  { name: "minValue", type: "DateValue", description: "The minimum allowed date" },
  { name: "maxValue", type: "DateValue", description: "The maximum allowed date" },
  { name: "isDisabled", type: "boolean", default: "false", description: "Whether the calendar is disabled" },
  { name: "isReadOnly", type: "boolean", default: "false", description: "Whether the calendar is read-only" },
  { name: "onChange", type: "(value: DateValue) => void", description: "Handler called when the date changes" },
];

const datePickerProps = [
  { name: "label", type: "string", description: "The label for the date picker" },
  { name: "description", type: "string", description: "A description for the date picker" },
  { name: "errorMessage", type: "string", description: "An error message to display" },
  { name: "value", type: "DateValue", description: "The currently selected date (controlled)" },
  { name: "defaultValue", type: "DateValue", description: "The default selected date (uncontrolled)" },
  { name: "granularity", type: '"day" | "hour" | "minute" | "second"', default: '"day"', description: "The granularity of the date" },
  { name: "isDisabled", type: "boolean", default: "false", description: "Whether the picker is disabled" },
  { name: "onChange", type: "(value: DateValue) => void", description: "Handler called when the date changes" },
];

export default function CalendarPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Calendar</h1>
        <p className="text-lg text-muted-foreground">
          Calendar components allow users to select dates and date ranges.
        </p>
      </div>

      <ComponentPreview
        title="Calendar"
        description="A standalone calendar for date selection"
        code={`<Calendar />`}
      >
        <Calendar />
      </ComponentPreview>

      <ComponentPreview
        title="DatePicker"
        description="Date input with a calendar popup"
        code={`<DatePicker label="Select a date" />`}
      >
        <DatePicker label="Select a date" />
      </ComponentPreview>

      <ComponentPreview
        title="DateRangePicker"
        description="Select a date range"
        code={`<DateRangePicker label="Trip dates" />`}
      >
        <DateRangePicker label="Trip dates" />
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Calendar Props</h2>
      <PropsTable props={calendarProps} />

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">DatePicker Props</h2>
      <PropsTable props={datePickerProps} />
    </DocsLayout>
  );
}
