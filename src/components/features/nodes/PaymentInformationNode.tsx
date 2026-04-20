import { PaymentInformationNode } from "@/types/claim";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface PaymentInformationNodeProps {
  node: PaymentInformationNode;
}

export function PaymentInformationNodeComponent({ node }: PaymentInformationNodeProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-semibold">{node.title}</CardTitle>
        <Badge variant={node.status === "Completed" ? "default" : "secondary"}>{node.status}</Badge>
      </CardHeader>
      <CardContent>
        <div className="text-sm space-y-2">
          <div>
            <span className="font-medium text-muted-foreground">Bank Name: </span>
            <span>{node.bankName}</span>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">IBAN: </span>
            <span className="font-mono">{node.ibans}</span>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">Amount: </span>
            <span className="font-semibold text-lg text-primary">
              {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(node.amount)}
            </span>
          </div>
          <div className="pt-2 text-xs text-muted-foreground">
            {new Date(node.timestamp).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
