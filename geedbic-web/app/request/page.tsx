import { Suspense } from "react";
import RequestQuotePage from "@/components/request/RequestPage";

export default function RequestPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-gray-500">Loading...</div>}>
      <RequestQuotePage />
    </Suspense>
  );
}
