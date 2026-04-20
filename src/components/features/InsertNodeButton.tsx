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
      message: "Please double click to edit note or provide context.",
    });
    insertNode(newNode, index);
  };

  return (
    <div className="flex justify-center -my-2 hover:my-1 opacity-0 hover:opacity-100 transition-all duration-200 z-10 relative">
      <button 
        onClick={handleAddNote}
        className="bg-background border border-border rounded-full p-1 shadow-sm hover:shadow-md hover:bg-accent hover:text-accent-foreground text-muted-foreground flex items-center gap-1 text-xs pr-3 cursor-pointer"
      >
        <PlusCircle className="h-5 w-5" />
        Add Note
      </button>
    </div>
  );
}
