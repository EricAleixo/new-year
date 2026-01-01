"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { BeaaaMessage } from "../_components/messages/BeaMessage";

export default function BeaPage() {
  return (
    <ProtectedMessagePage friendName="bea">
      <BeaaaMessage></BeaaaMessage>
    </ProtectedMessagePage>
  );
}