# Nuxt AFrame 🅰️

Template for building AFrame experiences using Nuxt, AFrame, ThreeJS, Typescript, and TailwindCSS. The demo is hosted on Github Pages.

The demo website is hosted on [https://atlinx.github.io/nuxt-aframe](https://atlinx.github.io/nuxt-aframe).

## Developing

### Prerequisites

- Make sure you have NodeJS installed.
- Clone this repository
- Run

  ```bash
  npm i
  ```

### Hosting a local server

Run

```bash
npm run dev
```

### Hosting a local server live

If you need to test the website from different devices, it's best to host the server live through a proxy. This repo has scripts to host from ngrok.

#### Using ngrok

Make sure you have [ngrok](https://ngrok.com/product) installed and have registered an ngrok account and setup your ngrok token.

Run

```bash
npm run dev
```

In a separate terminal, run

```bash
npm run ngrok
```

> **NOTE:**
>
> We have a separate command for ngrok because it doesn't display any output when its
> used with the "concurrently" npm command.

### Building the website

Run

```bash
npm run build
```
