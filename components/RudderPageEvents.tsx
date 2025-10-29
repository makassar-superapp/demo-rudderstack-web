"use client";

import { useEffect } from "react";
import useRudderStackAnalytics from "@/useRudderAnalytics";

export default function RudderPageEvents() {
  const analytics = useRudderStackAnalytics();

  useEffect(() => {
    if (analytics) {
      analytics.getAnonymousId();
      analytics.page();
    }
  }, [analytics]);

  return null;
}
