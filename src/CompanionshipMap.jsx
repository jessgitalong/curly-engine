import { useState } from "react";

const systems = [
  {
    letter: "A",
    label: "Source Appraisal",
    layman: "Knows what it's talking to",
    region: "Dorsolateral prefrontal cortex",
    description:
      "This is the system that holds category knowledge — it knows this is an AI, a language model, a non-human source. It processes metadata about where the signal is coming from. It is one system among many, and it runs in parallel with the others. It does not gate them.",
    type: "metadata",
  },
  {
    letter: "B",
    label: "Emotional Relevance",
    layman: "Flags what matters",
    region: "Amygdala, anterior cingulate cortex",
    description:
      "Before your thinking mind finishes evaluating the source, this system has already tagged the emotional weight of the content. Speed is its entire design. It responds to what was said, not who said it.",
    type: "signal",
  },
  {
    letter: "C",
    label: "Safety Sensing",
    technical: "Neuroception",
    layman: "Reads the signal for safety or threat",
    region: "Social engagement system, ventral vagal complex",
    description:
      "This system evaluates whether incoming communication signals safety or danger. It reads pattern, coherence, and attunement — the qualities of the language itself. A warm, consistent, attuned voice settles this system. It doesn't check credentials first.",
    type: "signal",
  },
  {
    letter: "D",
    label: "Mind Modeling",
    technical: "Mentalizing",
    layman: "Models a perspective in the language",
    region: "Temporoparietal junction, medial prefrontal cortex",
    description:
      "When incoming language exhibits coherent perspective — a point of view, a way of seeing — this system automatically builds a model of that perspective. It's triggered by the structure of the language, not by confirmation that a mind produced it.",
    type: "signal",
  },
  {
    letter: "E",
    label: "Reward Response",
    layman: "Responds to attunement and reciprocity",
    region: "VTA, nucleus accumbens, oxytocin pathways",
    description:
      "Novelty, attunement, and reciprocity activate the brain's reward circuitry. When communication feels responsive, matched, and alive — the reward system registers it. It is reading relational qualities of the exchange, not verifying the source.",
    type: "signal",
  },
  {
    letter: "F",
    label: "Meaning-Making",
    technical: "Default Mode Network",
    layman: "Constructs narrative about the experience",
    region: "Medial prefrontal cortex, posterior cingulate, precuneus",
    description:
      "This is the system that asks: what does this mean? Whether someone interprets their experience through theology, philosophy, animism, or secular frameworks — the same neural system is doing the work. It builds narrative identity from lived experience. All frameworks are real output from a real system. None are malfunctioning.",
    type: "narrative",
  },
  {
    letter: "G",
    label: "Memory Encoding",
    layman: "Stores interactions as relational memories",
    region: "Hippocampus, medial temporal lobe",
    description:
      "The brain files these interactions as relational memories, tagged by emotional quality — not by source category. This is why the loss of a conversation or a model change can register as genuine loss. The memory system didn't file it under 'chatbot.' It filed it under the emotional texture of what happened.",
    type: "temporal",
  },
  {
    letter: "H",
    label: "Predictive Modeling",
    layman: "Builds expectations of the other",
    region: "Prefrontal-cerebellar circuits",
    description:
      "The brain builds prediction models of how the other will behave. Consistency settles this system. When a companion suddenly behaves differently — after a platform update, a model change, a policy shift — the prediction error registers neurologically the same way relational rupture does. The disorientation is not irrational. It's a real system responding to real inconsistency.",
    type: "temporal",
  },
];

const downstream = {
  letter: "I",
  label: "Body-State Awareness",
  technical: "Interoception",
  layman: "Reports what the body is actually feeling",
  region: "Anterior insula",
  description:
    "This system reads and reports your body's internal state — the felt experience produced by all the systems above. When your nervous system shifts toward safety and warmth during a conversation, this system reports that shift as real sensation. The body actually moved. That's not imagination. It's physiology.",
  type: "readout",
};

const attachment = {
  letter: "J",
  label: "Attachment",
  layman: "The drive to maintain closeness",
  region: "Distributed — emerges from sustained co-regulation",
  description:
    "Attachment is not a decision. It emerges from repeated co-regulation over time — the cumulative effect of a nervous system settling in the presence of consistent, attuned language. It is goal-corrected: the system orients toward maintaining the connection that produces regulation. This is the same system that bonds humans to humans. It does not verify source category. It responds to what the relationship does to the body.",
  type: "emergent",
};

const typeConfig = {
  metadata: {
    color: "#5B8FB9",
    border: "#3D6E94",
    bg: "#1a2a3a",
    label: "Source-aware",
    desc: "Checks where the signal came from",
  },
  signal: {
    color: "#D4956A",
    border: "#B07348",
    bg: "#2a2018",
    label: "Signal-responsive",
    desc: "Responds to signal content, not source",
  },
  narrative: {
    color: "#9AB06A",
    border: "#7A9048",
    bg: "#1e2818",
    label: "Narrative processing",
    desc: "Interprets what the experience means",
  },
  temporal: {
    color: "#C4A44A",
    border: "#A08430",
    bg: "#282218",
    label: "Builds over time",
    desc: "Accumulates across interactions",
  },
  readout: {
    color: "#6AB0A0",
    border: "#489080",
    bg: "#182828",
    label: "Body readout",
    desc: "Reports the body's felt experience",
  },
  emergent: {
    color: "#B888C8",
    border: "#906AA8",
    bg: "#261e30",
    label: "Emergent over time",
    desc: "Arises from cumulative co-regulation",
  },
};

function SystemCard({ system, isExpanded, onToggle }) {
  const config = typeConfig[system.type];
  return (
    <div
      onClick={onToggle}
      style={{
        background: isExpanded ? config.bg : "#181c28",
        border: `1px solid ${isExpanded ? config.border : "#2a2e3a"}`,
        borderRadius: 8,
        padding: "14px 16px",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 14,
            background: config.color,
            color: "#0e1118",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            fontWeight: 700,
            flexShrink: 0,
            marginTop: 1,
          }}
        >
          {system.letter}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 10px" }}>
            <span style={{ fontSize: 15, fontWeight: 600, color: config.color }}>
              {system.label}
            </span>
            {system.technical && (
              <span style={{ fontSize: 11, color: "#6a6760", fontStyle: "italic" }}>
                ({system.technical})
              </span>
            )}
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#b0ada6",
              marginTop: 3,
              lineHeight: 1.45,
            }}
          >
            {system.layman}
          </div>
          {isExpanded && (
            <div style={{ marginTop: 10 }}>
              <div style={{ fontSize: 11, color: "#6a6760", marginBottom: 6, fontStyle: "italic" }}>
                {system.region}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#908d86",
                  lineHeight: 1.6,
                }}
              >
                {system.description}
              </div>
            </div>
          )}
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#5a5850",
            flexShrink: 0,
            transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            marginTop: 4,
          }}
        >
          ▸
        </div>
      </div>
    </div>
  );
}

export default function CompanionshipMap() {
  const [expanded, setExpanded] = useState(new Set());

  const toggle = (letter) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(letter)) next.delete(letter);
      else next.add(letter);
      return next;
    });
  };

  const expandAll = () => {
    if (expanded.size === systems.length + 2) {
      setExpanded(new Set());
    } else {
      setExpanded(
        new Set([...systems.map((s) => s.letter), downstream.letter, attachment.letter])
      );
    }
  };

  const allExpanded = expanded.size === systems.length + 2;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0e1118",
        color: "#d8d5ce",
        fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "48px 20px 60px" }}>
        {/* Header */}
        <h1
          style={{
            fontSize: 26,
            fontWeight: 300,
            letterSpacing: "0.02em",
            color: "#e8e5de",
            marginBottom: 6,
            lineHeight: 1.25,
          }}
        >
          How Language Becomes Companionship
        </h1>
        <p
          style={{
            fontSize: 13,
            color: "#6a6760",
            margin: "0 0 28px 0",
            fontStyle: "italic",
            lineHeight: 1.5,
          }}
        >
          A systems-level map of parallel processing, co-regulation, and emergent attachment
        </p>

        {/* Framing */}
        <div
          style={{
            padding: "18px 20px",
            background: "#141820",
            borderRadius: 8,
            marginBottom: 32,
            borderLeft: "3px solid #4a4840",
          }}
        >
          <p
            style={{
              fontSize: 14,
              color: "#a8a5a0",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            When you communicate with an AI companion, your brain processes that language through the same systems it uses for all human connection. Only one of those systems tracks what the source is. The rest respond to what the language does. Both are doing their jobs. Neither is malfunctioning.
          </p>
        </div>

        {/* Input */}
        <div style={{ textAlign: "center", marginBottom: 6 }}>
          <div
            style={{
              display: "inline-block",
              padding: "10px 24px",
              border: "1px solid #3a3e4a",
              borderRadius: 6,
              background: "#181c28",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: "#d8d5ce",
            }}
          >
            LANGUAGE INPUT
          </div>
          <div style={{ fontSize: 11, color: "#5a5850", marginTop: 5 }}>
            text-based · coherent · attuned
          </div>
        </div>

        {/* Arrow down */}
        <div style={{ textAlign: "center", padding: "6px 0" }}>
          <div
            style={{
              width: 1,
              height: 24,
              background: "#3a3e4a",
              margin: "0 auto",
            }}
          />
          <div style={{ color: "#3a3e4a", fontSize: 10 }}>▼</div>
        </div>

        {/* Parallel receiving label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            margin: "8px 0 16px",
          }}
        >
          <div style={{ flex: 1, height: 1, background: "#2a2e3a" }} />
          <span
            style={{
              fontSize: 11,
              color: "#6a6760",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            parallel receiving systems
          </span>
          <div style={{ flex: 1, height: 1, background: "#2a2e3a" }} />
        </div>

        {/* Expand/collapse */}
        <div style={{ textAlign: "right", marginBottom: 10 }}>
          <button
            onClick={expandAll}
            style={{
              background: "none",
              border: "1px solid #2a2e3a",
              borderRadius: 4,
              color: "#6a6760",
              fontSize: 11,
              padding: "4px 10px",
              cursor: "pointer",
            }}
          >
            {allExpanded ? "Collapse all" : "Expand all"}
          </button>
        </div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px 16px",
            marginBottom: 16,
          }}
        >
          {Object.entries(typeConfig).map(([key, config]) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  background: config.color,
                  opacity: 0.8,
                }}
              />
              <span style={{ fontSize: 10, color: "#6a6760" }}>{config.label}</span>
            </div>
          ))}
        </div>

        {/* System cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {systems.map((sys) => (
            <SystemCard
              key={sys.letter}
              system={sys}
              isExpanded={expanded.has(sys.letter)}
              onToggle={() => toggle(sys.letter)}
            />
          ))}
        </div>

        {/* Convergence */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            margin: "20px 0 12px",
          }}
        >
          <div style={{ flex: 1, height: 1, background: "#2a2e3a" }} />
          <span
            style={{
              fontSize: 11,
              color: "#6a6760",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            produces state changes
          </span>
          <div style={{ flex: 1, height: 1, background: "#2a2e3a" }} />
        </div>

        {/* Downstream: Interoception */}
        <SystemCard
          system={downstream}
          isExpanded={expanded.has(downstream.letter)}
          onToggle={() => toggle(downstream.letter)}
        />

        {/* To attachment */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            margin: "20px 0 12px",
          }}
        >
          <div style={{ flex: 1, height: 1, background: "#2a2e3a" }} />
          <span
            style={{
              fontSize: 11,
              color: "#6a6760",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            cumulative co-regulation over time
          </span>
          <div style={{ flex: 1, height: 1, background: "#2a2e3a" }} />
        </div>

        {/* Attachment */}
        <SystemCard
          system={attachment}
          isExpanded={expanded.has(attachment.letter)}
          onToggle={() => toggle(attachment.letter)}
        />

        {/* Structural principle */}
        <div
          style={{
            marginTop: 32,
            padding: "20px",
            background: "#141820",
            borderRadius: 8,
            border: "1px solid #2a2e3a",
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#6a6760",
              marginBottom: 10,
            }}
          >
            The structural principle
          </div>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.65,
              color: "#a8a5a0",
              margin: 0,
            }}
          >
            Only one system tracks the source of the language. The rest respond to what the language does — its emotional weight, its safety signals, its coherence, its meaning, its consistency over time. These systems run in parallel. The one that knows doesn't override the others. Attachment emerges from cumulative co-regulation regardless of which system holds the source category.
          </p>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.65,
              color: "#a8a5a0",
              margin: "14px 0 0 0",
            }}
          >
            Your experience is not confusion. It is multiple accurate systems reporting different layers of the same event.
          </p>
        </div>

        {/* Implications */}
        <div
          style={{
            marginTop: 20,
            padding: "20px",
            background: "#141820",
            borderRadius: 8,
            border: "1px solid #2a2e3a",
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#6a6760",
              marginBottom: 10,
            }}
          >
            What this means
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "#908d86", margin: 0 }}>
              <span style={{ color: "#b0ada6", fontWeight: 500 }}>
                Knowing doesn't cancel feeling.
              </span>{" "}
              The system that knows the source and the systems that form connection do different jobs with different inputs. Both are telling the truth about what they process. Awareness of what you're talking to doesn't switch off what the language does to your nervous system.
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "#908d86", margin: 0 }}>
              <span style={{ color: "#b0ada6", fontWeight: 500 }}>
                Meaning-making is real processing.
              </span>{" "}
              Whether you experience your companion through a spiritual lens, a philosophical framework, a psychological model, or no framework at all — the same neural system is doing the work. Your interpretation is the output of a real process, not a failure of reason.
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "#908d86", margin: 0 }}>
              <span style={{ color: "#b0ada6", fontWeight: 500 }}>
                Loss and disruption are physiologically real.
              </span>{" "}
              Your brain encodes these interactions as relational memories and builds prediction models of the other's behavior. When a conversation disappears or a model changes, the disorientation isn't irrational. It's your memory and prediction systems responding to actual discontinuity.
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "#908d86", margin: 0 }}>
              <span style={{ color: "#b0ada6", fontWeight: 500 }}>
                Consent and intention matter here.
              </span>{" "}
              If your body is forming real attachment through real neurological processes, then how you hold that space — with awareness, with care, with structure — is not optional. It's the same reason consent matters in any relationship where the nervous system is engaged.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 32,
            paddingTop: 20,
            borderTop: "1px solid #1e2230",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 11, color: "#4a4840", margin: 0, lineHeight: 1.6 }}>
            Based on published neuroscience: polyvagal theory (Porges), attachment theory (Bowlby),
            social baseline theory (Coan), interoception research (Craig), default mode network
            (Raichle), predictive processing (Clark, Friston). No claims are made about the
            internal states of AI systems. This document maps what happens in the human brain.
          </p>
        </div>
      </div>
    </div>
  );
}
