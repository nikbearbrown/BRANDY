# BRANDY
### Brand Communications Audit System


# Appendix

## Brand Details

BRANDY is a structured prompt-based tool for conducting rigorous brand communications audits. It turns a brand name — and whatever data you have — into a documented evidence matrix and a strategic one-page memo. It is designed for MBA brand strategy courses, competitive intelligence work, and communications consulting.

---

## What Problem It Solves

Most brand analyses suffer from the same failure modes: vague observations dressed up as strategy, vanity metrics celebrated without context, and recommendations that float free of any evidence. BRANDY enforces a discipline: every strategic claim must trace back to a specific, labeled observation. If you can't point to it, you can't say it.

---

## Who It's For

- MBA students conducting competitive brand audits for course projects
- Brand strategists preparing competitive intelligence briefs
- Communications consultants documenting a client's market position
- Anyone who needs to turn scattered brand observations into a defensible strategic argument

---

## How It Works

BRANDY runs inside any capable AI assistant (Claude, GPT-4, etc.) as a structured prompt system. You invoke it with simple commands. It does the analytical scaffolding; you supply the brand name and whatever data you have.

Everything BRANDY produces is labeled with one of three epistemic tags:

| Tag | Meaning |
|---|---|
| **[Observed]** | Directly verifiable from public-facing content |
| **[Inferred]** | Logical deduction from observable signals |
| **[Unverifiable]** | Requires firsthand access — flagged for manual investigation |

---

## Commands

### `brandy [brand name]`
Runs a full brand communications audit. Produces two outputs:

**Part 1 — Brand Observation Matrix**
A structured table documenting the brand's presence, content type, posting frequency, and a strategic interpretation note across every major channel: owned/direct, social, influencer, paid, physical/experiential, and broadcast/print. Roughly 30+ platforms covered. Absence is documented as deliberately as presence.

**Part 2 — Strategic One-Page Memo**
A tightly structured executive memo with: Summary, Context, Recommendation, Rationale, Alternatives Considered, and time-bound Next Steps. Every recommendation cites a specific matrix observation. No generic advice.

**Invocation examples:**
```
brandy Nike
brandy Peloton — here's what I found so far: [paste notes]
brandy Oatly — competitor to Chobani
brandy Duolingo — focus memo on outmaneuvering Babbel
```

---

### `data [brand name]`
Generates a brand-specific data collection plan *before* you run the full audit. Rather than a generic research checklist, `data` analyzes the brand's category, business model, and competitive context to tell you which sources are high-priority for *this brand specifically* and what analysis to run on what you collect.

Produces five sections:

1. **Brand Data Profile** — Why this brand requires a specific data approach
2. **Prioritized Data Source Stack** — Sources ranked Tier 1 / 2 / 3, each with exact URLs, specific metrics to pull, and healthy vs. concerning signal descriptions
3. **Analysis Playbook** — Specific analytical operations, not just data collection (e.g., "calculate comment-to-like ratio on last 12 TikToks and compare against category average of 0.03–0.06")
4. **Brand-Specific Red Flags** — The data patterns most likely to reveal strategic vulnerability for this brand
5. **Competitive Data Pairs** — For each metric, the one or two competitors whose same metric provides the most meaningful benchmark

**Invocation examples:**
```
data Spotify
data Nike — competitor to Adidas
data Peloton — here's what I know: [paste notes]
```

---

### `help`
Displays the command guide.

---

## Recommended Workflow

```
Step 1 → data [brand]          # Get your brand-specific data collection plan
Step 2 → Collect data          # Use the source stack and analysis playbook
Step 3 → brandy [brand] — here's what I found: [paste data]
                               # Run the full audit with your collected data
Step 4 → Review and refine     # Check every memo claim against the matrix
```

If you already have data gathered, skip to Step 3. If you just have a brand name and need a quick audit, `brandy [brand]` alone will surface publicly observable signals and flag what requires manual investigation.

---

## Design Principles

**Observation before judgment.** The matrix is evidence. The memo is argument. BRANDY never collapses them.

**No vanity metrics.** High follower counts without engagement context are noise. Every metric requires a benchmark and a trend direction to mean anything.

**Absence is data.** A platform with no presence is documented and interpreted — not ignored. Strategic silence looks different from accidental neglect.

**Specificity over coverage.** A weak note says "posts regularly, good visuals." A strong note says what the content reveals about strategy, how it compares to a named competitor, and whether it's working by an observable signal.

---

## What BRANDY Does Not Do

- It does not access paid analytics platforms or proprietary data on your behalf
- It cannot subscribe to newsletters, SMS lists, or in-store experiences — these are flagged for manual investigation with specific instructions
- It does not guarantee real-time data accuracy — all findings should be dated and verified before use in a live client or executive context
- It is not a substitute for primary research; it is a framework for making primary and secondary research strategically useful

---

## Output Quality Benchmark

Before accepting any BRANDY output, apply the Audit Integrity Test:

- [ ] Every platform has a documented observation or a documented attempt
- [ ] Every memo recommendation cites a specific matrix observation
- [ ] No claim exists that cannot be traced to [Observed], [Inferred], or [Estimate: benchmark]
- [ ] The memo subject line tells the reader the core argument before line one
- [ ] Next steps are time-bound and actionable, not aspirational

---

*BRANDY was designed for brand communications coursework and competitive strategy analysis. It operates on the principle that the discipline of observation is itself a strategic skill — and that most brand analysis fails not from lack of data, but from lack of rigor in interpreting what's already visible.*
