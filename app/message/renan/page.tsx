"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { RenanMessage } from "../_components/messages/RenanMessage";

export default function RenanPage() {
  return (
    <ProtectedMessagePage friendName="renan">
      <RenanMessage></RenanMessage>
    </ProtectedMessagePage>
  );
}