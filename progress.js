// ─────────────────────────────────────────────────────────────
//  Barycenter progress board — THE ONLY FILE YOU NEED TO EDIT
// ─────────────────────────────────────────────────────────────
//  How to update:
//   • Move a milestone between columns by changing its `status`:
//       "done"  ·  "in-progress"  ·  "planned"
//   • Tick a single feature by putting  ✓  in front of it, e.g.
//       "✓ Tables you can tab through"
//     (features without ✓ show as not done yet)
//   • Change `updated` to today's date, and `currentVersion` to the newest
//     version number (shown on the front page and in the board's stats).
//   • Swedish: write the Swedish text after a " | " on the same line, e.g.
//       "✓ Tables you can tab through | Tabeller där Tab hoppar mellan cellerna"
//     (if there's no " | ", the English text is shown in Swedish too)
//  Keep the commas and quote marks as they are.
//  This file is public: list features only, never personal notes.
// ─────────────────────────────────────────────────────────────

window.BARYCENTER = {
  updated: "25 November 2026 | 25 november 2026",
  currentVersion: "0.5.4",

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

    {
      status: "done",
      version: "v0.4 · Phase 1 | v0.4 · Fas 1",
      title: "Ribbon and shortcuts | Menyband och kortkommandon",
      summary: "Everything one click or one shortcut away. Released as 0.4.6. | Allt bara ett klick eller ett kortkommando bort. Släppt som 0.4.6.",
      features: [
        "✓ Ribbon at the top like Word, with Home, Insert and View tabs | Menyband högst upp som i Word, med flikarna Start, Infoga och Visa",
        "✓ Hide the ribbon with Ctrl+F1, from the View tab or in settings | Dölj menybandet med Ctrl+F1, från fliken Visa eller i inställningarna",
        "✓ A shortcut for every button, shown when you hover over it | Ett kortkommando för varje knapp, som visas när du håller muspekaren över den",
        "✓ Command search with Ctrl+Shift+P | Sök bland kommandon med Ctrl+Shift+P",
        "✓ Alt key tips like Word (Alt, H, 1 for bold) | Bokstavstips med Alt som i Word (Alt, H, 1 för fetstil)",
        "✓ Bold, italic and more across several lines or list items | Fetstil, kursiv med mera över flera rader eller listpunkter",
        "✓ Smoother checkboxes, quotes, numbered lists and find bar | Smidigare kryssrutor, citat, numrerade listor och sökfält",
      ],
    },

    {
      status: "done",
      version: "v0.4 · Phase 2 | v0.4 · Fas 2",
      title: "View modes and a ribbon that adapts | Visningslägen och ett menyband som anpassar sig",
      summary: "Choose how a note looks while you work. | Välj hur en anteckning ser ut medan du arbetar.",
      features: [
        "✓ Three view modes: Source, Live preview and Reading | Tre visningslägen: källkod, direktvisning och läsläge",
        "✓ Switch from the View tab or with a shortcut, remembered after restart | Växla från fliken Visa eller med ett kortkommando, och valet sparas",
        "✓ Show spaces and line ends in Source | Visa mellanslag och radslut i källkodsläget",
        "✓ Reading mode locks the text, but checkboxes still tick | Läsläget låser texten, men kryssrutor går fortfarande att bocka i",
        "✓ The ribbon folds into menus in narrow windows, like Word | Menybandet fälls ihop till menyer i smala fönster, som i Word",
      ],
    },

    {
      status: "done",
      version: "v0.4 · Phase 3 | v0.4 · Fas 3",
      title: "Formatting selected text | Formatera markerad text",
      summary: "Quick formatting right where you select. Released as 0.4.16. | Snabb formatering precis där du markerar. Släppt som 0.4.16.",
      features: [
        "✓ A small toolbar next to selected text, with more tools under … | Ett litet verktygsfält bredvid markerad text, med fler verktyg under …",
        "✓ Text size for selected words, like Word's sizes | Textstorlek för markerade ord, med Words storlekar",
        "✓ Align text left, centre or right | Justera text till vänster, mitten eller höger",
        "✓ Type / for a menu of every command | Skriv / för en meny med alla kommandon",
        "✓ Choose in settings which of these tools you want | Välj i inställningarna vilka av verktygen du vill ha",
      ],
    },

    {
      status: "done",
      version: "v0.4 · Phase 4 | v0.4 · Fas 4",
      title: "Learning the keys | Lär dig tangenterna",
      summary: "A built-in manual for everything Barycenter can do. Released as 0.4.17. | En inbyggd manual för allt Barycenter kan. Släppt som 0.4.17.",
      features: [
        "✓ Manual with every shortcut and short how-tos, opened with F1 | Manual med alla kortkommandon och korta guider, öppnas med F1",
        "✓ A tidy list of the most useful shortcuts on the start screen | En prydlig lista med de mest användbara kortkommandona på startskärmen",
      ],
    },

    {
      status: "done",
      version: "v0.5 · Phase 1 | v0.5 · Fas 1",
      title: "Links and footnotes in the text | Länkar och fotnoter i texten",
      summary: "Connect notes right where you write, and cite your sources. Released as 0.5.4. | Koppla ihop anteckningar precis där du skriver, och ange dina källor. Släppt som 0.5.4.",
      features: [
        "✓ Link words in the text to a note with Ctrl+K or by typing [[ | Länka ord i texten till en anteckning med Ctrl+K eller genom att skriva [[",
        "✓ Footnotes for sources, numbered automatically | Fotnoter för källor, som numreras automatiskt",
        "✓ An APA 7 box that writes the reference for you | En APA 7-ruta som skriver referensen åt dig",
        "✓ A References tab on the ribbon | En Referenser-flik i menybandet",
        "✓ A warning before deleting a note other notes link to | En varning innan du raderar en anteckning som andra länkar till",
      ],
    },

    // ── In progress ──────────────────────────────────────────

    // ── Planned ──────────────────────────────────────────────
    {
      status: "planned",
      version: "v0.5 · Phase 2 | v0.5 · Fas 2",
      title: "Images | Bilder",
      summary: "Pictures inside your notes, handled like in Word. | Bilder i dina anteckningar, som i Word.",
      features: [
        "Paste or drag in images, resize, align and crop them | Klistra in eller dra in bilder, ändra storlek, justera och beskär",
        "Text that wraps around images | Text som flyter runt bilder",
        "A clean-up button for images no note uses | En rensningsknapp för bilder som ingen anteckning använder",
      ],
    },
    {
      status: "planned",
      version: "v0.5 · Phase 3 | v0.5 · Fas 3",
      title: "Banner and embeds | Omslagsbild och inbäddningar",
      summary: "A cover picture and live previews. | En omslagsbild och levande förhandsvisningar.",
      features: [
        "Banner image at the top of a note | Omslagsbild högst upp i en anteckning",
        "Web previews and YouTube embeds | Förhandsvisning av webbsidor och inbäddade YouTube-videor",
      ],
    },
    {
      status: "planned",
      version: "v0.5 · Phase 4 | v0.5 · Fas 4",
      title: "Tables | Tabeller",
      summary: "Tables that feel like Word. | Tabeller som känns som i Word.",
      features: [
        "Insert a table by size, Tab between cells | Infoga en tabell i vald storlek, hoppa mellan celler med Tab",
        "Add or remove rows and columns | Lägg till eller ta bort rader och kolumner",
      ],
    },
    {
      status: "planned",
      version: "v0.5 · Phase 5 | v0.5 · Fas 5",
      title: "Math | Matematik",
      summary: "Formulas and calculations, written like in Word. | Formler och uträkningar, skrivna som i Word.",
      features: [
        "Math with LaTeX, shown as finished formulas | Matematik med LaTeX, som visas som färdiga formler",
        "Equations lined up on the = sign, like Word | Ekvationer uppställda efter likhetstecknet, som i Word",
        "A Math button with common symbols and structures | En matteknapp med vanliga symboler och uppställningar",
        "Shortcuts like \\alpha for α, right in normal text | Genvägar som \\alpha för α, direkt i vanlig text",
      ],
    },
    {
      status: "planned",
      version: "v0.6 · Phase 1 | v0.6 · Fas 1",
      title: "Templates | Mallar",
      summary: "Start new notes from ready-made layouts. | Börja nya anteckningar från färdiga upplägg.",
      features: [
        "Templates folder and Ctrl+Shift+N | Mallmapp och Ctrl+Shift+N",
        "Starter templates: book, movie, meeting, lecture | Färdiga mallar: bok, film, möte, föreläsning",
      ],
    },
    {
      status: "planned",
      version: "v0.6 · Phase 2 | v0.6 · Fas 2",
      title: "Note views | Anteckningsvyer",
      summary: "Give some notes a special layout. | Ge vissa anteckningar en egen layout.",
      features: [
        "Review view with cover, rating and details | Recensionsvy med omslag, betyg och detaljer",
        "A third view, maybe for people or projects | En tredje vy, kanske för personer eller projekt",
      ],
    },
    {
      status: "planned",
      version: "v0.6 · Phase 3 | v0.6 · Fas 3",
      title: "Card overview | Kortöversikt",
      summary: "A new start screen with tags and notes as cards. | En ny startskärm med taggar och anteckningar som kort.",
      features: [
        "Tag cards with icon, colour and note count | Taggkort med ikon, färg och antal anteckningar",
        "Note cards with title, preview, tags and date | Anteckningskort med titel, förhandsvisning, taggar och datum",
        "A Home button in the sidebar | En hemknapp i sidofältet",
        "Click a tag card to see its notes, with sorting | Klicka på ett taggkort för att se dess anteckningar, med sortering",
      ],
    },
    {
      status: "planned",
      version: "v0.6 · Phase 4 | v0.6 · Fas 4",
      title: "Check-in charts | Diagram över incheckningar",
      summary: "See how the days add up. | Se hur dagarna hänger ihop.",
      features: [
        "Interactive chart over 7, 30 or 90 days | Interaktivt diagram över 7, 30 eller 90 dagar",
        "Track your own metrics in the check-in | Följ dina egna mätvärden i incheckningen",
        "Switch each line on and off | Slå på och av varje linje",
        "Colours that show how good a value is | Färger som visar hur bra ett värde är",
      ],
    },

    // ── After 0.6 ──
    {
      status: "planned",
      version: "After 0.6 · Galaxy | Efter 0.6 · Galax",
      title: "The graph | Grafen",
      summary: "Linked notes form a galaxy you can fly through. | Länkade anteckningar bildar en galax som du kan flyga igenom.",
      features: [
        "2D map of how notes connect | 2D-karta över hur anteckningarna hänger ihop",
        "3D “planet” view switch | Växla till en 3D-vy med ”planeter”",
      ],
    },
    {
      status: "planned",
      version: "After 0.6 · Research | Efter 0.6 · Forskning",
      title: "Citations | Källhänvisningar",
      summary: "References that fill themselves in. | Referenser som fyller i sig själva.",
      features: [
        "Paste a DOI, ISBN or link to make a reference | Klistra in en DOI, ett ISBN eller en länk för att skapa en referens",
        "APA, Harvard or Vancouver styles | Referensstilarna APA, Harvard eller Vancouver",
      ],
    },
    {
      status: "planned",
      version: "After 0.6 · Canvas | Efter 0.6 · Arbetsyta",
      title: "Canvas | Arbetsyta",
      summary: "An endless board for note cards and images. | En oändlig tavla för anteckningskort och bilder.",
      features: [
        "Note cards you can arrange and connect | Anteckningskort som du kan ordna och koppla ihop",
        "Paste images straight onto the board | Klistra in bilder direkt på tavlan",
      ],
    },
    {
      status: "planned",
      version: "After 0.6 · Home | Efter 0.6 · Hem",
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
      version: "After 0.6 · Agents | Efter 0.6 · Agenter",
      title: "AI helpers | AI-assistenter",
      summary: "Assistants that help plan the day. | Assistenter som hjälper till att planera dagen.",
      features: [
        "A check-in coach | En coach för incheckningen",
        "Search by meaning, run on your own PC | Sökning efter betydelse, som körs på din egen dator",
      ],
    },
  ],
};
