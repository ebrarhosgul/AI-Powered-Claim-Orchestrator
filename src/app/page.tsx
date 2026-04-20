import { ClaimDashboard } from "@/components/features/ClaimDashboard";
import { mockClaimData } from "@/data/mockClaim";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <ClaimDashboard initialData={mockClaimData} />
    </main>
  );
}
