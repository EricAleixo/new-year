"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { GustavoMessage } from "../_components/messages/GustavoMessage";

export default function GustavoPage() {
  return (
    <ProtectedMessagePage friendName="Gustavo">
      <GustavoMessage />
    </ProtectedMessagePage>
  );
}