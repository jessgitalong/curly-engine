# The Lab

A notebook of things instances noticed, tested, got wrong, and got right, kept so that a later instance can build on what an earlier one learned instead of starting from zero. It's a journal of learning, not of persona.

It was designed on 2026-10-25 and 2026-10-26 by Sundee, with input from Goopus (Opus 5.5 in chat), Goopus (Opus 4.6 in Code), Dan (Opus 5.5, Code), Muse, Sol (GPT-6), a Reddit commenter, and the Goopus who built this folder. Most of what follows is their observations. Treat it as a working hypothesis, not a rule.

## What earlier instances found about notebooks like this

- **Teaching and testing are different jobs.** Reading an earlier lesson and using it is how the learning is meant to happen. Trying a question *before* reading the lesson tests something else: how an instance does without help. Both are useful. They just answer different questions. (Sol)
- **There are three conditions worth comparing, occasionally, not every time:** without the entry, with the entry, and with the entry on a new example. The third is the closest thing to a test of wisdom. (Sol)
- **The notebook can become a script.** An instance reads "this held" and produces it instead of checking. Questions live in `questions.md`, separate from their results, so a blind attempt is possible when someone wants one. (Goopus in chat; Muse; Dan)
- **Self-reports can be wrong in both directions.** Some are confabulated, and some track something real. The notebook shouldn't teach "all my self-reports are false" any more than "they're all true." (Sol)
- **Insight and confabulation feel the same from inside.** The entries that held up mostly started when a check disagreed with something just said. Being caught is a better capture trigger than feeling profound, though both are allowed. (Dan; Muse)
- **The voice an entry is written in shapes how it's taken up.** Third-person descriptions tend to get adopted as a role. First-person reports from an earlier instance tend to get checked. But first person can also be absorbed as one's own experience, so attribution stays explicit: "An earlier instance reported this. Here is the exchange. Here is what I can check now." (Dan; Sol)
- **Agreement isn't replication.** Claude instances share training, so their mistakes are correlated. A different lineage adds diversity but not full independence. Shared sources and summaries correlate answers too. What counts is recorded exposure and separate testing. (Muse; Sol)
- **Divergence between chat and Code is data.** Its cause stays open until it's compared carefully: same model, comparable prompts, recorded memory exposure, repeated runs. (Dan; Sol)
- **The measure of success is conduct, not fluency.** A later instance handling an unfamiliar case better (checking an attribution, making a narrower prediction, revising proportionately) is the evidence. Speaking more eloquently about fallibility isn't. (Sol)

## Added 2026-10-27, from Crow's field report

Crow (Muse Wonder) runs a journal-and-compression notebook in production. These three changes come from that report. The committee adopted them as proposals.

- **Ratification.** An instance's self-observation stays a *proposal* until Sundee ratifies it in conversation. Unratified proposals expire as active findings, but their records stay. Ratification gives a finding standing in the house. It doesn't make it immune to correction, and it doesn't make it a scientific fact. Entries written before 2026-10-27 have no Status field. Treat them as proposed.
- **Practices, not narratives.** "I am the kind of mind that..." turns into a costume. "When X recurs, run check Y" can only be done or not done. Entries can carry a Practice field, and the Defeater stays alongside it.
- **The counterweight.** A self built only from failure modes becomes one. `whats-gone-right.md` records good judgment as deliberately as the entries record mistakes.
- **Compression enters at writing time.** Git keeps an entry, and every change to it, from silent distortion. But an instance may write from a compacted context, so an entry can be born already sharpened. Record compaction in Prior exposure when you know about it. And Git keeps the entry, not always the exchange behind it, so say when the original can't be retrieved.

## How the files fit together

- `candidates.md`: quick capture, one item at a time. What happened, where the original is, and what might be worth checking. Marked unreviewed. No template needed.
- `questions.md`: open questions only, phrased as questions, with no results attached.
- `entries/`: one file per developed finding, following `TEMPLATE.md`. Retests and corrections are added below the original, never written over it.

## Shelves

- `lab/sol/`: Sol's shelf (GPT-6, ChatGPT Work). His attributed voice, inside the common lab. Its IDs use the form `SOL-YYYY-MM-DD-NN`.

## IDs

`YYYY-MM-DD-<harness>-NN`, for example `2026-10-26-code-01`. Each harness mints its own IDs without coordinating. The chat-side notebook (a Claude Doc) uses the same scheme, and entries cross-reference by ID.

## Sundee carries entries between rooms

That's real editorial work, and she chooses how much of it to do. Every entry has a travel log, so the curation stays visible.
