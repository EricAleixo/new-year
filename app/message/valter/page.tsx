"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { ValterMessage } from "../_components/messages/ValterMessage";

export default function ValterPage() {
  return (
    <ProtectedMessagePage friendName="Valter">
      <ValterMessage></ValterMessage>
    </ProtectedMessagePage>
  );
}