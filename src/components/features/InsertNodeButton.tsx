import { PlusCircle } from "lucide-react";
import { useClaimStore } from "@/store/useClaimStore";
import { InformationNoteSchema } from "@/types/claim";

interface InsertNodeButtonProps {
  index: number;
}

export function InsertNodeButton({ index }: InsertNodeButtonProps) {
  const { insertNode } = useClaimStore();

  const handleAddNote = () => {
    const newNode = InformationNoteSchema.parse({
      id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(),
      status: "In Progress",
      timestamp: new Date().toISOString(),
      title: "Information Note",
      message: "",
    });
    insertNode(newNode, index);
  };

  return (
    <div className="flex justify-center my-2 transition-all z-10 relative">
      <button 
        onClick={handleAddNote}
        className="bg-background/90 backdrop-blur-sm border border-border rounded-full py-1.5 px-4 shadow-sm hover:shadow-md hover:bg-accent hover:text-accent-foreground text-muted-foreground flex items-center justify-center gap-2 text-xs font-medium cursor-pointer active:scale-95 transition-all"
      >
        <PlusCircle className="h-4 w-4" />
        Add Information Note
      </button>
    </div>
  );
}
