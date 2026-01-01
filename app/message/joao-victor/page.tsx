"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { JoaoVictorMessage } from "../_components/messages/JoaoVictorMessage";

export default function JoaoVictorPage() {
  return (
    <ProtectedMessagePage friendName="joão victor">
      <JoaoVictorMessage></JoaoVictorMessage>
    </ProtectedMessagePage>
  );
}