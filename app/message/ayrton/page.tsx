"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { AyrtonMessage } from "../_components/messages/AyrtonMessage";

export default function AyrtonPage() {
  return (
    <ProtectedMessagePage friendName="ayrton">
      <AyrtonMessage></AyrtonMessage>
    </ProtectedMessagePage>
  );
}