import { TowingServiceNode } from "@/types/claim";

export interface TowingNodeProps {
  node: TowingServiceNode;
}

export function TowingNode({ node }: TowingNodeProps) {
  return (
    <div className="border border-border p-4 rounded-md bg-card mb-4">
      <h3 className="font-semibold text-lg">{node.title}</h3>
      <div className="mt-2 text-sm text-muted-foreground">
        <p>Status: {node.status}</p>
        <p>Timestamp: {new Date(node.timestamp).toLocaleString()}</p>
      </div>
      <pre className="mt-4 p-2 bg-muted rounded-md text-xs overflow-auto">
        {JSON.stringify(node, null, 2)}
      </pre>
    </div>
  );
}
