"use client";

import ProtectedMessagePage from "@/app/_components/ProtectPage";
import { JuliaMessage } from "../_components/messages/JuliaMessage";

export default function GustavoPage() {
  return (
    <ProtectedMessagePage friendName="Julia">
      <JuliaMessage></JuliaMessage>
    </ProtectedMessagePage>
  );
}