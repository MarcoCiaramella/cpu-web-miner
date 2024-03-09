import { io } from "socket.io-client";




export const yespower = "yespower";
export const yespowerR16 = "yespowerR16";
export const yescrypt = "yescrypt";
export const yescryptR8 = "yescryptR8";
export const yescryptR16 = "yescryptR16";
export const yescryptR32 = "yescryptR32";
export const minotaurx = "minotaurx";

/**
 * Starts mining.
 * @param {string} algo can be yespower, yespowerR16, yescrypt, yescryptR8, yescryptR16, yescryptR32, minotaurx
 * @param {object} stratum
 * @param {object} options
 */
export function mine(algo, stratum, options) {

    if (!window.Worker) throw "Web Worker not supported";

    const log = options ? options.log : false;
    const NUM_WORKERS = 1;
    let workers = [];

    function print(...msgs) {
        log && console.log(...msgs);
    }

    function terminateWorkers() {
        for (const worker of workers) worker.terminate();
        workers = [];
    }

    const socket = io("wss://websocket-stratum-server.com", { transports: ['websocket'] });

    socket.on('can start', () => socket.emit("start", { version: "1.0.0", stratum: stratum, algo: algo }));

    socket.on('work', function (work) {

        print("new work:", work);

        terminateWorkers();

        for (let i = 0; i < NUM_WORKERS; i++) {
            const worker = new Worker(code);
            workers.push(worker);

            worker.onmessage = e => {
                if (e.data.type === "submit") {
                    print("share found!");
                    socket.emit('submit', e.data.data);
                    terminateWorkers();
                }
                else if (e.data.type === "hashrate") {
                    const hashrate = `${e.data.data} Kh/s`;
                    print("hashrate:", hashrate);
                    socket.emit('hashrate', { hashrate: hashrate });
                }
            }

            worker.postMessage({ algo: algo, work: work });
        }
    });

    socket.on('submit failed', error => {
        console.error("Share found is not valid:", error);
    });
}

const code = "data:text/javascript;base64," +
    ""