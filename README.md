# Barycenter progress site

A one-page website showing what's been built in Barycenter and what's next.

- `index.html` – the page itself (look and animation). You normally never touch it.
- `progress.js` – the progress board. **This is the only file to edit.**

## Updating the board

Open `progress.js` on GitHub, click the pencil icon, and:

- Move a milestone to another column by changing its `status` to `"done"`, `"in-progress"` or `"planned"`.
- Mark a single feature as built by putting `✓ ` in front of it.
- Change `updated:` to today's date.
- Swedish: put the Swedish text after ` | ` on the same line, like `"✓ Tables you can tab through | Tabeller där Tab hoppar mellan cellerna"`.

The English / Svenska switch sits in the top-right corner. To send someone the Swedish version directly, use `https://dobinn10.github.io/?lang=sv`.

Click **Commit changes**. The site updates by itself within a minute or two.

This repository is public. Only list features here, never personal notes or the app's source code.
