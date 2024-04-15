"use client"
import { workflows } from "./projects/data/workflows";
import { Sidebar } from "@/components/project/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar workflows={workflows} className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
