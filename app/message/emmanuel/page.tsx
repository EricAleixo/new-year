"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { EmmanuelMessage } from "../_components/messages/EmmanuelMessage";

export default function EmmanuelPage() {
  return (
    <ProtectedMessagePage friendName="emmanuel">
      <EmmanuelMessage></EmmanuelMessage>
    </ProtectedMessagePage>
  );
}