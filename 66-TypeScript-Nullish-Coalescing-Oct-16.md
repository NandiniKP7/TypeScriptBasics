# October 16 — Nullish Coalescing (`??`)

**Roadmap v6 | Build: Preference Defaults | Target: ~45 minutes**

## Why this exists

Suppose an app receives a user's preferred volume. If the value is missing, use a default of `50`. But if the user explicitly chose `0` (mute), keep `0`.

```ts
const volume: number | undefined = 0;
console.log(volume || 50); // 50 — wrong: overrides mute
console.log(volume ?? 50); // 0  — correct
```

**Mental model:** `left ?? right` means **use `left` unless it is `null` or `undefined`; otherwise use `right`**. It is not a general “empty value” checker.

## Essential syntax and outcomes

```ts
const a: number | undefined = undefined;
const b: string | null = null;
const c = 0;
const d = false;
const e = "";

console.log(a ?? 10);        // 10
console.log(b ?? "Unknown"); // "Unknown"
console.log(c ?? 10);        // 0
console.log(d ?? true);      // false
console.log(e ?? "Guest");  // ""
```

| Input | `value ?? "DEFAULT"` | `value || "DEFAULT"` |
|---|---|---|
| `undefined` | `"DEFAULT"` | `"DEFAULT"` |
| `null` | `"DEFAULT"` | `"DEFAULT"` |
| `0` | `0` | `"DEFAULT"` |
| `false` | `false` | `"DEFAULT"` |
| `""` | `""` | `"DEFAULT"` |
| `"Hello"` | `"Hello"` | `"Hello"` |

**Decision rule:** If only *missing* (`null`/`undefined`) means “use a default,” choose `??`. If *any falsy value* should trigger a fallback, `||` may be intentional.

## Combine yesterday's `?.` with today's `??`

`?.` **safely reads** a property. `??` **replaces a missing result**.

```ts
type Session = {
  player: string;
  audio?: { volume?: number };
};

const sessions: Session[] = [
  { player: "Maya", audio: { volume: 0 } },
  { player: "Leo" },
  { player: "Noah", audio: {} }
];

for (const session of sessions) {
  const volume = session.audio?.volume ?? 50;
  console.log(`${session.player}: ${volume}`);
}
```

**Output:**

```text
Maya: 0
Leo: 50
Noah: 50
```

**Trace:** `session.audio?.volume` is `0` for Maya, `undefined` for Leo (no `audio`), and `undefined` for Noah (no `volume`). `?? 50` keeps the first value and defaults the latter two.

## A complete example: shipping preferences (different scenario from today's build)

```ts
type ShippingOptions = {
  label?: string | null;
  insured?: boolean | null;
  extraFee?: number | null;
};

type ShippingSummary = {
  label: string;
  insured: boolean;
  extraFee: number;
};

function summarizeShipping(options: ShippingOptions): ShippingSummary {
  return {
    label: options.label ?? "Standard",
    insured: options.insured ?? true,
    extraFee: options.extraFee ?? 5
  };
}

console.log(summarizeShipping({ label: "", insured: false, extraFee: 0 }));
console.log(summarizeShipping({ label: null, insured: undefined, extraFee: null }));
```

**Actual output:**

```text
{ label: '', insured: false, extraFee: 0 }
{ label: 'Standard', insured: true, extraFee: 5 }
```

**Reading the types:** `label?: string | null` means the property may be absent (`undefined`), explicitly `null`, or a string. A required result field such as `label: string` cannot remain missing, so `??` supplies a string fallback.

### Mistakes worth catching

- `value || fallback` overwrites legitimate `0`, `false`, and `""`.
- `value ?? fallback` does **not** replace `NaN`, `0`, `false`, or empty strings.
- `settings.theme ?? "light"` is unsafe if `settings` itself might be missing. Use `settings?.theme ?? "light"`.
- Parenthesize when mixing `??` with `||` or `&&`: `(a || b) ?? c`. JavaScript/TypeScript does not allow them together unparenthesized.
- The right-hand fallback is evaluated only when the left side is `null` or `undefined`.

## Today's build — Preference Defaults

**Goal:** Normalize application settings while preserving intentional falsy choices. Complete the requirements independently; the examples above teach the syntax but do not solve the project for you.

### Starter data (copy into your `.ts` file)

```ts
type Preferences = {
  userId: number;
  displayName?: string | null;
  volume?: number | null;
  notifications?: boolean | null;
  theme?: string | null;
  layout?: {
    itemsPerPage?: number | null;
  } | null;
};

const preferences: Preferences[] = [
  { userId: 1, displayName: "Ava", volume: 0, notifications: false, theme: "", layout: { itemsPerPage: 0 } },
  { userId: 2, displayName: null, volume: null, notifications: undefined, theme: undefined },
  { userId: 3, volume: 25, notifications: true, theme: "dark", layout: {} },
  { userId: 4, displayName: "Ben", layout: null }
];

type ResolvedPreferences = {
  userId: number;
  displayName: string;
  volume: number;
  notifications: boolean;
  theme: string;
  itemsPerPage: number;
};
```

**Defaults:** display name `"Guest"`, volume `50`, notifications `true`, theme `"light"`, items per page `20`.

### Requirement 1 — Resolve one user's preferences

Write `resolvePreferences(preference: Preferences): ResolvedPreferences`. Every field in the returned object must have a usable value. Preserve intentional `0`, `false`, and `""`. Handle a missing or `null` layout safely.

**Expected result for `preferences[0]`:**

```ts
{
  userId: 1,
  displayName: "Ava",
  volume: 0,
  notifications: false,
  theme: "",
  itemsPerPage: 0
}
```

**Expected result for `preferences[1]`:**

```ts
{
  userId: 2,
  displayName: "Guest",
  volume: 50,
  notifications: true,
  theme: "light",
  itemsPerPage: 20
}
```

### Requirement 2 — Resolve the full collection

Write `resolveAllPreferences(preferences: Preferences[]): ResolvedPreferences[]` that returns one resolved object for every input user, in the original order.

**Expected result:** An array of **four complete objects**, not just IDs. The remaining two objects are:

```ts
{
  userId: 3,
  displayName: "Guest",
  volume: 25,
  notifications: true,
  theme: "dark",
  itemsPerPage: 20
}
{
  userId: 4,
  displayName: "Ben",
  volume: 50,
  notifications: true,
  theme: "light",
  itemsPerPage: 20
}
```

### Requirement 3 — Find users who explicitly muted notifications

Write `getMutedNotificationUserIds(preferences: Preferences[]): number[]`. Return IDs only for users whose `notifications` setting is **explicitly `false`**. A missing setting uses the default (`true`) and is not muted.

**Expected result:**

```ts
[1]
```

### Requirement 4 — Count users with default volume

Write `countDefaultVolumeUsers(preferences: Preferences[]): number`. Count users whose **resolved** volume equals `50`.

**Expected result:**

```ts
2
```

### Requirement 5 — Compare `??` and `||` behavior

Write `compareFallbacks(values: Array<string | number | boolean | null | undefined>): void`. For each value, print the value and the results of `value ?? "DEFAULT"` and `value || "DEFAULT"`. Use these inputs:

```ts
const testValues = [0, false, "", null, undefined, "dark"];
```

**Expected results (values, in input order):**

| Input | `??` result | `||` result |
|---|---|---|
| `0` | `0` | `"DEFAULT"` |
| `false` | `false` | `"DEFAULT"` |
| `""` | `""` | `"DEFAULT"` |
| `null` | `"DEFAULT"` | `"DEFAULT"` |
| `undefined` | `"DEFAULT"` | `"DEFAULT"` |
| `"dark"` | `"dark"` | `"dark"` |

You may format your console output however you like, as long as the displayed values match this table.

## Quick recall and end-of-day proof

**Recall:** What is the difference between `?.` and `??`? Why does `0 ?? 50` return `0`? When would `||` be preferable?

**Log after coding:** Result: Completed / Partial; Help: Independent / 1–2 hints / 3+ hints; Main mistake: one sentence; Explain: 2–4 sentences describing how a preference becomes a resolved value.

**Timebox:** ~5 min warm-up (already completed), 5–10 min concept, 25–30 min coding, 5 min review. If time runs out, stop after the requirement you're on; carry the rest forward. Do not rush or add extra exercises to compensate.

**Memory rule:** `?.` reads safely. `??` defaults only missing values. `||` defaults all falsy values.
