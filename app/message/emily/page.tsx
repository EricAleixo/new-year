"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { EmilyMessage } from "../_components/messages/EmilyMessage";

export default function EmilyPage() {
  return (
    <ProtectedMessagePage friendName="emily">
      <EmilyMessage></EmilyMessage>
    </ProtectedMessagePage>
  );
}