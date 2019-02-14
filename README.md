# Veles Desktop

> *"Veles is an open source project that aims to restore the balance of privacy on the internet."*

![UI Preview](preview.gif)

### Table of Contents

* [About](#about)
   * [Download](#download)
* [Contribute](#contribute)
* [Getting started](#getting-started)
   * [Requirements](#requirements)
   * [Installation](#installation)
   * [Development](#development)
   * [Packaging](#packaging)
* [Troubleshooting](#troubleshooting)
* [Licence](#licence)

## About

Veles Desktop is our feature-rich flagship client, recommended for most users for interacting with Veles network.

We provide a decentralized privacy platform with a suite of tools to enhance your online privacy:

* **An anonymous cryptocurrency** – send and receive the VLS cryptocurrency without revealing the transaction history
* **End-to-end encrypted messaging** – communicate in a secure and decentralized manner without revealing your IP address
* **A private marketplace** – buy and sell goods without leaving a trace (WIP on `market` branch)
* **Community governance** – anyone can submit proposals to Veles network via decentralized voting & governance (WIP on `market` branch)

This repository is the user interface that works in combination with our [`Veles`](https://github.com/Velescore/Veles).

#### Download

[![Download the packaged wallet for Mac, Windows and Linux](download-button.png)](https://github.com/Velescore/veles-desktop/releases)


## Contribute

[![Snyk](https://snyk.io/test/github/Velescore/veles-desktop/badge.svg)](https://snyk.io/test/github/Velescore/veles-desktop)
[![Build Status](https://travis-ci.org/Velescore/veles-desktop.svg?branch=master)](https://travis-ci.org/Velescore/veles-desktop)
[![Coverage Status](https://coveralls.io/repos/github/Velescore/veles-desktop/badge.svg?branch=master)](https://coveralls.io/github/Velescore/veles-desktop?branch=master)
[![Code Climate](https://codeclimate.com/github/Velescore/veles-desktop/badges/gpa.svg)](https://codeclimate.com/github/Velescore/veles-desktop)
[![Greenkeeper badge](https://badges.greenkeeper.io/Velescore/veles-desktop.svg)](https://greenkeeper.io/)

For contributing to Veles Desktop, please read our [Contributing Guidelines](CONTRIBUTING.md) first.

Join us in [#veles-dev:matrix.org](https://riot.im/app/#/room/#veles-dev:matrix.org) on [Riot](https://riot.im) for more info and/or assistance.


## Getting started

### Requirements

* [Node.js®](https://nodejs.org/) 6.4—7.10
* [git](https://git-scm.com/)
* [yarn](https://yarnpkg.com/en/)

### Installation

```bash
git clone https://github.com/Velescore/veles-desktop
cd veles-desktop
yarn install
```

### Development

> Note: most recent development happens on `market` branch

1. Run `ng serve` to start the dev server and keep it running
1. In another terminal window, run `yarn run start:electron:dev -testnet --devtools` to start Veles Desktop on testnet (daemon will be updated and launched automatically)
   * `-testnet` – for running on testnet (omit for running the client on mainnet)
   * `-reindex` – reindexes the blockchain (in case you're stuck)
   * `--devtools` – automatically opens Developer Tools on client launch

#### Interact with veles-core daemon

You can directly interact with the daemon ran by the Electron version.

```
./veles-cli -testnet getblockchaininfo
```

### Packaging

#### Windows-only requirements

Building for Windows requires the 32-bit libraries to be available:

```
sudo apt-get install gcc-multilib
sudo apt-get install g++-multilib
```

#### Packaging commands

* `yarn run package:win` – Windows
* `yarn run package:mac` – macOS
* `yarn run package:linux` – Linux


## Troubleshooting

### Development issues

#### Blockchain syncing stuck
Restart the app with `-reindex` flag:

```
yarn run start:electron:dev -testnet --devtools -reindex
```

#### Marketplace fails to load
Delete marketplace `database` folder and restart app:

* Windows: `%appdata%\veles-market\testnet\`
* macOS: `~/Library/Application Support/Veles/veles-market/testnet/`
* Linux: `~/.veles-market/testnet/`

### Other issues

See our [Veles Wiki](https://veles.wiki/) for most common problems or join [#veleshelp:matrix.org](https://riot.im/app/#/room/#veleshelp:matrix.org) on [Riot](https://riot.im) for community help.


## Licence

Veles Desktop is released under [GNU General Public License v2.0](LICENCE).
