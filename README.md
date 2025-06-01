# cpu-web-miner
[![Discord Shield](https://discord.com/api/guilds/1296502456011722762/widget.png?style=shield)](https://discord.gg/HU2JFCFCRe)

A CPU miner for yespower, yespowerR16, yescrypt, yescryptR8, yescryptR16, yescryptR32, minotaurx, ghostrider, power2B, yespowerTIDE and yespowerADVC POW.

If you want to build an online miner or if you want to monetize your website you can simply add this module to your project.
## Usage
```html
<!DOCTYPE html>
<html>
<body>

<h2>Thanks for using cpu-web-miner</h2>

<script type="module">
import * as cpuWebMiner from 'https://esm.run/@marco_ciaramella/cpu-web-miner';

const stratum = {
    server: "europe.raptoreum.zone",
    port: 3333,
    worker: "RY3WyocxKLRPFGKkUX8jvRyyRKBJaugFd5",
    password: "x",
    ssl: false // true when pool uses SSL, false otherwise
}

cpuWebMiner.start(
    cpuWebMiner.ghostrider,
    stratum,
    null,
    cpuWebMiner.ALL_THREADS,
    work => console.log(work),
    hashrate => console.log(hashrate),
    error => console.log(error));
</script> 

</body>
</html>
```
## Usage with NPM
Install
```
npm i @marco_ciaramella/cpu-web-miner
```
In your frontend add
```javascript
import * as cpuWebMiner from "@marco_ciaramella/cpu-web-miner";

const stratum = {
    server: "europe.raptoreum.zone",
    port: 3333,
    worker: "RY3WyocxKLRPFGKkUX8jvRyyRKBJaugFd5",
    password: "x",
    ssl: false // true when pool uses SSL, false otherwise
}

cpuWebMiner.start(
    cpuWebMiner.ghostrider,
    stratum,
    null,
    cpuWebMiner.ALL_THREADS,
    work => console.log(work),
    hashrate => console.log(hashrate),
    error => console.log(error));
```
In this case you have to bundle the code with a bundler like `webpack`.
## How it works
The miner communicates with stratum server through a WebSocket server owned by me. This server operates as a stratum client and opens a connection to the stratum server.
### Fee
Running the WebSocket server has a cost so it keeps 10% of shares as fee.
## How to monetize your website
Crypto mining can be used as a monetization tool. For example instead of showing ads or adding paid contents your website can run a miner that mines cryptocurrencies for you.
### WARNING
You should warn the user about the background mining. Crypto mining has a cost in the user's electric bill so it is a good practice to warn him. Warn with an alert or with a message in the website.