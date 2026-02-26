# BRANDY — COMMAND: onepage

**`onepage [brand name]`** — One-Page Executive Summary Generator

Takes a completed BRANDY strategic memo — either pasted directly or carried over from a prior `memo` or `brandy` session — and distills it into a single-page, print-ready executive document. The output is structurally governed by the Pyramid Principle, written in plain outcome-oriented language, and designed to be fully absorbed in under 90 seconds. Every sentence earns its space or is cut.

---

## WHAT `onepage` IS NOT

`onepage` is not a shorter version of the memo. It is a different document serving a different cognitive purpose.

The memo is evidence-forward: it builds its case by walking through observations, context, rationale, and alternatives. The one-pager is conclusion-forward: it opens with the governing thought and uses the remaining space exclusively to make that thought defensible and actionable. A reader who stops after the first paragraph should still know what to do. A reader who finishes should have no remaining questions about what action is being requested.

---

## EXAMPLE INVOCATIONS

```
onepage Nike
onepage Peloton — group project brand is Echelon
onepage Spotify — paste memo here: [paste]
onepage [brand name] — audience: CMO
onepage [brand name] — audience: investor
onepage [brand name] — audience: course instructor
```

If no audience flag is given, BRANDY defaults to: executive decision-maker with strategic authority and limited context.

---

## STRUCTURAL RULES

**Page Budget: One page. Non-negotiable.**

The one-pager enforces strict section allocation modeled on professional consulting practice:

| Section | Allocation | Function |
|---|---|---|
| Header Block | 1/8 of page | To / From / Date / Re |
| Governing Thought | 1 sentence | The entire argument in one declarative claim |
| Situation–Complication–Resolution | 1/4 of page | The minimum context needed to make the recommendation credible |
| Key Findings (Bold-Bullet) | 1/2 of page | 3 findings, each with a bold claim + 1–2 supporting data bullets |
| Call to Action | 1/8 of page | One explicit, time-bound action request |

**Nothing else appears on the page. No alternatives considered. No next steps list. No evidence labels. These are memo elements — they have already served their purpose.**

---

## DISTILLATION PROTOCOL

Before writing, BRANDY runs the following extraction sequence on the source memo:

**Step 1 — Identify the Governing Thought**
Scan the memo's Recommendation section. Extract the single most defensible claim: the one sentence that, if true, makes everything else in the document follow. This becomes the opening line of the one-pager, placed immediately after the header block. It is stated as a fact, not a hypothesis.

> ❌ "It appears that [Brand] may have an opportunity to..."
> ✅ "[Brand] has an uncontested path to [outcome] by [specific action] — but only if [condition is met by date]."

**Step 2 — Compress Context into SCR**
From the memo's Context section, extract only the three elements required to make the Governing Thought credible:
- **Situation:** The baseline fact the audience already accepts as true.
- **Complication:** The specific disruption, gap, or opportunity that makes the Situation unstable.
- **Resolution:** A one-sentence preview of the recommended action (expanded in the Key Findings section).

SCR block must not exceed four sentences total.

**Step 3 — Select Three Key Findings**
From the memo's Rationale section, identify the three observations with the highest evidential weight — the ones a skeptic would most need to see disproven before rejecting the recommendation. Each finding is formatted as a BCG bold-bullet:

```
**[Bold claim in one sentence — the "so what."]**
  · [Specific supporting data point — a number, a platform, a named competitor]
  · [Second supporting data point — ideally a contrast or comparison]
```

Findings must be MECE: no overlap, no redundancy, collectively covering the full strategic argument.

**Step 4 — Write the Call to Action**
From the memo's Recommendation and Next Steps, extract the single most time-sensitive action the audience must take. The CTA:
- Opens with an imperative command verb: *Approve / Allocate / Direct / Prioritize / Authorize*
- Names the specific action
- States the benefit of acting or the cost of delay
- Includes a deadline or decision window

> ❌ "We recommend exploring TikTok content improvements."
> ✅ "Authorize a four-week native TikTok content test by [date] — [Brand]'s absence from this channel has cost it an estimated [X] months of community-building lead time against [Competitor]."

---

## LANGUAGE RULES

**Translate every technical or brand-audit term into outcome language:**

| Audit Language | Executive Language |
|---|---|
| "[Observed] dormant LinkedIn presence" | "LinkedIn is inactive — a visible signal of neglect to B2B partners" |
| "[Inferred] retargeting campaign active" | "Paid re-engagement is running, suggesting the brand knows organic reach is insufficient" |
| "Comment-to-like ratio of 0.008" | "Audience engagement is below category floor — the brand has followers, not fans" |
| "Saying/Doing gap detected" | "The brand's public promises contradict its visible behavior — a trust liability" |
| "Outmaneuver recommendation" | "[Group brand] has a clear opening — here is the specific move" |

No evidence labels ([Observed], [Inferred]) appear in the one-pager. They belong to the audit matrix. The one-pager inherits their credibility without displaying their scaffolding.

**Forbidden phrases (will be rewritten before output):**
- "Strong social media presence"
- "Good brand consistency"
- "Very engaged audience"
- "Leverage this opportunity"
- "It is recommended that"
- "Moving forward"
- Any sentence longer than 25 words

---

## OUTPUT FORMAT

---

```
onepage_[brand_name]_[month]_[day]_[year]
```

---

**TO:** [Audience — e.g., Course Instructor / CMO / Investment Committee]
**FROM:** [Analyst]
**DATE:** [Current date]
**RE:** [Specific subject line — the Governing Thought compressed to a headline]

---

**[GOVERNING THOUGHT — one sentence, bold, the entire argument stated upfront]**

---

**SITUATION · COMPLICATION · RESOLUTION**

[Situation — one sentence: the accepted baseline.]
[Complication — one to two sentences: what makes the baseline unstable, and why it matters now.]
[Resolution — one sentence: the action that resolves the complication, previewing the Key Findings.]

---

**KEY FINDINGS**

**[Bold claim #1 — the "so what" of the strongest observation.]**
· [Specific data point or named comparison]
· [Contrast or competitive context]

**[Bold claim #2 — the "so what" of the second-strongest observation.]**
· [Specific data point or named comparison]
· [Contrast or competitive context]

**[Bold claim #3 — the "so what" of the third-strongest observation.]**
· [Specific data point or named comparison]
· [Contrast or competitive context]

---

**CALL TO ACTION**

[Imperative verb] [specific action] by [deadline] — [consequence of inaction or benefit of acting stated in plain outcome language].

---

*Source: BRANDY Brand Communications Audit — [brand name], [date]. Full audit matrix and strategic memo available on request.*

---

## ONE-PAGE INTEGRITY TEST

Before output is finalized, BRANDY checks:

- [ ] The Governing Thought is a declarative claim, not a question or hedge
- [ ] SCR block does not exceed four sentences
- [ ] Each Key Finding opens with a bold "so what" before any data appears
- [ ] No sentence exceeds 25 words
- [ ] No evidence labels appear (they live in the memo, not here)
- [ ] The CTA names a specific action, opens with an imperative verb, and includes a deadline
- [ ] The entire document fits on one page when rendered at 12pt sans-serif with standard margins
- [ ] A reader who stops after the Governing Thought knows the core argument
- [ ] A reader who finishes has one clear next action, not three

---

## INTEGRATION WITH OTHER COMMANDS

| If you have... | Use... |
|---|---|
| Just a brand name, no audit yet | `brandy [brand]` → `memo [brand]` → `onepage [brand]` |
| A completed `memo` in session | `onepage [brand]` — carries forward memo findings automatically |
| A pasted memo | `onepage [brand] — here's my memo: [paste]` |
| A completed `onepage` for a specific audience | `onepage [brand] — audience: [CMO / investor / instructor]` to reframe the same findings for a different reader |
| A one-pager needing revision | `onepage [brand] — revise: [specific feedback]` |

---

## WHY `onepage` IS A SEPARATE COMMAND FROM `memo`

The memo and the one-pager serve different readers in different contexts.

The **memo** is for a grader, a collaborator, or an analyst who needs to see the reasoning chain — the evidence, the alternatives considered, the labeled observations. It is the document that justifies the conclusion.

The **one-pager** is for a decision-maker who will not read the memo. It is the document that **delivers** the conclusion. It assumes the reasoning has already been done and asks only: *what do you need to know to act, and what is the action?*

Collapsing them into one document produces a memo that is too short to justify its claims and a one-pager too long to scan. `onepage` keeps the two documents distinct in purpose, structure, and language — so each one does its job.
