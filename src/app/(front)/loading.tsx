import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="flex justify-center items-center my-5">
      <div className="animate-spin w-20 h-20 border-t-4 border-b-4  border-orange-400 rounded-full"></div>
    </div>
    // <div className="content-center">
    //   <Skeleton className="w-full h-[20px] rounded-full mt-4" />
    //   <Skeleton className="w-full h-[20px] rounded-full mt-4" />
    //   <Skeleton className="w-full h-[20px] rounded-full mt-4" />
    //   <Skeleton className="w-full h-[20px] rounded-full" />
    // </div>
  );
}
