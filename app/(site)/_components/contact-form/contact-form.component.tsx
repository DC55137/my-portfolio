"use client";

import {
  IconAlertCircleFilled,
  IconCircleCheckFilled,
  IconMail,
} from "@tabler/icons-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { contact } from "@/data/contact";
import { cn } from "@/utils/ui";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; data: string }
  | { status: "error"; data: string };

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ status: "idle" });

  const disabledClassName =
    formState.status === "submitting" ? "opacity-50 pointer-events-none" : "";

  const inputClassName = cn(
    "rounded border border-base-7 hover:border-base-8 focus:ring-0 focus:outline-none focus:border-accent-9 bg-base-3 transition-colors p-2",
    disabledClassName
  );

  return (
    <Section
      id={contact.id}
      title={contact.title}
      subtitle={contact.subtitle}
      contentClassName="gap-7"
    >
      {formState.status === "success" || formState.status === "error" ? (
        <div
          className={cn(
            "rounded border flex items-center gap-4 p-4 typography-2 font-medium",
            formState.status === "error" &&
              "bg-error-2 border-error-6 text-error-11",
            formState.status === "success" &&
              "bg-success-2 border-success-6 text-success-11"
          )}
        >
          {formState.status === "success" ? (
            <IconCircleCheckFilled strokeWidth={1.5} className="w-5 h-5" />
          ) : (
            <IconAlertCircleFilled strokeWidth={1.5} className="w-5 h-5" />
          )}
          {formState.data}
        </div>
      ) : null}
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setFormState({ status: "submitting" });
          const res = await fetch("/contact", {
            method: "POST",
            body: new FormData(event.currentTarget),
          });
          setFormState((await res.json()) as FormState);
        }}
        className="grid [grid-template-areas:'name'_'email'_'subject'_'message'_'button'] sm:[grid-template-areas:'name_email'_'subject_subject'_'message_message'_'button_button'] gap-5"
      >
        <div className="[grid-area:name] flex flex-col gap-2">
          <label htmlFor="name" className="font-medium typography-2">
            Your Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            className={inputClassName}
          />
        </div>
        <div className="[grid-area:email] flex flex-col gap-2">
          <label htmlFor="email" className="font-medium typography-2">
            Your Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            className={inputClassName}
          />
        </div>
        <div className="[grid-area:subject] flex flex-col gap-2">
          <label htmlFor="subject" className="font-medium typography-2">
            Your Subject
          </label>
          <input
            required
            type="text"
            id="subject"
            name="subject"
            className={inputClassName}
          />
        </div>
        <div className="[grid-area:message] flex flex-col gap-2">
          <label htmlFor="message" className="font-medium typography-2">
            Your Message
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows={7}
            className={cn(inputClassName, "resize-none")}
          />
        </div>
        <Button className={cn("[grid-area:button]", disabledClassName)}>
          <IconMail strokeWidth={1.5} className="h-[16px]" />
          Send Me an Email
        </Button>
      </form>
    </Section>
  );
}
