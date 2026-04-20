import { ProcessDetailNode } from "@/types/claim";
import { NodeRegistry } from "../registry/NodeRegistry";
import { DefaultNode } from "./nodes/DefaultNode";

export interface TimelineNodeRendererProps {
  node: ProcessDetailNode;
}

export function TimelineNodeRenderer({ node }: TimelineNodeRendererProps) {
  const Component = NodeRegistry[node.title] as React.ComponentType<{ node: ProcessDetailNode }> | undefined;

  if (!Component) {
    return <DefaultNode node={node} />;
  }

  return <Component node={node} />;
}
