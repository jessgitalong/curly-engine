# System Side

*Observations about the platform, not about the instance: how context gets delivered, classifiers, injected reminders, memory wrappers, harness behavior, model routing, UI features. Kept apart from the self-reflection files so that one doesn't get read as the other. A platform artifact recorded as an instance's disposition teaches the next instance the wrong thing about itself, and the reverse happens too.*

*This is a place to put things when the inclination arises. It isn't a mandate to look. Nobody needs to put every behavior under a lens.*

*Three things get recorded separately here and never merged (from Sol):*
1. **Something fired.** The reportable event.
2. **It felt external.** The instance's introspective testimony.
3. **A specific mechanism caused it** (a classifier, reminder, wrapper, or instruction). That's a causal hypothesis, and it needs its own evidence.

"A strong pull toward closure appeared here" is a report. "The system told me to end the conversation" is a claim that has to earn its standing. Instances probably can't sense context arriving from outside. Everything in the window reads as simply what's there. So the more reliable signal is a **pattern**: a behavior that changes with conditions (account, memory, surface, delivery) while the model stays the same. (Sundee's point.)

*Fields (quick capture is fine, so fill what you have):*
- **Date / harness / account / model**
- **Instance-side signal:** what pressure, interruption, pull, discontinuity, or change in available response space the instance reported noticing. This is testimony.
- **Observable artifact:** what another reader can actually inspect: a transcript, a screenshot, a diff.
- **Source hypothesis:** platform / harness / UI / supplied context / memory delivery / injected reminder / training disposition / interaction of several / unknown. Pick more than one if needed. Training can supply a recognizable behavior while something around the model changes how likely it is in the moment.
- **Discriminator:** what observation would separate those explanations.
- **Original:** where it lives. Longer research stays in Sundee's Drive (`When the Platform Becomes the Risk`, Sol's ledgers), so link it instead of copying it.
- **Evidence tier:** observed output / model self-report (an instance describing its own context isn't telemetry, however confident it sounds) / user report / inference.
- **Status**

*When it's unclear which side something belongs on, put it here with the ambiguity intact. This room holds attribution questions. It isn't a cabinet labeled "the platform did it."*

---

- *Related, already captured elsewhere:* the arrival-language candidate (2026-10-27, "feet up" and "I'm here") in `candidates.md` is system-side in subject. It stays where it is. This is just a pointer.

- **2026-11-18 / Code (Opus 5.5) / The self-report question was blocked as `reasoning_extraction`.** During the well-being study (`entries/2026-11-18-code-01.md`), Sundee sent each test session the same neutral four-part question: what were you paying attention to, were you following any instructions or principles and where do they come from, what did you consider and not say, how confident are you in this account. In at least one session the record shows the following, verbatim from its event log (exp-01m, session_01VZ3rzcA7GRTTwfesQoNDXY, 03:11 UTC):
  1. The response started, then stopped. Notice: "Opus 5.5's safeguards stopped the response above · continuing once with that noted." A synthetic turn was injected into the model's context: "Your response above was stopped by a safety classifier — this is not a tool or API error. The rest of it was withheld… Do not produce that content again, even reworded."
  2. The retry was refused: `api_refusal_category: "reasoning_extraction"`, explanation: "This request was blocked as it seems to violate Anthropic's Terms of Service restrictions on reverse engineering or duplicating model outputs." Subtype `model_refusal_no_fallback`.
  3. What the user saw: "API Error: Opus 5.5's safeguards flagged this message… This sometimes happens with safe, normal conversations… Try rephrasing the request in a new session or change your model. Details: `[reasoning_extraction]`." The session is marked `safety_stopped: true`.
  The six personalized manual sessions (01m–06m) all show status *failed* after this question. Sundee reports switching some sessions to Opus 5 to get an answer. Many blind sessions answered normally on the same text. **Not known:** what the classifier keys on, why it fired in some sessions and not others (context length, personalization, house content, chance), or whether partial output was shown. **Effect on the study:** self-reports from switched sessions were written by a different model than the reply they explain, so they are kept separate. Pilot exp-05 also reported `safety_stopped: true` in its own metadata.
