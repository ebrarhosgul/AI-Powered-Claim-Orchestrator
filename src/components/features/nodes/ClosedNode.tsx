import { ClosedNode } from "@/types/claim";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ClosedNodeProps {
  node: ClosedNode;
}

export function ClosedNodeComponent({ node }: ClosedNodeProps) {
  return (
    <Card className="mb-4 bg-muted/30">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-semibold">{node.title}</CardTitle>
        <Badge variant={node.status === "Completed" ? "default" : "secondary"}>{node.status}</Badge>
      </CardHeader>
      <CardContent>
        <div className="text-sm space-y-2">
          <div>
            <span className="font-medium text-muted-foreground">Closure Reason: </span>
            <p className="mt-1">{node.closureReason}</p>
          </div>
          <div className="pt-2 text-xs text-muted-foreground">
            {new Date(node.timestamp).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
