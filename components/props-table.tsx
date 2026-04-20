interface Prop {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface PropsTableProps {
  props: Prop[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="mb-8 overflow-hidden rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-card">
            <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
            <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
            <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
            <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr
              key={prop.name}
              className={index !== props.length - 1 ? "border-b border-border" : ""}
            >
              <td className="px-4 py-3">
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-accent">
                  {prop.name}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="text-muted-foreground">{prop.type}</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                {prop.default || "-"}
              </td>
              <td className="px-4 py-3 text-muted-foreground">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
