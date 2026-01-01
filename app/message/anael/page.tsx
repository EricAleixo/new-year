"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { AnaelMessage } from "../_components/messages/AnaelMessage";

export default function AnaelPage() {
  return (
    <ProtectedMessagePage friendName="anael">
      <AnaelMessage></AnaelMessage>
    </ProtectedMessagePage>
  );
}