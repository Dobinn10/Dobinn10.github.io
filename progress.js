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
  updated: "25 November 2026 | 25 november 2026",
  currentVersion: "0.4.5",

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
        "✓ The Ringed B logo as the app's icon | Den ringade B-logotypen som appens ikon",
        "✓ Sandstone colour scheme, the new default | Färgtemat Sandstone, det nya standardtemat",
      ],
    },

    {
      status: "done",
      version: "v0.3.1–0.3.10",
      title: "Fine-tuning and extras | Finjustering och extra",
      summary: "Ten rounds of fixes and small extras from testing. | Tio omgångar med rättningar och små extrafunktioner efter testning.",
      features: [
        "✓ Tags that start with a number | Taggar som börjar med en siffra",
        "✓ Merge several tags into one | Slå ihop flera taggar till en",
        "✓ Rename the notes folder | Byt namn på mappen med anteckningar",
        "✓ Check-in history shows mood and energy, not just answers | Tidigare incheckningar visar humör och energi, inte bara svaren",
        "✓ Sleep hours only accept sensible values | Antal sovtimmar tar bara emot rimliga värden",
        "✓ Recycle Bin inside the app | Papperskorg inne i appen",
        "✓ Sidebar you can resize or hide (Ctrl+\\) | Sidofält som går att göra bredare, smalare eller dölja (Ctrl+\\)",
        "✓ Keyboard control in the sidebar: arrow keys, Enter, F2 and Delete | Styr sidofältet med tangentbordet: piltangenter, Enter, F2 och Delete",
        "✓ Undo notice after deleting notes or changing tags | Ångra-ruta efter att du raderat anteckningar eller ändrat taggar",
        "✓ New colour schemes Sage and Nebula, with matching headings | Nya färgteman, Sage och Nebula, med rubriker i matchande färger",
        "✓ Duplicate a note | Duplicera en anteckning",
        "✓ Slim scrollbars in the colour scheme's colours | Smala rullningslister i färgtemats färger",
        "✓ Smoother keyboard moves in the sidebar | Smidigare tangentbordsstyrning i sidofältet",
        "✓ Scrollbars fade away when you stop scrolling | Rullningslister som tonar bort när du slutar rulla",
        "✓ The keyboard works again right after menus and windows close | Tangentbordet fungerar direkt igen när menyer och fönster stängs",
      ],
    },

    // ── In progress ──────────────────────────────────────────
    {
      status: "in-progress",
      version: "v0.4 · Phase 1 | v0.4 · Fas 1",
      title: "Ribbon and shortcuts | Menyband och kortkommandon",
      summary: "Everything one click or one shortcut away. Built, now being fine-tuned. | Allt bara ett klick eller ett kortkommando bort. Klart och finjusteras nu.",
      features: [
        "✓ Ribbon at the top like Word, with Home, Insert and View tabs | Menyband högst upp som i Word, med flikarna Start, Infoga och Visa",
        "✓ Hide the ribbon with Ctrl+F1, from the View tab or in settings | Dölj menybandet med Ctrl+F1, från fliken Visa eller i inställningarna",
        "✓ A shortcut for every button, shown when you hover over it | Ett kortkommando för varje knapp, som visas när du håller muspekaren över den",
        "✓ Command search with Ctrl+Shift+P | Sök bland kommandon med Ctrl+Shift+P",
        "✓ Alt key tips like Word (Alt, H, 1 for bold) | Bokstavstips med Alt som i Word (Alt, H, 1 för fetstil)",
        "✓ Bold, italic and more across several lines or list items | Fetstil, kursiv med mera över flera rader eller listpunkter",
        "✓ Smoother checkboxes, quotes and find bar | Smidigare kryssrutor, citat och sökfält",
      ],
    },

    // ── Planned ──────────────────────────────────────────────
    {
      status: "planned",
      version: "v0.4 · Phase 2 | v0.4 · Fas 2",
      title: "View modes | Visningslägen",
      summary: "Choose how a note looks while you work. | Välj hur en anteckning ser ut medan du arbetar.",
      features: [
        "Three view modes: Source, Live preview and Reading | Tre visningslägen: källkod, direktvisning och läsläge",
        "Switch between them from the View tab | Växla mellan dem från fliken Visa",
      ],
    },
    {
      status: "planned",
      version: "v0.4 · Phase 3 | v0.4 · Fas 3",
      title: "Formatting selected text | Formatera markerad text",
      summary: "Quick formatting right where you select. | Snabb formatering precis där du markerar.",
      features: [
        "A small toolbar next to selected text | Ett litet verktygsfält bredvid markerad text",
        "Text size for selected words | Textstorlek för markerade ord",
        "Align text left, centre or right | Justera text till vänster, mitten eller höger",
      ],
    },
    {
      status: "planned",
      version: "v0.4 · Phase 4 | v0.4 · Fas 4",
      title: "Learning the keys | Lär dig tangenterna",
      summary: "A built-in manual for everything Barycenter can do. | En inbyggd manual för allt Barycenter kan.",
      features: [
        "Manual with every shortcut, opened with F1 | Manual med alla kortkommandon, öppnas med F1",
        "A tidy list of the most useful shortcuts on the start screen | En prydlig lista med de mest användbara kortkommandona på startskärmen",
      ],
    },
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
      version: "Overview | Översikt",
      title: "Card overview | Kortöversikt",
      summary: "A new start screen with tags and notes as cards. | En ny startskärm med taggar och anteckningar som kort.",
      features: [
        "Tag cards with icon, colour and note count | Taggkort med ikon, färg och antal anteckningar",
        "Note cards with title, preview, tags and date | Anteckningskort med titel, förhandsvisning, taggar och datum",
        "A Home button in the sidebar | En hemknapp i sidofältet",
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
        "Colours that show how good a value is | Färger som visar hur bra ett värde är",
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
