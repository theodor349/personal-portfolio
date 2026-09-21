"use client";

import { useState, type FormEvent } from "react";

import { sendContactEmail } from "./contact-email";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      await sendContactEmail(form);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <label>
          Name
          <input
            name="name"
            autoComplete="name"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="user_email"
            autoComplete="email"
            required
          />
        </label>
      </div>
      <label>
        Subject
        <input name="subject" required />
      </label>
      <label>
        Message
        <textarea name="message" required />
      </label>
      <div className="contact-form-actions">
        <button
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <p
          className={`contact-form-status status-${status}`}
          aria-live="polite"
        >
          {status === "sent" && "Thanks, your message has been sent."}
          {status === "error" && "The message could not be sent. Please try again."}
        </p>
      </div>
    </form>
  );
}
