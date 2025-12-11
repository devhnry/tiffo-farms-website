import { forwardRef } from "react";

export const ContactUs = forwardRef<HTMLElement>((props, ref) => {
  return <section ref={ref}></section>;
});

ContactUs.displayName = "ContactUs";
