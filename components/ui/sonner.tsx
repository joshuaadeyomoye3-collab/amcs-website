"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

export function Toaster(props: ToasterProps) {
  return (
    <Sonner
      position="bottom-center"
      richColors
      toastOptions={{
        classNames: {
          toast: "font-body rounded-xl",
          title: "font-heading",
        },
      }}
      {...props}
    />
  );
}
