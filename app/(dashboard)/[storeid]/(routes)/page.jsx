import prismaDb from "@/lib/prismadb";
import React from "react";

const DashboardPage = async ({ params }) => {
  const store = await prismaDb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active Store: {store?.name};</div>;
};

export default DashboardPage;
