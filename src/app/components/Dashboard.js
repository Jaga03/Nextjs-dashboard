"use client";

import Header from "./Header";
import dynamic from "next/dynamic";


const AccountProgress = dynamic(() => import("./AccountProgress"), { ssr: false });
const SalesGrowth = dynamic(() => import("./SalesGrowth"), { ssr: false });
const FinancialWellbeing = dynamic(() => import("./FinancialWellbeing"), { ssr: false });
const StepsCompleted = dynamic(() => import("./StepsStatus"), { ssr: false });
const TotalFranchisees = dynamic(() => import("./TotalFranchisees"), { ssr: false });
const ProspectLeads = dynamic(() => import("./ProspectLeads"), { ssr: false });
const PendingQuestions = dynamic(() => import("./PendingQuestions"), { ssr: false });
const ChatAssistant = dynamic(() => import("./ChatAssistant"), { ssr: false });

function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="space-y-6">
          <AccountProgress />
          <StepsCompleted />
        </div>

        <div className="space-y-6">
          <TotalFranchisees />
          <FinancialWellbeing />
        </div>

        <div className="space-y-14">
          <SalesGrowth />
          <ProspectLeads />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <PendingQuestions />
        <ChatAssistant />
      </div>
    </div>
  );
}

export default Dashboard;
