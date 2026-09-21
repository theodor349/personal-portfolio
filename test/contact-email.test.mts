import assert from "node:assert/strict";
import test from "node:test";

import { sendContactEmail } from "../src/app/contact-email.ts";

test("sends the contact form through EmailJS", async (t) => {
  const form = {} as HTMLFormElement;
  const sendForm = t.mock.fn(async () => ({
    status: 200,
    text: "OK",
  }));

  await sendContactEmail(form, sendForm);

  assert.deepEqual(sendForm.mock.calls[0]?.arguments, [
    "service_p8wu66d",
    "template_7ti3r67",
    form,
    "W_I43WzDc6zC21E-N",
  ]);
});
