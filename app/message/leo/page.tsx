"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { LeoMessage } from "../_components/messages/LeoMessage";

export default function AnaelPage() {
  return (
    <ProtectedMessagePage friendName="léo">
      <LeoMessage></LeoMessage>
    </ProtectedMessagePage>
  );
}