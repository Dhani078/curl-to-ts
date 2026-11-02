BENCHMARKS: curl-to-ts

Testing Environment:
- Platform: Node.js v20.12.0 LTS / Windows 10
- Processor: AMD Ryzen 5 3550H (4 Cores, 8 Threads)
- Memory: 24GB DDR4

1. Conversion Latency Comparison

Payload Complexity | curl-to-ts Latency | quicktype CLI Latency
--- | --- | ---
Small Payload (5 keys) | 12 ms | 320 ms
Medium Payload (50 keys, 3 levels) | 16 ms | 410 ms
Large Payload (500 keys, 8 levels) | 28 ms | 680 ms

2. Memory Consumption Comparison
- curl-to-ts: 18 MB RSS
- quicktype: 145 MB RSS

Conclusion:
curl-to-ts is 20x faster than general-purpose multi-language schema generators, producing instant results in terminal pipelines.
