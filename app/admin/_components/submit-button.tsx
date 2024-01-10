import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button color="primary" type="submit" aria-disabled={pending}>
      {pending ? "pending..." : "submit"}
    </Button>
  );
}
