import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

export default async function Home() {
  // const user = db.use
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button>Get Started</Button>
    </div>
  );
}
