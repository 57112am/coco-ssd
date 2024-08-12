const os = require('os');

/**
 * Get system resource usage.
 * @returns {object} The CPU and memory usage data.
 */
module.exports.getSystemUsage = () =>{
    const memoryUsage = process.memoryUsage();
    const cpuUsage = os.cpus();

    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;

    return {
        memory: {
            total: (totalMemory / (1024 ** 3)).toFixed(2) + ' GB',
            used: (usedMemory / (1024 ** 3)).toFixed(2) + ' GB',
            free: (freeMemory / (1024 ** 3)).toFixed(2) + ' GB',
        },
        cpu: cpuUsage.map((cpu, index) => {
            const total = Object.values(cpu.times).reduce((acc, tv) => acc + tv, 0);
            const usage = ((total - cpu.times.idle) / total) * 100;
            return { core: index, usage: usage.toFixed(2) + '%' };
        })
    };
}