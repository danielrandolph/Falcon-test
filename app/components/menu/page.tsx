"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { MenuTrigger, Menu, MenuItem, MenuSection, Button, SubmenuTrigger } from "../../../package/dist/index.js";

const menuProps = [
  { name: "children", type: "ReactNode", description: "The menu items" },
  { name: "onAction", type: "(key: Key) => void", description: "Handler called when an item is selected" },
  { name: "selectionMode", type: '"none" | "single" | "multiple"', default: '"none"', description: "The selection mode" },
  { name: "selectedKeys", type: "Iterable<Key>", description: "The currently selected keys (controlled)" },
  { name: "defaultSelectedKeys", type: "Iterable<Key>", description: "The default selected keys (uncontrolled)" },
  { name: "disabledKeys", type: "Iterable<Key>", description: "Keys that should be disabled" },
];

const menuItemProps = [
  { name: "id", type: "Key", description: "The unique identifier for the menu item" },
  { name: "children", type: "ReactNode", description: "The content of the menu item" },
  { name: "isDisabled", type: "boolean", default: "false", description: "Whether the item is disabled" },
  { name: "href", type: "string", description: "A URL to link to" },
];

export default function MenuPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Menu</h1>
        <p className="text-lg text-muted-foreground">
          Menus display a list of actions or options that a user can choose.
        </p>
      </div>

      <ComponentPreview
        title="Basic Menu"
        description="A simple dropdown menu"
        code={`<MenuTrigger>
  <Button>Actions</Button>
  <Menu>
    <MenuItem id="new">New file</MenuItem>
    <MenuItem id="copy">Copy</MenuItem>
    <MenuItem id="delete">Delete</MenuItem>
  </Menu>
</MenuTrigger>`}
      >
        <MenuTrigger>
          <Button>Actions</Button>
          <Menu>
            <MenuItem id="new">New file</MenuItem>
            <MenuItem id="copy">Copy</MenuItem>
            <MenuItem id="delete">Delete</MenuItem>
          </Menu>
        </MenuTrigger>
      </ComponentPreview>

      <ComponentPreview
        title="With Sections"
        description="Grouped menu items"
        code={`<MenuTrigger>
  <Button>Edit</Button>
  <Menu>
    <MenuSection title="Clipboard">
      <MenuItem id="cut">Cut</MenuItem>
      <MenuItem id="copy">Copy</MenuItem>
      <MenuItem id="paste">Paste</MenuItem>
    </MenuSection>
    <MenuSection title="Selection">
      <MenuItem id="select-all">Select All</MenuItem>
      <MenuItem id="deselect">Deselect</MenuItem>
    </MenuSection>
  </Menu>
</MenuTrigger>`}
      >
        <MenuTrigger>
          <Button>Edit</Button>
          <Menu>
            <MenuSection title="Clipboard">
              <MenuItem id="cut">Cut</MenuItem>
              <MenuItem id="copy">Copy</MenuItem>
              <MenuItem id="paste">Paste</MenuItem>
            </MenuSection>
            <MenuSection title="Selection">
              <MenuItem id="select-all">Select All</MenuItem>
              <MenuItem id="deselect">Deselect</MenuItem>
            </MenuSection>
          </Menu>
        </MenuTrigger>
      </ComponentPreview>

      <ComponentPreview
        title="With Submenu"
        description="Nested menu structure"
        code={`<MenuTrigger>
  <Button>File</Button>
  <Menu>
    <MenuItem id="new">New</MenuItem>
    <SubmenuTrigger>
      <MenuItem id="open">Open Recent</MenuItem>
      <Menu>
        <MenuItem id="doc1">Document 1</MenuItem>
        <MenuItem id="doc2">Document 2</MenuItem>
      </Menu>
    </SubmenuTrigger>
    <MenuItem id="save">Save</MenuItem>
  </Menu>
</MenuTrigger>`}
      >
        <MenuTrigger>
          <Button>File</Button>
          <Menu>
            <MenuItem id="new">New</MenuItem>
            <SubmenuTrigger>
              <MenuItem id="open">Open Recent</MenuItem>
              <Menu>
                <MenuItem id="doc1">Document 1</MenuItem>
                <MenuItem id="doc2">Document 2</MenuItem>
              </Menu>
            </SubmenuTrigger>
            <MenuItem id="save">Save</MenuItem>
          </Menu>
        </MenuTrigger>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Menu Props</h2>
      <PropsTable props={menuProps} />

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">MenuItem Props</h2>
      <PropsTable props={menuItemProps} />
    </DocsLayout>
  );
}
