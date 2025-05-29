"use client";

import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Messages";
import Controls from "./Controls";

const CONFIG_ID = "";

export default function ClientComponent({
  accessToken,
}: {
  accessToken: string;
}) {
  if (CONFIG_ID === "") {
    throw new Error("Please set the CONFIG_ID constant in components/Chat.tsx");
  }

  return (
    <div>
      <VoiceProvider
        configId={CONFIG_ID}
        auth={{ type: "accessToken", value: accessToken }}
      >
        <Controls />
        <Messages />
      </VoiceProvider>
    </div>
  );
}
