"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  Row, 
  Column, 
  Cell 
} from "../../../package/dist/index.js";

const tableProps = [
  { name: "aria-label", type: "string", description: "Accessibility label for the table" },
  { name: "selectionMode", type: '"none" | "single" | "multiple"', default: '"none"', description: "The type of selection allowed" },
  { name: "selectionBehavior", type: '"toggle" | "replace"', default: '"toggle"', description: "How selection behaves on interaction" },
  { name: "sortDescriptor", type: "SortDescriptor", description: "The current sort state" },
  { name: "onSortChange", type: "(descriptor: SortDescriptor) => void", description: "Handler called when sort changes" },
  { name: "onRowAction", type: "(key: Key) => void", description: "Handler called when a row action is triggered" },
];

const columnProps = [
  { name: "id", type: "Key", description: "Unique identifier for the column" },
  { name: "isRowHeader", type: "boolean", default: "false", description: "Whether this column is the row header" },
  { name: "allowsSorting", type: "boolean", default: "false", description: "Whether the column allows sorting" },
  { name: "allowsResizing", type: "boolean", default: "false", description: "Whether the column allows resizing" },
  { name: "width", type: "number | string", description: "The width of the column" },
];

const sampleData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Viewer" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Editor" },
];

export default function TablePage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Table</h1>
        <p className="text-lg text-muted-foreground">
          Tables display sets of data organized in rows and columns. Built with 
          React Aria Table for full accessibility, sorting, and selection support.
        </p>
      </div>

      <ComponentPreview
        title="Basic Table"
        description="A simple data table with columns and rows"
        code={`<Table aria-label="Users">
  <TableHeader>
    <Column isRowHeader>Name</Column>
    <Column>Email</Column>
    <Column>Role</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>John Doe</Cell>
      <Cell>john@example.com</Cell>
      <Cell>Admin</Cell>
    </Row>
    <Row>
      <Cell>Jane Smith</Cell>
      <Cell>jane@example.com</Cell>
      <Cell>Editor</Cell>
    </Row>
  </TableBody>
</Table>`}
      >
        <div className="w-full overflow-auto">
          <Table aria-label="Users">
            <TableHeader>
              <Column isRowHeader>Name</Column>
              <Column>Email</Column>
              <Column>Role</Column>
            </TableHeader>
            <TableBody>
              {sampleData.map((user) => (
                <Row key={user.id}>
                  <Cell>{user.name}</Cell>
                  <Cell>{user.email}</Cell>
                  <Cell>{user.role}</Cell>
                </Row>
              ))}
            </TableBody>
          </Table>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Selectable Table"
        description="Table with row selection enabled"
        code={`<Table 
  aria-label="Users" 
  selectionMode="multiple"
>
  <TableHeader>
    <Column isRowHeader>Name</Column>
    <Column>Email</Column>
    <Column>Role</Column>
  </TableHeader>
  <TableBody>
    {/* rows */}
  </TableBody>
</Table>`}
      >
        <div className="w-full overflow-auto">
          <Table aria-label="Selectable Users" selectionMode="multiple">
            <TableHeader>
              <Column isRowHeader>Name</Column>
              <Column>Email</Column>
              <Column>Role</Column>
            </TableHeader>
            <TableBody>
              {sampleData.map((user) => (
                <Row key={user.id}>
                  <Cell>{user.name}</Cell>
                  <Cell>{user.email}</Cell>
                  <Cell>{user.role}</Cell>
                </Row>
              ))}
            </TableBody>
          </Table>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Single Selection"
        description="Table with single row selection"
        code={`<Table 
  aria-label="Users" 
  selectionMode="single"
  selectionBehavior="replace"
>
  {/* ... */}
</Table>`}
      >
        <div className="w-full overflow-auto">
          <Table 
            aria-label="Single Selection Users" 
            selectionMode="single"
            selectionBehavior="replace"
          >
            <TableHeader>
              <Column isRowHeader>Name</Column>
              <Column>Email</Column>
              <Column>Role</Column>
            </TableHeader>
            <TableBody>
              {sampleData.map((user) => (
                <Row key={user.id}>
                  <Cell>{user.name}</Cell>
                  <Cell>{user.email}</Cell>
                  <Cell>{user.role}</Cell>
                </Row>
              ))}
            </TableBody>
          </Table>
        </div>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Table Props</h2>
      <PropsTable props={tableProps} />

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Column Props</h2>
      <PropsTable props={columnProps} />
    </DocsLayout>
  );
}
