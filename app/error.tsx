"use client";

export default function Error() {
  return (
    <div className={"absolute inset-0 grid place-content-center"}>
      <div className={"text-center"}>
        <h1 className={"text-white"}>An unexpected error occurred</h1>
        <p className={"text-gray-500"}>
          Have you added a configID in Chat.tsx?
        </p>
      </div>
    </div>
  );
}
