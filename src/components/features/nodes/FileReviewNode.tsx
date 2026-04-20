import { FileReviewNode } from "@/types/claim";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface FileReviewNodeProps {
  node: FileReviewNode;
}

export function FileReviewNodeComponent({ node }: FileReviewNodeProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-semibold">{node.title}</CardTitle>
        <Badge variant={node.status === "Completed" ? "default" : "secondary"}>{node.status}</Badge>
      </CardHeader>
      <CardContent>
        <div className="text-sm space-y-2">
          <div>
            <span className="font-medium text-muted-foreground">Reviewer ID: </span>
            <span>{node.reviewerId}</span>
          </div>
          {node.notes && (
            <div>
              <span className="font-medium text-muted-foreground">Notes: </span>
              <p className="mt-1">{node.notes}</p>
            </div>
          )}
          <div className="pt-2 text-xs text-muted-foreground">
            {new Date(node.timestamp).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
