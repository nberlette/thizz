  <h1 align="center"><code>thizz</code></h1>
<div align="center">
  <p>

[![badge-version]][version] [![badge-types]][types] [![badge-contrib]][contributors] [![badge-issues]][issues] [![badge-license]][license]

  </p>
</div>

## Installation

<details open>
<summary><strong>PNPM</strong> <small>(recommended)</small></summary>

```bash
pnpm i thizz
```

</details>
<details>
<summary><strong>Yarn</strong> <small>(also good)</small></summary>

```bash
yarn add thizz
```

</details>
<details>
<summary><strong>NPM</strong> <small>(if you must...)</small></summary>

```bash
npm i --save thizz
```

</details>

## Usage

`thizz` packages its modules as both ESM and CJS (CommonJS/Node), and is fully treeshakeable (ESM only).

### ES Modules

#### Namespaced import: all methods

```js
import * as thizz from 'thizz';
```

> This will construct a namespace of `thizz`, with methods like `thizz.isString()`

#### Named imports: cherry-picked methods

```js
import { isWeakMap, isRegExp } from 'thizz';
```

> If possible, I recommend tree-shaking individual methods instead. See below.

#### Tree-shaking: default or named imports

```js
import isNaN from 'thizz/isNaN';
// or
import { isNaN } from 'thizz/isNaN';
```

> **Read**: [more info on **Tree Shaking** at MDN](https://mdn.io/Tree_shaking)

---

### CommonJS

CommonJS (or CJS), the variant of JavaScript popularized by Node.js, is supported but not recommended.
It is only included for compatibility purposes at this point.

```js
const { isArray, isPromise } = require('thizz');
const isNil = require('thizz/isNil');
```

> **Note**: Treeshaking and code-splitting are not supported features of CJS.

---

## Contributing

One of the most overlooked aspects of the Open Source community is the impact of contributions.
Projects like `thizz` depend on contributions from other members like yourself to stay alive and thrive.
Furthermore, your contributions are the cornerstone of **_why_** the open source is such an amazing place to learn, inspire, and create.

Any contributions you make are **greatly appreciated**. Seriously. A lot.

<details open>
<summary><strong>Contribution Guidelines</strong></summary>

- [x] If you're new here, get comfortable with the [Contribution Guidelines].
- [x] Please familiarize yourself with the community's [Code of Conduct] beforehand.
- [x] Create an individual PR for each feature added (or change made) to the API.
- [x] Please proofread and double-check your spelling/grammar for mistakes.

</details>
<details open>
<summary><strong>Creating a Pull Request</strong></summary>
<br>

> **Note**: This section uses `gh`, the [GitHub CLI](https://cli.github.com). You should too.

1. **Fork the project**

```bash
  gh repo fork nberlette/thizz
```

2. **Create your feature branch**

```bash
  git checkout -b feature/isAwesome
```

> _here is where you hack, hack, hack..._

3. **Add and commit your changes**

```bash
  git add src/isAwesome.js
  git commit -m 'Added feature isAwesome.js...'
```

> **Important**: please verify + sign **_all commits_** with PGP — see [docs.github.com][pgp-info].

1. **Push to your fork's Feature Branch**

```bash
  git push -u origin feature/isAwesome
```

5. **Open a Pull Request**

```bash
# Using the GitHub CLI
gh pr create --title "[feature]: thizz.isAwesome - returns true if you're cool"
```

</details>

---

<div style="display:grid;place-items:center">

[MIT][license] © [Nicholas Berlette]

</div>

[pgp-info]: https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification
[badge-version]: https://badgen.net/npm/v/thizz
[version]: https://npm.im/thizz
[badge-types]: https://badgen.net/npm/types/thizz
[types]: https://github.com/nberlette/thizz/blob/main/index.d.ts
[badge-contrib]: https://badgen.net/github/contributors/nberlette/thizz?color=green
[contributors]: https://github.com/nberlette/thizz
[badge-issues]: https://badgen.net/github/issues/nberlette/thizz
[issues]: https://github.com/nberlette/thizz/issues
[badge-license]: https://badgen.net/github/license/nberlette/thizz?color=blue
[license]: https://mit-license.org/
[nicholas berlette]: https://github.com/nberlette
[code of conduct]: https://github.com/nberlette/.github/blob/main/.github/code_of_conduct.md
[open an issue]: https://github.com/nberlette/thizz/issues/new
[package]: https://npm.im/thizz
[repository]: https://github.com/nberlette/thizz
