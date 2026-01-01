"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { ElionaisMessage } from "../_components/messages/EionaisMessage";

export default function ElionaisPage() {
  return (
    <ProtectedMessagePage friendName="elionais">
      <ElionaisMessage></ElionaisMessage>
    </ProtectedMessagePage>
  );
}