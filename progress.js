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
//   • Swedish: write the Swedish text after a " | " on the same line, e.g.
//       "✓ Tables you can tab through | Tabeller där Tab hoppar mellan cellerna"
//     (if there's no " | ", the English text is shown in Swedish too)
//  Keep the commas and quote marks as they are.
//  This file is public: list features only, never personal notes.
// ─────────────────────────────────────────────────────────────

window.BARYCENTER = {
  updated: "23 November 2026 | 23 november 2026",
  currentVersion: "0.3.2",

  milestones: [
    // ── Done ─────────────────────────────────────────────────
    {
      status: "done",
      version: "v0.1",
      title: "Foundations | Grunden",
      summary: "A real Windows app for plain markdown notes. | En riktig Windows-app för vanliga markdown-anteckningar.",
      features: [
        "✓ Windows app that only ever touches the notes folder you pick | Windows-app som bara rör mappen med anteckningar som du väljer",
        "✓ Markdown editor with live preview | Markdown-redigerare med direkt förhandsvisning",
        "✓ Search across every note | Sök i alla anteckningar",
        "✓ A short daily check-in, saved as a journal note | En kort daglig incheckning, sparad som en dagboksanteckning",
        "✓ Light and dark mode | Ljust och mörkt läge",
        "✓ Deleted notes go to the Recycle Bin | Raderade anteckningar hamnar i papperskorgen",
        "✓ Windows-style shortcuts for headings, lists and formatting | Kortkommandon som i Windows för rubriker, listor och formatering",
        "✓ Installer built automatically on every update | Installationsprogrammet byggs automatiskt vid varje uppdatering",
      ],
    },
    {
      status: "done",
      version: "v0.2",
      title: "Polish | Finputs",
      summary: "Word-like lists, a big search box and colour schemes. | Listor som i Word, en stor sökruta och färgteman.",
      features: [
        "✓ Ctrl+P opens a large centred search with highlighted matches | Ctrl+P öppnar en stor sökruta mitt på skärmen, med träffarna markerade",
        "✓ Status line: saved state, word and character count | Statusrad som visar om allt är sparat, och antal ord och tecken",
        "✓ Lists that behave like Word (1, 1.1, 1.2 …, Tab and Shift+Tab) | Listor som fungerar som i Word (1, 1.1, 1.2 …, Tab och Shift+Tab)",
        "✓ Web links, edited with Ctrl+K | Webblänkar som redigeras med Ctrl+K",
        "✓ Colour schemes: Cream, Paper, Graphite and Space | Färgteman: Cream, Paper, Graphite och Space",
        "✓ App size and note text size controls | Inställningar för appens storlek och textstorleken",
      ],
    },
    {
      status: "done",
      version: "v0.3",
      title: "Tags instead of folders | Taggar i stället för mappar",
      summary: "Notes are grouped by tags and connected by links. | Anteckningar grupperas med taggar och kopplas ihop med länkar.",
      features: [
        "✓ Info panel on every note: + adds a tag, @ adds a link | Infopanel på varje anteckning: + lägger till en tagg, @ lägger till en länk",
        "✓ Tag families with subtags, like +school/physics | Taggfamiljer med undertaggar, till exempel +skola/fysik",
        "✓ Sidebar tag tree with icons, colours and an Inbox | Taggträd i sidofältet med ikoner, färger och en inkorg",
        "✓ Rename, move, merge and delete tags everywhere at once | Byt namn på, flytta, slå ihop och radera taggar överallt på en gång",
        "✓ Search filters: +tag, edited:7d, created:2026-03, untagged | Sökfilter: +tagg, edited:7d, created:2026-03, untagged",
        "✓ Backlinks: see which notes link to the one you're reading | Bakåtlänkar: se vilka anteckningar som länkar till den du läser",
        "✓ Select several notes or tags and act on them together | Markera flera anteckningar eller taggar och hantera dem på en gång",
        "✓ Note width: narrow, medium or wide | Anteckningsbredd: smal, mellan eller bred",
      ],
    },

    // ── In progress ──────────────────────────────────────────
    {
      status: "in-progress",
      version: "v0.3.x",
      title: "Fine-tuning tags | Finjustering av taggar",
      summary: "Small fixes from testing, one round at a time. | Små rättningar efter testning, en omgång i taget.",
      features: [
        "✓ Tags that start with a number | Taggar som börjar med en siffra",
        "✓ Merge several tags into one | Slå ihop flera taggar till en",
        "✓ Rename the notes folder | Byt namn på mappen med anteckningar",
        "Check-in history shows mood and energy, not just answers | Tidigare incheckningar visar humör och energi, inte bara svaren",
        "Sleep hours only accept sensible values | Antal sovtimmar tar bara emot rimliga värden",
      ],
    },
    {
      status: "in-progress",
      version: "v0.4",
      title: "Ribbon, shortcuts and view modes | Menyband, kortkommandon och visningslägen",
      summary: "Everything one click or one shortcut away. | Allt bara ett klick eller ett kortkommando bort.",
      features: [
        "Ribbon at the top like Word, hidden with Ctrl+F1 | Menyband högst upp som i Word, döljs med Ctrl+F1",
        "A shortcut for every action, with Alt letter hints | Ett kortkommando för varje funktion, med bokstavstips när du trycker Alt",
        "Command search with Ctrl+Shift+P | Sök bland kommandon med Ctrl+Shift+P",
        "Three view modes: Source, Live preview and Reading | Tre visningslägen: källkod, direktvisning och läsläge",
        "A small toolbar next to selected text | Ett litet verktygsfält bredvid markerad text",
        "Text size and alignment | Textstorlek och justering",
        "Built-in manual with every shortcut (F1) | Inbyggd manual med alla kortkommandon (F1)",
      ],
    },

    // ── Planned ──────────────────────────────────────────────
    {
      status: "planned",
      version: "Writing | Skrivande",
      title: "Writing features | Skrivfunktioner",
      summary: "Richer notes without leaving plain markdown. | Rikare anteckningar, fortfarande i vanlig markdown.",
      features: [
        "Images: paste, resize, wrap text, crop | Bilder: klistra in, ändra storlek, låt texten flyta runt, beskär",
        "Banner image at the top of a note | Omslagsbild högst upp i en anteckning",
        "Tables you can tab through | Tabeller där Tab hoppar mellan cellerna",
        "Links and footnotes inside the text | Länkar och fotnoter direkt i texten",
        "Web previews and YouTube embeds | Förhandsvisning av webbsidor och inbäddade YouTube-videor",
        "Math with LaTeX, lined up like Word's equations | Matematik med LaTeX, uppställd som ekvationer i Word",
      ],
    },
    {
      status: "planned",
      version: "Views | Vyer",
      title: "Templates and note views | Mallar och anteckningsvyer",
      summary: "Start notes from templates; give some notes a special layout. | Skapa anteckningar från mallar och ge vissa anteckningar en egen layout.",
      features: [
        "Templates folder and Ctrl+Shift+N | Mallmapp och Ctrl+Shift+N",
        "Starter templates: book, movie, meeting, lecture | Färdiga mallar: bok, film, möte, föreläsning",
        "Review view with cover, rating and details | Recensionsvy med omslag, betyg och detaljer",
      ],
    },
    {
      status: "planned",
      version: "Insight | Insikt",
      title: "Check-in charts | Diagram över incheckningar",
      summary: "See how the days add up. | Se hur dagarna hänger ihop.",
      features: [
        "Interactive chart over 7, 30 or 90 days | Interaktivt diagram över 7, 30 eller 90 dagar",
        "Track your own metrics in the check-in | Följ dina egna mätvärden i incheckningen",
        "Switch each line on and off | Slå på och av varje linje",
      ],
    },
    {
      status: "planned",
      version: "Galaxy | Galax",
      title: "The graph | Grafen",
      summary: "Linked notes form a galaxy you can fly through. | Länkade anteckningar bildar en galax som du kan flyga igenom.",
      features: [
        "2D map of how notes connect | 2D-karta över hur anteckningarna hänger ihop",
        "3D “planet” view switch | Växla till en 3D-vy med ”planeter”",
      ],
    },
    {
      status: "planned",
      version: "Research | Forskning",
      title: "Citations | Källhänvisningar",
      summary: "References that fill themselves in. | Referenser som fyller i sig själva.",
      features: [
        "Paste a DOI, ISBN or link to make a reference | Klistra in en DOI, ett ISBN eller en länk för att skapa en referens",
        "APA, Harvard or Vancouver styles | Referensstilarna APA, Harvard eller Vancouver",
      ],
    },
    {
      status: "planned",
      version: "Canvas | Arbetsyta",
      title: "Canvas | Arbetsyta",
      summary: "An endless board for note cards and images. | En oändlig tavla för anteckningskort och bilder.",
      features: [
        "Note cards you can arrange and connect | Anteckningskort som du kan ordna och koppla ihop",
        "Paste images straight onto the board | Klistra in bilder direkt på tavlan",
      ],
    },
    {
      status: "planned",
      version: "Home | Hem",
      title: "Home screen | Startskärm",
      summary: "The center everything orbits. | Mittpunkten som allt kretsar kring.",
      features: [
        "Calendar and mail at a glance | Kalender och mejl på ett ögonkast",
        "Goals with progress bars | Mål med förloppsstaplar",
        "A gentle time-left reminder | En mild påminnelse om hur mycket tid som är kvar",
      ],
    },
    {
      status: "planned",
      version: "Agents | Agenter",
      title: "AI helpers | AI-assistenter",
      summary: "Assistants that help plan the day. | Assistenter som hjälper till att planera dagen.",
      features: [
        "A check-in coach | En coach för incheckningen",
        "Search by meaning, run on your own PC | Sökning efter betydelse, som körs på din egen dator",
      ],
    },
  ],
};
