import { useClaimStore } from "@/store/useClaimStore";
import { TimelineNodeRenderer } from "./TimelineNodeRenderer";
import { InsertNodeButton } from "./InsertNodeButton";

export function Timeline() {
  const { timelineNodes } = useClaimStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
      <div className="md:col-span-8 flex flex-col pt-2 relative">
        <div className="absolute left-6 top-8 bottom-8 w-px bg-border -z-10" />
        {timelineNodes.length > 0 && <InsertNodeButton index={0} />}
        {timelineNodes.map((node, index) => (
          <div key={node.id} className="relative z-0">
            <TimelineNodeRenderer node={node} />
            <InsertNodeButton index={index + 1} />
          </div>
        ))}
      </div>
      <div className="md:col-span-4 hidden md:block">
        <div className="sticky top-6 p-5 border border-border rounded-xl bg-card shadow-sm">
          <h2 className="font-semibold text-lg mb-3">Claim Context</h2>
          <div className="space-y-4">
            <div className="p-3 bg-muted rounded-md text-sm text-muted-foreground">
              Select or interact with nodes on the left to see dynamic AI insights and contextual data here.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
