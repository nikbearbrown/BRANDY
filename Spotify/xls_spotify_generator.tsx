import { useState } from "react";

const ROWS = [
  {
    category: "Owned / Direct",
    platform: "Brand's Website",
    handle: "spotify.com",
    presence: "Yes-Active",
    contentType: "Organic",
    frequency: "Continuous",
    notes: "[Observed] Clean dark-mode design; product-forward homepage. Loud and Clear annual payout report lives here — functions as crisis PR instrument, not genuine transparency tool. Advertising B2B portal (advertising.spotify.com) is a distinct, well-developed sub-site. SEO dominance on streaming/playlist/podcast terms."
  },
  {
    category: "Owned / Direct",
    platform: "Brand's App",
    handle: "iOS / Android / Desktop",
    presence: "Yes-Active",
    contentType: "Both",
    frequency: "Continuous",
    notes: "[Observed] 751M MAU (Q4 2025 record); 290M paid subs; 476M ad-supported. Interface redesigned toward TikTok-style vertical scroll feed. Persistent user complaints: UI bloat from podcast/audiobook integration, car infotainment sync failures, offline mode bugs, no loop button for free users, can't see playlist song count on mobile. Feature creep (Page Match, Smart Reorder, Prompted Playlist) eroding core utility perception even as new products launch. Gross margin record 33.1% Q4 2025."
  },
  {
    category: "Owned / Direct",
    platform: "Newsletter / Emails",
    handle: "—",
    presence: "Yes-Active",
    contentType: "Both",
    frequency: "[Unverifiable — requires subscription]",
    notes: "[Unverifiable — recommend manual check] Discovery Mode and Showcase campaigns actively marketed to artists via S4A email. Consumer email cadence includes Wrapped, new feature announcements, upgrade prompts. Subscribe and document: send frequency, subject line style, CTA structure, promotional vs. product ratio."
  },
  {
    category: "Owned / Direct",
    platform: "SMS (text messages)",
    handle: "—",
    presence: "[Not Found]",
    contentType: "[Unverifiable]",
    frequency: "[Unverifiable]",
    notes: "[Unverifiable — recommend manual check] No confirmed SMS program detected. Check account signup and Premium upgrade flow for SMS opt-in prompt."
  },
  {
    category: "Owned / Direct",
    platform: "SEO / SEM",
    handle: "—",
    presence: "Yes-Active",
    contentType: "Both",
    frequency: "Continuous",
    notes: "[Observed] Dominant organic rankings for music streaming, playlist, podcast terms. Spotify for Artists blog functions as organic SEO play targeting musician searches. Discovery Mode and Marquee paid promotion sold to artists via SEM-style framing within S4A. Paid search active for brand defense and acquisition."
  },
  {
    category: "Social — Primary",
    platform: "Facebook",
    handle: "facebook.com/spotify",
    presence: "Yes-Active",
    contentType: "Organic",
    frequency: "Several times/week",
    notes: "[Observed] Large legacy following. Lower engagement relative to platform norms for a brand of this scale. Content mirrors Instagram: artist spotlights, Wrapped, playlist features. Not a strategic priority. Presence maintained for reach but investment is minimal."
  },
  {
    category: "Social — Primary",
    platform: "Instagram",
    handle: "@spotify",
    presence: "Yes-Active",
    contentType: "Organic",
    frequency: "Daily",
    notes: "[Observed] 14M followers, 7,842 posts. Playful, Gen Z-coded tone ('it's never too late to send your crush a playlist'). Artist spotlights, Wrapped data stories, trending cultural moments, product announcements. Experimenting with carousels. 14M followers is modest for a 751M-user platform — brand account is not a primary discovery driver; Wrapped carries the social weight."
  },
  {
    category: "Social — Primary",
    platform: "Instagram — Main Feed / Home",
    handle: "@spotify",
    presence: "Yes-Active",
    contentType: "Organic",
    frequency: "Daily",
    notes: "[Observed] Feed content skews artist-forward and culturally reactive. 2025 Wrapped visual identity — retro mixtape aesthetic — coherent across feed. Strong Wrapped moment; weaker in between. No evidence of evergreen content strategy that performs independently of campaign cycles."
  },
  {
    category: "Social — Primary",
    platform: "Instagram — Stories / Reels",
    handle: "@spotify",
    presence: "Yes-Active",
    contentType: "Organic",
    frequency: "Daily",
    notes: "[Observed] Active Reels use for campaign amplification. 2025 Wrapped used Reels as primary social distribution layer. No confirmed native Reels-first content strategy distinct from feed repurposing — same assets adapted, not built for format. Compare to Apple Music's Reels presence which tends toward lossless/spatial audio demonstrations."
  },
  {
    category: "Social — Primary",
    platform: "YouTube",
    handle: "youtube.com/spotify",
    presence: "Yes-Active",
    contentType: "Both",
    frequency: "Weekly",
    notes: "[Observed] Channel used for campaign films, podcast video content, artist content. First-ever TV ad (Wrapped 2025, ITV) generated separate YouTube version. Music videos added to app in beta late 2025 — partial response to 25.1% listening time loss to YouTube (MIDiA Research 2025). YouTube remains the dominant platform for DJ sets and visual music — Spotify is reactive here, not leading."
  },
  {
    category: "Social — Primary",
    platform: "TikTok",
    handle: "@spotify",
    presence: "Yes-Active",
    contentType: "Organic",
    frequency: "Daily",
    notes: "[Observed] Active presence; trend participation, artist clips, Wrapped amplification. Strategically asymmetric: TikTok is the top-of-funnel discovery driver that sends users to Spotify — Spotify benefits from TikTok more than it drives it. Platform launched its own vertical scroll feed in 2023 in partial imitation of TikTok's model. TikTok replaced editorial playlists as #1 music discovery funnel by 2020–21."
  },
  {
    category: "Social — Primary",
    platform: "Twitter (X)",
    handle: "@spotify",
    presence: "Yes-Active",
    contentType: "Organic",
    frequency: "Daily",
    notes: "[Observed] Active community engagement; conversational, community-reactive tone consistent with Instagram voice. Brand response rate to user mentions appears low in manual audit (PSU study, Feb 2025). Platform is used for cultural moment participation and Wrapped amplification more than sustained community building."
  },
  {
    category: "Social — Primary",
    platform: "Threads",
    handle: "@spotify",
    presence: "Yes-Active",
    contentType: "Organic",
    frequency: "Several times/week",
    notes: "[Observed] Confirmed presence; Spotify has rolled out DMs on Threads per 2026 platform updates. Not a strategic priority. Content appears to be repurposed from Instagram/Twitter. Monitor: Threads engagement vs. Instagram for same content to assess platform weighting."
  },
  {
    category: "Social — Primary",
    platform: "LinkedIn",
    handle: "linkedin.com/company/spotify",
    presence: "Yes-Active",
    contentType: "Organic",
    frequency: "Several times/week",
    notes: "[Observed] B2B and employer brand focus. Executive thought leadership (Daniel Ek as Executive Chairman, Co-CEOs Norström/Söderström). AUX consultancy B2B lead generation. Company culture content. 7,323 full-time employees globally (Q4 2025). LinkedIn is where the 'technology platform for audio' reframing is most consistently deployed."
  },
  {
    category: "Social — Primary",
    platform: "Pinterest",
    handle: "—",
    presence: "Yes-Dormant",
    contentType: "Organic",
    frequency: "Infrequent",
    notes: "[Inferred] Presence exists but not a strategic channel. Playlist cover art and Wrapped visual assets occasionally surface. No confirmed active content strategy. Absence is not strategic — likely just deprioritized."
  },
  {
    category: "Social — Primary",
    platform: "Reddit",
    handle: "r/spotify (community, not brand-owned)",
    presence: "Yes-Active (community) / No (brand)",
    contentType: "[Not brand-owned]",
    frequency: "Daily (community)",
    notes: "[Observed] r/spotify has 500K+ members and is one of the most active ongoing brand perception monitors available. Brand does NOT operate the subreddit. Current dominant threads: Wrapped inaccuracy complaints, UI bloat, Discovery Mode skepticism, price hike frustration. The brand's absence from its own largest online community is a strategic signal — either deliberate distancing from criticism or neglect."
  },
  {
    category: "Social — Primary",
    platform: "Snap",
    handle: "—",
    presence: "[Not Found]",
    contentType: "—",
    frequency: "—",
    notes: "[Not Found] No confirmed active brand strategy on Snapchat. Absence appears deliberate given demographic skew toward younger users who Spotify targets via TikTok and Instagram instead. Strategic choice, not oversight."
  },
  {
    category: "Influence & Community",
    platform: "Influencers",
    handle: "Multiple",
    presence: "Yes-Active",
    contentType: "Both",
    frequency: "Ongoing",
    notes: "[Observed] Heavy artist/influencer integration. Wrapped 2025 TV ad featured Lewis Capaldi, Louis Theroux. OOH campaigns spotlight nominated artists (ARIA Awards 2025: 800+ global placements). Spotify Stages live events function as influencer pipeline — artists with streaming data traction booked for first-ever live shows as platform marketing. Artist billboard program (Times Square, London, LA) used as creator sentiment management tool. Shopify partnership lets artists sell merch/tickets directly through app — extends influencer relationship into commerce."
  },
  {
    category: "Influence & Community",
    platform: "Other social platforms (specify in Notes)",
    handle: "Roblox (Spotify Island)",
    presence: "Yes-Active",
    contentType: "Organic",
    frequency: "Seasonal",
    notes: "[Observed] Spotify Island on Roblox — first streaming brand on the platform. Virtual space for fans and artists to connect, complete quests, access exclusive merch. Tactically interesting for Gen Z/Alpha audience development. Scale and engagement metrics unverified. [Unverifiable — recommend tracking engagement per Roblox event]"
  },
  {
    category: "Paid & Native",
    platform: "Banner / Display ads on websites visited",
    handle: "—",
    presence: "Yes-Active",
    contentType: "Paid",
    frequency: "Continuous",
    notes: "[Observed] Active retargeting and display across web. Spotify Ad Exchange (SAX) also sells ad inventory to external brands — Spotify is simultaneously advertiser AND advertising platform. Amazon partnership (2025): integrates Amazon shopping signals with Spotify listening data for advertisers. SAX described as 'largest contributor to overall advertising growth' in Q4 2025 earnings. Ad-supported revenue: €518M Q4 2025 (+4% constant currency; -4% reported)."
  },
  {
    category: "Paid & Native",
    platform: "Native Content or Affiliate (articles / blogs)",
    handle: "Multiple",
    presence: "Yes-Active",
    contentType: "Both",
    frequency: "Ongoing",
    notes: "[Observed] AUX in-house consultancy creates branded content partnerships: Coca-Cola 'Bestie Mode,' BT podcast host-read ads (674% reported ROAS), Oreo. Podcast integration provides native ad inventory at scale. Spotify frames targeting as 'streaming intelligence' — mood/behavioral data as substrate. Spotify for Artists (S4A) blog, produced by Third Bridge Creative, is native content sold to artists as 'creator support' while functioning as promotional infrastructure for the platform."
  },
  {
    category: "Physical & Experiential",
    platform: "Point of Sale (in-store displays)",
    handle: "—",
    presence: "No",
    contentType: "—",
    frequency: "—",
    notes: "[Observed — not applicable] Digital-only distribution. No in-store retail presence. N/A for product category."
  },
  {
    category: "Physical & Experiential",
    platform: "Brick and Mortar store locations",
    handle: "—",
    presence: "No",
    contentType: "—",
    frequency: "—",
    notes: "[Observed — not applicable] No physical retail locations. Headquarters: Stockholm. Offices in NYC, London, LA, etc. — none are consumer-facing."
  },
  {
    category: "Physical & Experiential",
    platform: "Experiential (pop-ups, events)",
    handle: "Multiple cities",
    presence: "Yes-Active",
    contentType: "Both",
    frequency: "Campaign-driven",
    notes: "[Observed] Multiple active programs: (1) Spotify Stages live events — books artists with streaming traction for first-ever live shows, used as platform marketing. (2) Lady Gaga (Rio) and Chappell Roan (NYC) OOH pop-up installations, 2025. (3) ARIA Awards 2025 global OOH: 800+ placements, Times Square NYC, Leicester Square London, Seoul, Cairo. (4) Wrapped 2025: OOH in 31 markets with 'visual mixtape' retro aesthetic. Sycamore Studios opened for podcasts/creators."
  },
  {
    category: "Physical & Experiential",
    platform: "Contests / Sweepstakes",
    handle: "Wrapped (annual)",
    presence: "Yes-Active",
    contentType: "Organic",
    frequency: "Annual (December)",
    notes: "[Observed] Wrapped functions as participatory contest: users share stats, compete culturally over listening identity. 'Share on a Billboard' opt-in (Times Square, Piccadilly Lights, etc.) is the most sophisticated version — user-generated social proof at billboard scale. 2025: 300M+ users engaged, 630M shares in 56 languages. CRITICAL NOTE: Stats.fm side-by-side comparisons show ~13% listening time exclusion and systematic omission of small/independent artists from results — Wrapped reflects algorithmic priorities, not pure user behavior. 30-second rule biases 'Top Songs' toward short background/PFC tracks."
  },
  {
    category: "Physical & Experiential",
    platform: "Partnerships (e.g., Supreme × North Face)",
    handle: "Amazon, FC Barcelona, ARIA, Bookshop.org, Shopify, Warner/Boomi, Endel/UMG",
    presence: "Yes-Active",
    contentType: "Both",
    frequency: "Ongoing",
    notes: "[Observed] Wide-ranging and strategically significant. Amazon: integrates shopping signals with listening data for advertisers. FC Barcelona: extended through 2030, billboard campaigns and player playlists. ARIA Awards 2025: first in-app voting-embedded playlists globally. Shopify: artist merch/ticket sales direct via app. Bookshop.org: physical book purchases coming to app via new partnership (US/UK, spring 2026). Warner/Boomi: AI-generated music partnership. Endel/UMG: AI soundscape remixes of back catalog. Each partnership extends Spotify's platform-as-OS ambition."
  },
  {
    category: "Broadcast & Print",
    platform: "OOH (Billboards, Transit, etc.)",
    handle: "Global",
    presence: "Yes-Active",
    contentType: "Paid",
    frequency: "Campaign-driven + always-on artist program",
    notes: "[Observed] Spotify's most sophisticated paid channel — category-defining execution no competitor consistently matches. Three distinct programs: (1) Wrapped data-driven annual OOH — playful user stats on global billboards, 31 markets in 2025; (2) Artist Billboard program — Times Square, London, LA — used as creator sentiment management and organic social bait (artists post billboard photos; Spotify gets free social impressions); (3) Partnership campaigns (ARIA 800+ placements, FC Barcelona). Data-as-creative approach is core brand differentiator in OOH."
  },
  {
    category: "Broadcast & Print",
    platform: "TV (or streaming equivalent)",
    handle: "ITV (UK), BVOD",
    presence: "Yes-Active",
    contentType: "Paid",
    frequency: "Campaign-driven (first deployment 2025)",
    notes: "[Observed] First-ever linear TV ad purchase: 3-minute prime-time buy on ITV during 'I'm A Celebrity...' for Wrapped 2025, featuring Lewis Capaldi and Louis Theroux. Also used BVOD and Spotify Ad Exchange for broadcast-scale buys in same campaign. Strategic inference: organic Wrapped sharing alone no longer sufficient to sustain cultural dominance at scale — platform now using broadcast media to maintain Wrapped as annual cultural event. This is a significant shift from organic-first to paid-broadcast model for the brand's primary marketing moment."
  },
  {
    category: "Broadcast & Print",
    platform: "Radio (or streaming / podcast equivalent)",
    handle: "Spotify podcast network",
    presence: "Yes-Dormant (paid radio) / Yes-Active (owned podcast)",
    contentType: "Both",
    frequency: "Continuous (podcast) / [Not Found] (paid radio)",
    notes: "[Inferred] No confirmed paid radio advertising strategy detected — ironic given product category. Owned podcast network with 7M+ podcast titles and 530,000+ video podcasts functions as de facto radio equivalent. Spotify has invested $10B+ in podcasts over 5 years. Video podcast consumption +90% since Partner Program launch. Podcast ad revenue growing via sponsorship; 'optimization of owned and licensed portfolio' noted in Q4 2025 as partial offset."
  },
  {
    category: "Broadcast & Print",
    platform: "Print (newspapers, magazines)",
    handle: "—",
    presence: "[Not Found]",
    contentType: "—",
    frequency: "—",
    notes: "[Not Found] No confirmed print advertising strategy detected. Loud and Clear annual report distributed digitally. S4A blog and newsroom.spotify.com function as digital press infrastructure. Print absence consistent with brand's digital-native identity and target demographic."
  },
  {
    category: "Spotify-Specific",
    platform: "Spotify for Artists (S4A) — Creator Platform",
    handle: "artists.spotify.com",
    presence: "Yes-Active",
    contentType: "Both",
    frequency: "Continuous",
    notes: "[Observed] Critical brand-specific touchpoint. Functions as both artist analytics dashboard and promotional sales channel. Features: streaming stats dashboard, playlist pitching tool (free), Marquee pop-up ads (50¢/click), Showcase homepage shelves (40¢/click), Discovery Mode (30% royalty reduction for algorithmic promotion). Internal goal: 'make them feel like they can grow.' 70%+ of S4A blog features are solo acts — platform models and promotes the individual creator archetype. S4A team also tracks artist app behavior to segment artists as advertising targets. Internal artists categorized in tiers 0–3; Tier 3 (average $13,500/yr) described as 'where future professional artists reside.'"
  },
  {
    category: "Spotify-Specific",
    platform: "Discovery Mode (Algorithmic Promotion)",
    handle: "artists.spotify.com",
    presence: "Yes-Active",
    contentType: "Paid",
    frequency: "Ongoing",
    notes: "[Observed — internal documents] Artists accept 30% royalty reduction on enrolled tracks for algorithmic promotion via Radio, Autoplay, Daily Mix, Artist Mix, mood/genre/decade mixes. No listener disclosure that tracks are promoted. €61.4M gross profit to Spotify in 12 months to May 2023 (last confirmed figure). >50% of Tier 2–3 artists enrolled by 2023. Mathematical modeling suggests FY 2025 Discovery Mode margin recapture could be $165–330M depending on % of streams affected. Characterized internally by employees as 'negative sum game' for artists. House Judiciary Committee letter (June 2021) warned of 'race to the bottom.' FTC Section 5 payola enforcement is identified regulatory risk."
  },
  {
    category: "Spotify-Specific",
    platform: "Perfect Fit Content (PFC) / Ghost Artist Program",
    handle: "Firefly Entertainment (SE-4RG), Epidemic Sound, Catfish Recording (SE-XGF), others",
    presence: "Yes-Active",
    contentType: "Organic (presented) / Paid (actual)",
    frequency: "Continuous",
    notes: "[Observed — internal documents + forensic audit Feb 2026] Stock music licensed at reduced royalty rates, released under fabricated artist names, placed on official mood playlists. By 2023: 100+ playlists 90%+ PFC; 150+ playlists over 90% PFC. Johan Röhr: 2,700+ songs, 656 artist names, 15B+ streams — statistically Sweden's most-streamed artist. Ghost artist diagnostic: follower/listener ratio <0.005 vs. organic artist 0.05–0.15 (10–3,000× divergence). Q4 2025 gross margin expansion of 83 bps attributed to 'content cost favorability' — structurally consistent with PFC deployment increase. No listener disclosure. Racial displacement documented: Black and brown jazz/lofi/ambient artists replaced by white Swedish producers."
  },
  {
    category: "Spotify-Specific",
    platform: "Wrapped (Annual Campaign)",
    handle: "spotify.com/wrapped",
    presence: "Yes-Active",
    contentType: "Organic",
    frequency: "Annual (December)",
    notes: "[Observed] Spotify's most powerful marketing asset. 2025: 300M+ users engaged, 630M shares, 56 languages, 31 OOH markets. First TV ad buy (ITV). BUT: Stats.fm comparison study (50 users) finds systematic bias — ~13% listening time excluded (Nov/Dec cutoff); small/independent artists omitted if <1,000 streams; 11,000-minute deviations between Wrapped top artist and actual play count data; PFC/background tracks inflate 'Top Songs' via 30-second stream rule. User accounts report top Stats.fm artists entirely absent from Wrapped. Power users increasingly skeptical. Platform's primary organic marketing engine is at credibility risk."
  },
];

function escapeCSV(val) {
  if (val === undefined || val === null) return "";
  const str = String(val);
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

export default function SpotifyXLS() {
  const [downloaded, setDownloaded] = useState(false);

  const filename = "xls_spotify_february_25_2026_from_audit.csv";

  function generate() {
    const headers = [
      "Category",
      "Platform / Tactic",
      "Link / Handle",
      "Presence (Yes-Active / Yes-Dormant / No / [Not Found])",
      "Content Type (Organic / Paid / Both / [Unverifiable])",
      "Frequency",
      "Notes"
    ];

    const csvRows = [
      headers.map(escapeCSV).join(","),
      ...ROWS.map(r =>
        [r.category, r.platform, r.handle, r.presence, r.contentType, r.frequency, r.notes]
          .map(escapeCSV).join(",")
      )
    ];

    const csv = csvRows.join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
  }

  const evidenceCounts = {
    observed: ROWS.filter(r => r.notes.includes("[Observed]")).length,
    inferred: ROWS.filter(r => r.notes.includes("[Inferred]")).length,
    unverifiable: ROWS.filter(r => r.notes.includes("[Unverifiable]")).length,
    notFound: ROWS.filter(r => r.presence.includes("Not Found")).length,
  };

  return (
    <div style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      maxWidth: 680,
      margin: "0 auto",
      padding: "32px 24px",
      background: "#0f0f0f",
      minHeight: "100vh",
      color: "#e8e8e8"
    }}>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
          <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.5px", color: "#fff" }}>BRANDY</span>
          <span style={{ fontWeight: 400, fontSize: 13, color: "#666", letterSpacing: "0.08em", textTransform: "uppercase" }}>xls export</span>
        </div>
        <p style={{ color: "#555", fontSize: 13, margin: 0 }}>February 25, 2026 · Pre-populated from brandy_spotify_february_25_2026</p>
      </div>

      {/* Brand badge */}
      <div style={{
        display: "flex", alignItems: "center", gap: 14,
        padding: "14px 16px", background: "#1a1a1a",
        border: "1px solid #2e2e2e", borderRadius: 10, marginBottom: 24
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "#1DB954", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, fontWeight: 800, color: "#000", flexShrink: 0
        }}>S</div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>Spotify</div>
          <div style={{ fontSize: 12, color: "#555" }}>Audio Streaming / Freemium B2C + B2B Ad Platform</div>
        </div>
      </div>

      {/* Evidence summary */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 10 }}>Evidence Summary</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            { label: "[Observed]", count: evidenceCounts.observed, color: "#1DB954" },
            { label: "[Inferred]", count: evidenceCounts.inferred, color: "#f59e0b" },
            { label: "[Unverifiable]", count: evidenceCounts.unverifiable, color: "#ef4444" },
            { label: "[Not Found]", count: evidenceCounts.notFound, color: "#6b7280" },
          ].map(({ label, count, color }) => (
            <div key={label} style={{
              padding: "10px 14px", background: "#1a1a1a",
              border: "1px solid #222", borderRadius: 8,
              display: "flex", justifyContent: "space-between", alignItems: "center"
            }}>
              <span style={{ fontSize: 12, color: "#888" }}>{label}</span>
              <span style={{ fontSize: 18, fontWeight: 700, color }}>{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rows preview */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 10 }}>Platform Rows</div>
        <div style={{ maxHeight: 260, overflowY: "auto", borderRadius: 8, border: "1px solid #222" }}>
          {ROWS.map((row, i) => (
            <div key={i} style={{
              padding: "9px 14px",
              borderBottom: i < ROWS.length - 1 ? "1px solid #1a1a1a" : "none",
              display: "flex", alignItems: "center", gap: 12,
              background: i % 2 === 0 ? "#111" : "#0f0f0f"
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                background: row.presence === "Yes-Active" ? "#1DB954"
                  : row.presence === "Yes-Dormant" ? "#f59e0b"
                  : row.presence === "No" ? "#374151"
                  : row.presence.includes("Not Found") ? "#4b5563"
                  : "#6366f1"
              }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, color: "#ccc", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {row.platform}
                </div>
                <div style={{ fontSize: 11, color: "#444" }}>{row.category}</div>
              </div>
              <div style={{ fontSize: 11, color: "#555", flexShrink: 0 }}>{row.presence.split(" ")[0]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        marginBottom: 20, padding: "12px 14px",
        background: "#1a1a1a", borderRadius: 8, border: "1px solid #222",
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <span style={{ fontSize: 12, color: "#555" }}>
          {ROWS.length} rows · 7 columns · CSV format · pre-populated from audit
        </span>
        <span style={{ fontSize: 11, color: "#333" }}>→ <span style={{ color: "#555" }}>{filename}</span></span>
      </div>

      {/* Download button */}
      <button
        onClick={generate}
        style={{
          width: "100%", padding: "14px", borderRadius: 8, fontSize: 15, fontWeight: 700,
          cursor: "pointer",
          background: downloaded ? "#1a2e1a" : "#1DB954",
          color: downloaded ? "#1DB954" : "#000",
          border: downloaded ? "1px solid #1DB954" : "none",
          letterSpacing: "-0.2px",
          transition: "all 0.2s"
        }}
      >
        {downloaded ? "✓ Downloaded — click to re-export" : "Download xls_spotify_february_25_2026_from_audit.csv"}
      </button>

      {downloaded && (
        <div style={{
          marginTop: 16, padding: "12px 14px",
          background: "#0d1f0d", border: "1px solid #1a3a1a",
          borderRadius: 8, fontSize: 12, color: "#4ade80"
        }}>
          Import into Google Sheets, Excel, or Numbers. All Notes cells are pre-populated with audit findings and evidence labels. Add columns as needed — suggest: Analyst, Date Verified, Priority, Recommendation.
        </div>
      )}

      <p style={{ marginTop: 16, fontSize: 11, color: "#3a3a3a", textAlign: "center" }}>
        brandy_spotify_february_25_2026 · point-in-time snapshot · re-run when conditions materially shift
      </p>
    </div>
  );
}
