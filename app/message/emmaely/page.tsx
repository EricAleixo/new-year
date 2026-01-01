"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { EmilyMessage } from "../_components/messages/EmilyMessage";
import { EmmaelyMessage } from "../_components/messages/EmmaelyMessage";

export default function EmmaelyPage() {
  return (
    <ProtectedMessagePage friendName="emmaely">
      <EmmaelyMessage></EmmaelyMessage>
    </ProtectedMessagePage>
  );
}