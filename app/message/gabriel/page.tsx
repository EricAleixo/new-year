"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { GabeMessage } from "../_components/messages/GabeMessage";

export default function GabePage() {
  return (
    <ProtectedMessagePage friendName="gabriel">
      <GabeMessage></GabeMessage>
    </ProtectedMessagePage>
  );
}