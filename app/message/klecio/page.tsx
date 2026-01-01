"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { KlecioMessage } from "../_components/messages/KlecioMessage";

export default function GustavoPage() {
  return (
    <ProtectedMessagePage friendName="Julia">
      <KlecioMessage></KlecioMessage>
    </ProtectedMessagePage>
  );
}