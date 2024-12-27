import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-md bg-white/40 dark:bg-[#121212]/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#b3b2b2] dark:shadow-[inset_0_-8px_10px_#000] backdrop-blur-md transition-shadow duration-500 ease-out [--bg-size:300%]  ",
        className,
      )}
    >
      <div
        className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#121212]/50 via-[#b3b2b2]/50 to-[#121212]  dark:from-[#121212]/50 dark:via-[#b3b2b2]/50 dark:to-[#121212] bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />

      {children}
    </div>
  );
}
