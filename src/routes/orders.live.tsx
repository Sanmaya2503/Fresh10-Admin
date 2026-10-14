"use client";
import { createFileRoute } from "@/lib/next-router-compat";
import { OrdersView } from "./orders.index";

export const Route = createFileRoute("/orders/live")({
  head: () => ({
    meta: [
      { title: "Live Orders — fresh10 Admin" },
      { name: "description", content: "Orders currently being fulfilled and delivered." },
      { property: "og:title", content: "Live Orders — fresh10 Admin" },
      { property: "og:description", content: "Orders currently being fulfilled and delivered." },
    ],
  }),
  component: () => <OrdersView title="Live Orders" description="Currently being fulfilled and delivered." group="live" />,
});
