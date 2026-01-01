"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { MarcosMessage } from "../_components/messages/MarcosMessage";

export default function MarcosPage() {
  return (
    <ProtectedMessagePage friendName="marcos">
      <MarcosMessage></MarcosMessage>
    </ProtectedMessagePage>
  );
}