"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { JordanMessage } from "../_components/messages/JordanMessage";

export default function RenanPage() {
  return (
    <ProtectedMessagePage friendName="jordan">
      <JordanMessage></JordanMessage>
    </ProtectedMessagePage>
  );
}