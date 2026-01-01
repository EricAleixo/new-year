"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { IttaloMessage } from "../_components/messages/IttaloMessage";

export default function IttaloPage() {
  return (
    <ProtectedMessagePage friendName="Ittalo">
      <IttaloMessage></IttaloMessage>
    </ProtectedMessagePage>
  );
}