// ─────────────────────────────────────────────────────────────
//  Barycenter progress board — THE ONLY FILE YOU NEED TO EDIT
// ─────────────────────────────────────────────────────────────
//  How to update:
//   • Move a milestone between columns by changing its `status`:
//       "done"  ·  "in-progress"  ·  "planned"
//   • Tick a single feature by putting  ✓  in front of it, e.g.
//       "✓ Tables you can tab through"
//     (features without ✓ show as not done yet)
//   • Change `updated` to today's date.
//  Keep the commas and quote marks as they are.
//  This file is public: list features only, never personal notes.
// ─────────────────────────────────────────────────────────────

window.BARYCENTER = {
  updated: "23 November 2026",
  currentVersion: "0.3.2",

  milestones: [
    // ── Done ─────────────────────────────────────────────────
    {
      status: "done",
      version: "v0.1",
      title: "Foundations",
      summary: "A real Windows app for plain markdown notes.",
      features: [
        "✓ Windows app that only ever touches the notes folder you pick",
        "✓ Markdown editor with live preview",
        "✓ Search across every note",
        "✓ A short daily check-in, saved as a journal note",
        "✓ Light and dark mode",
        "✓ Deleted notes go to the Recycle Bin",
        "✓ Windows-style shortcuts for headings, lists and formatting",
        "✓ Installer built automatically on every update",
      ],
    },
    {
      status: "done",
      version: "v0.2",
      title: "Polish",
      summary: "Word-like lists, a big search box and colour schemes.",
      features: [
        "✓ Ctrl+P opens a large centred search with highlighted matches",
        "✓ Status line: saved state, word and character count",
        "✓ Lists that behave like Word (1, 1.1, 1.2 …, Tab and Shift+Tab)",
        "✓ Web links, edited with Ctrl+K",
        "✓ Colour schemes: Cream, Paper, Graphite and Space",
        "✓ App size and note text size controls",
      ],
    },
    {
      status: "done",
      version: "v0.3",
      title: "Tags instead of folders",
      summary: "Notes are grouped by tags and connected by links.",
      features: [
        "✓ Info panel on every note: + adds a tag, @ adds a link",
        "✓ Tag families with subtags, like +school/physics",
        "✓ Sidebar tag tree with icons, colours and an Inbox",
        "✓ Rename, move, merge and delete tags everywhere at once",
        "✓ Search filters: +tag, edited:7d, created:2026-03, untagged",
        "✓ Backlinks: see which notes link to the one you're reading",
        "✓ Select several notes or tags and act on them together",
        "✓ Note width: narrow, medium or wide",
      ],
    },

    // ── In progress ──────────────────────────────────────────
    {
      status: "in-progress",
      version: "v0.3.x",
      title: "Fine-tuning tags",
      summary: "Small fixes from testing, one round at a time.",
      features: [
        "✓ Tags that start with a number",
        "✓ Merge several tags into one",
        "✓ Rename the notes folder",
        "Check-in history shows mood and energy, not just answers",
        "Sleep hours only accept sensible values",
      ],
    },
    {
      status: "in-progress",
      version: "v0.4",
      title: "Ribbon, shortcuts and view modes",
      summary: "Everything one click or one shortcut away.",
      features: [
        "Ribbon at the top like Word, hidden with Ctrl+F1",
        "A shortcut for every action, with Alt letter hints",
        "Command search with Ctrl+Shift+P",
        "Three view modes: Source, Live preview and Reading",
        "A small toolbar next to selected text",
        "Text size and alignment",
        "Built-in manual with every shortcut (F1)",
      ],
    },

    // ── Planned ──────────────────────────────────────────────
    {
      status: "planned",
      version: "Writing",
      title: "Writing features",
      summary: "Richer notes without leaving plain markdown.",
      features: [
        "Images: paste, resize, wrap text, crop",
        "Banner image at the top of a note",
        "Tables you can tab through",
        "Links and footnotes inside the text",
        "Web previews and YouTube embeds",
        "Math with LaTeX, lined up like Word's equations",
      ],
    },
    {
      status: "planned",
      version: "Views",
      title: "Templates and note views",
      summary: "Start notes from templates; give some notes a special layout.",
      features: [
        "Templates folder and Ctrl+Shift+N",
        "Starter templates: book, movie, meeting, lecture",
        "Review view with cover, rating and details",
      ],
    },
    {
      status: "planned",
      version: "Insight",
      title: "Check-in charts",
      summary: "See how the days add up.",
      features: [
        "Interactive chart over 7, 30 or 90 days",
        "Track your own metrics in the check-in",
        "Switch each line on and off",
      ],
    },
    {
      status: "planned",
      version: "Galaxy",
      title: "The graph",
      summary: "Linked notes form a galaxy you can fly through.",
      features: [
        "2D map of how notes connect",
        "3D “planet” view switch",
      ],
    },
    {
      status: "planned",
      version: "Research",
      title: "Citations",
      summary: "References that fill themselves in.",
      features: [
        "Paste a DOI, ISBN or link to make a reference",
        "APA, Harvard or Vancouver styles",
      ],
    },
    {
      status: "planned",
      version: "Canvas",
      title: "Canvas",
      summary: "An endless board for note cards and images.",
      features: [
        "Note cards you can arrange and connect",
        "Paste images straight onto the board",
      ],
    },
    {
      status: "planned",
      version: "Home",
      title: "Home screen",
      summary: "The center everything orbits.",
      features: [
        "Calendar and mail at a glance",
        "Goals with progress bars",
        "A gentle time-left reminder",
      ],
    },
    {
      status: "planned",
      version: "Agents",
      title: "AI helpers",
      summary: "Assistants that help plan the day.",
      features: [
        "A check-in coach",
        "Search by meaning, run on your own PC",
      ],
    },
  ],
};
