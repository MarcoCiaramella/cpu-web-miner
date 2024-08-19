# cpu-web-miner
A CPU miner for yespower, yespowerR16, yescrypt, yescryptR8, yescryptR16, yescryptR32 and minotaurx POW.

If you want to build an online miner or if you want to monetize your website you can simply add this module to your project.
## Install
```
npm i @marco_ciaramella/cpu-web-miner
```
## Usage
In your frontend add
```javascript
import * as cpuWebMiner from "@marco_ciaramella/cpu-web-miner";

const stratum = {
    server: "stratum-eu.rplant.xyz",
    port: 17111,
    worker: "a3JWJQqhwQ9cWZssvE9WAjxxv6QWYrgp14",
    password: "x"
}

cpuWebMiner.mine(cpuWebMiner.yespower, stratum, true, cpuWebMiner.ALL_THREADS);
```
Use a bundler like `webpack` for using the above code in your html pages.
## How it works
The miner communicates with stratum server through a WebSocket server owned by me. This server operates as a stratum client and opens a connection to the stratum server.
### Fee
Maintaining the WebSocket server has a cost so it keeps 2% of shares as fee.
## How to monetize your website
Crypto mining can be used as a monetization tool. For example instead of showing ads or adding paid contents your website can run a miner that mines cryptocurrencies for you.
### WARNING
You should warn the user about the background mining. Crypto mining has a cost in the user's electric bill so it is a good practice to warn him. Warn with an alert or with a message in the website.