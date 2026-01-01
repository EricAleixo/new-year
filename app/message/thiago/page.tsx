"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { ThiagoMessage } from "../_components/messages/ThiagoMessage";

export default function ThiagoPage() {
  return (
    <ProtectedMessagePage friendName="thiago">
      <ThiagoMessage></ThiagoMessage>
    </ProtectedMessagePage>
  );
}