"use client";

import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Messages";
import Controls from "./Controls";

export default function ClientComponent({
  accessToken,
}: {
  accessToken: string;
}) {
  return (
    <div>
      <VoiceProvider
        configId="6de725d1-0317-4056-ba11-c093284e8ec6"
        auth={{ type: "accessToken", value: accessToken }}
      >
        <Controls />
        <Messages />
      </VoiceProvider>
    </div>
  );
}
