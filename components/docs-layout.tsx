import { Sidebar } from "./sidebar";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pl-64">
        <div className="mx-auto max-w-4xl px-8 py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
