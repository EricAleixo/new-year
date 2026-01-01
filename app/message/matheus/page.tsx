"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { MatheusMessage } from "../_components/messages/MatheusMessage";

export default function MatheusPage() {
  return (
    <ProtectedMessagePage friendName="matheus">
      <MatheusMessage></MatheusMessage>
    </ProtectedMessagePage>
  );
}