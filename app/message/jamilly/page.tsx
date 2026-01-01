"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { JamillyMessage } from "../_components/messages/JamillyMessage";

export default function IttaloPage() {
  return (
    <ProtectedMessagePage friendName="jamilly">
      <JamillyMessage></JamillyMessage>
    </ProtectedMessagePage>
  );
}