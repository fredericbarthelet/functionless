import { FunctionlessNode } from "./node";

export function assertNever(value: never): never {
  throw new Error(
    `reached unreachable branch with value: ${
      typeof value === "string" ? value : JSON.stringify(value)
    }`
  );
}

export function assertString(value: any, message?: string): string {
  if (typeof value !== "string") {
    throw new Error(message ?? `Expected string, got ${value}`);
  }
  return value;
}

export function assertNumber(value: any, message?: string): number {
  if (typeof value !== "number") {
    throw new Error(message ?? `Expected number, got ${value}`);
  }
  return value;
}

export function assertDefined<T>(
  value?: T,
  message?: string
): Exclude<T, undefined> {
  if (value === undefined) {
    throw new Error(message ?? "Expected value to be present");
  }
  return value as Exclude<T, undefined>;
}

export function assertNodeKind<T extends FunctionlessNode>(
  node: FunctionlessNode | undefined,
  kind: T["kind"]
): T {
  if (node?.kind !== kind) {
    throw Error(
      `Expected node of type ${kind} and found ${
        node ? node.kind : "undefined"
      }`
    );
  }
  return <T>node;
}
