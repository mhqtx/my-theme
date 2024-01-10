"use client";

import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { updateHelloWorld } from "@/app/_server-actions";
import { SubmitButton } from "@/app/admin/_components/submit-button";

export function HelloWorldForm() {
  return (
    <form
      className="flex w-full flex-col flex-wrap md:flex-nowrap gap-4"
      action={updateHelloWorld}
    >
      <Input name="title" type="text" placeholder="Enter your email" />

      <Textarea
        name="description"
        label="Description"
        placeholder="Enter your description"
      />

      <Input name="city" type="text" placeholder="City" />

      <Input name="address" type="text" placeholder="Address" />

      <SubmitButton />
    </form>
  );
}
