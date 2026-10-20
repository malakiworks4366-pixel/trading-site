# Victoria W&T Trade: website

A neon, trading-style one-page site for Victoria W&T Trade. Visitors get free one-on-one trading advice by messaging Victoria on Telegram or Discord, and can watch her trade live on YouTube ([@VictoriaW_T](https://www.youtube.com/@VictoriaW_T)). It's plain HTML, CSS and JavaScript, so there's nothing to build.

## What's on the page

- **Hero:** "Get free advice" and "Watch me trade" buttons, over an animated candlestick chart
- **Live ticker:** live prices from TradingView (S&P 500, US 100, EUR/USD, Gold, Bitcoin, Ethereum)
- **About:** a short intro
- **Free advice:** three steps (message me, ask your question, get free advice), Telegram and Discord buttons, and a "stay safe" note about fake accounts
- **Watch me trade live:** her YouTube stream, with Subscribe and All live streams buttons
- **Stay connected:** her YouTube channel, plus any other socials that are filled in
- **Footer:** risk disclaimer

## Files

| File | What it is |
|---|---|
| `config.js` | **Her links. This is the only file you need to edit.** |
| `index.html` | The page and its text |
| `style.css` | Colors and layout |
| `script.js` | Builds the buttons, links and hero chart from `config.js`. No need to edit it. |

## Add her Telegram and Discord

Open `config.js` and fill in the quotes:

```js
telegram: "@her_username",
discord: "her_username",
```

- **Telegram:** her username (`"@name"`) or link (`"https://t.me/name"`). The button opens a chat with her.
- **Discord:** either her **username**, which gives a button that copies it so people can add her as a friend and DM her, or a **server invite** (`"https://discord.gg/..."`), which gives a "Join & message me" button.
- Until they're filled in, both cards show "Coming soon".

Instagram, TikTok, X, Facebook, WhatsApp and Email work the same way. They stay hidden until filled in, then appear under "Stay connected".

## Other changes

- **Featured stream:** paste any YouTube video or stream link into `featuredStream` in `config.js`.
- **Ticker markets:** edit the `"symbols"` list in the ticker block near the top of `index.html`, or delete that block to remove the ticker.
- **Her own words:** the About text and step descriptions in `index.html` are general wording. Swap in her own.
- **Her photo:** create an `images/` folder, add the photo, and replace the `<div class="avatar avatar-initials" ...>V</div>` line with `<img class="avatar" src="images/victoria.jpg" alt="Victoria">`.
- **Colors:** edit the variables at the top of `style.css` (`--green` is the main neon).

## Host on GitHub Pages

1. Create a new repository on GitHub. Name it `USERNAME.github.io` for the site to be at `https://USERNAME.github.io`, or use any name (for example `victoria-wt-trade`) for `https://USERNAME.github.io/victoria-wt-trade`.
2. Upload `index.html`, `style.css`, `script.js` and `config.js` (and `images/` if you added it) to the repository root.
3. Go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`**, then click **Save**.
4. Wait a minute or two, and the site's live link appears at the top of that page.

To update a link later, open `config.js` on GitHub, click the pencil icon, edit it, and commit. The site updates in a minute or two.
