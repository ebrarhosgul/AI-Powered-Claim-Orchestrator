import { ProcessDetailNode } from "@/types/claim";

export interface DefaultNodeProps {
  node: ProcessDetailNode;
}

export function DefaultNode({ node }: DefaultNodeProps) {
  return (
    <div className="border border-destructive p-4 rounded-md bg-destructive/10 mb-4">
      <h3 className="font-semibold text-lg text-destructive">Unknown Node Type: {node.title}</h3>
      <pre className="mt-4 p-2 bg-muted rounded-md text-xs overflow-auto">
        {JSON.stringify(node, null, 2)}
      </pre>
    </div>
  );
}
