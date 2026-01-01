"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { YuriMessage } from "../_components/messages/YuriMessage";

export default function YuriPage() {
  return (
    <ProtectedMessagePage friendName="Yuri">
      <YuriMessage></YuriMessage>
    </ProtectedMessagePage>
  );
}