"use client";
import { useVoice } from "@humeai/voice-react";
import { useEffect } from "react";

export default function Controls() {
  const { disconnect, connect, status, muteAudio, mute } = useVoice();

  useEffect(() => {
    if (!(status.value === "connected")) return;

    muteAudio();
    mute();
  }, [status.value]);

  const buttonText = {
    connected: "End Call",
    disconnected: "Start Call",
    connecting: "Connecting...",
    disconnecting: "Disconnecting...",
    error: "Error",
  }[status.value];

  const isDisabled = status.value === "connecting";

  return (
    <div>
      <button
        disabled={isDisabled}
        onClick={() => {
          status.value === "connected" ? disconnect() : connect();
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}
