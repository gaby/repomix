window.BENCHMARK_DATA = {
  "lastUpdate": 1775240949344,
  "repoUrl": "https://github.com/gaby/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "distinct": true,
          "id": "406194748f0acee935e832ea0bc9050d73c59af9",
          "message": "fix(ci): Fix git switch after orphan branch creation\n\ngit switch - fails after git switch --orphan because there is no\nprevious branch reference. Save the branch name explicitly instead.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-28T02:10:38+09:00",
          "tree_id": "3ebc767a4889903e9d95c98f1d48778691170d87",
          "url": "https://github.com/gaby/repomix/commit/406194748f0acee935e832ea0bc9050d73c59af9"
        },
        "date": 1774636294595,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 2228,
            "range": "±221",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2174ms, Q3: 2395ms\nAll times: 1980, 2064, 2068, 2101, 2120, 2174, 2193, 2199, 2212, 2219, 2228, 2258, 2342, 2355, 2368, 2395, 2455, 2494, 2810, 2851ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2894,
            "range": "±19",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 2882ms, Q3: 2901ms\nAll times: 2876, 2880, 2882, 2890, 2890, 2894, 2894, 2901, 2905, 2914ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3856,
            "range": "±85",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 3815ms, Q3: 3900ms\nAll times: 3791, 3815, 3815, 3833, 3837, 3856, 3889, 3900, 3916, 3929ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a801b60bcff81cd77e1f8efc431d9fc3460c5beb",
          "message": "Merge pull request #1303 from yamadashy/perf/lazy-load-minimatch\n\nperf(core): Optimize chunk merging and avoid redundant string split in grep tool",
          "timestamp": "2026-03-28T15:25:48+09:00",
          "tree_id": "27193e714780f9c03db88bfb560429b2f316edf4",
          "url": "https://github.com/gaby/repomix/commit/a801b60bcff81cd77e1f8efc431d9fc3460c5beb"
        },
        "date": 1774679452277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1618,
            "range": "±260",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1575ms, Q3: 1835ms\nAll times: 1541, 1546, 1552, 1562, 1562, 1575, 1583, 1584, 1589, 1597, 1618, 1659, 1701, 1723, 1736, 1835, 1836, 1907, 1943, 2007ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2931,
            "range": "±91",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 2895ms, Q3: 2986ms\nAll times: 2874, 2882, 2895, 2900, 2901, 2931, 2947, 2986, 3138, 3472ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe6da909573d27eb0d0634ef858fe8731a620404",
          "message": "Merge pull request #1346 from yamadashy/perf/lazy-load-parallelize-cache\n\nperf(core): Lazy-load CLI actions, parallelize pipeline, and cache security config",
          "timestamp": "2026-03-28T20:44:04+09:00",
          "tree_id": "d3c2c70dc6c21dbe55688e76fc340078ec287807",
          "url": "https://github.com/gaby/repomix/commit/fe6da909573d27eb0d0634ef858fe8731a620404"
        },
        "date": 1774701044711,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1706,
            "range": "±387",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1600ms, Q3: 1987ms\nAll times: 1554, 1558, 1583, 1596, 1597, 1600, 1607, 1614, 1659, 1699, 1706, 1804, 1850, 1887, 1973, 1987, 2002, 2013, 2161, 2262ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2657,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 2647ms, Q3: 2664ms\nAll times: 2640, 2643, 2647, 2649, 2652, 2657, 2663, 2664, 2666, 2678ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3199,
            "range": "±85",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 3175ms, Q3: 3260ms\nAll times: 3169, 3172, 3175, 3193, 3198, 3199, 3209, 3260, 3400, 3410ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e1fc1a4951a3c18780c94802159137797a61343",
          "message": "Merge pull request #1349 from yamadashy/fix/perf-benchmark-no-cancel\n\nfix(ci): Disable cancel-in-progress for perf benchmark",
          "timestamp": "2026-03-29T00:36:26+09:00",
          "tree_id": "d16f9e864be9c3f932098d3248103a25b820c5cf",
          "url": "https://github.com/gaby/repomix/commit/3e1fc1a4951a3c18780c94802159137797a61343"
        },
        "date": 1774722674394,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1489,
            "range": "±48",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1467ms, Q3: 1515ms\nAll times: 1436, 1442, 1450, 1451, 1454, 1456, 1459, 1467, 1470, 1473, 1481, 1485, 1487, 1487, 1488, 1489, 1495, 1505, 1507, 1511, 1511, 1512, 1515, 1522, 1537, 1538, 1544, 1592, 1787, 2183ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2781,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2766ms, Q3: 2796ms\nAll times: 2724, 2728, 2750, 2756, 2756, 2766, 2771, 2774, 2777, 2781, 2781, 2788, 2789, 2789, 2794, 2796, 2801, 2804, 2805, 2812ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3255,
            "range": "±59",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 3227ms, Q3: 3286ms\nAll times: 3176, 3210, 3218, 3218, 3220, 3227, 3232, 3237, 3239, 3254, 3255, 3256, 3260, 3266, 3267, 3286, 3291, 3325, 3328, 3424ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b21a85f69810745c34f2e88ff8e58b6dc86936b6",
          "message": "Merge pull request #1351 from yamadashy/chore/allow-deepwiki-mcp-firewall\n\nchore(devcontainer): Add mcp.deepwiki.com to firewall allowed domains",
          "timestamp": "2026-03-29T11:44:16+09:00",
          "tree_id": "09a10512938d41bd05d34215b06602419b3a9dad",
          "url": "https://github.com/gaby/repomix/commit/b21a85f69810745c34f2e88ff8e58b6dc86936b6"
        },
        "date": 1774765828714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 2588,
            "range": "±459",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 2342ms, Q3: 2801ms\nAll times: 1893, 2111, 2186, 2281, 2297, 2306, 2307, 2342, 2364, 2410, 2421, 2503, 2508, 2542, 2561, 2588, 2600, 2603, 2615, 2641, 2647, 2652, 2801, 2904, 2918, 3163, 3269, 3572, 3667, 3732ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2705,
            "range": "±26",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2687ms, Q3: 2713ms\nAll times: 2669, 2680, 2682, 2685, 2685, 2687, 2690, 2691, 2695, 2701, 2705, 2706, 2707, 2712, 2713, 2713, 2724, 2724, 2730, 2760ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3165,
            "range": "±20",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 3158ms, Q3: 3178ms\nAll times: 3144, 3151, 3152, 3154, 3155, 3158, 3158, 3161, 3161, 3162, 3165, 3169, 3171, 3171, 3172, 3178, 3184, 3189, 3191, 3193ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81fc9ebd9e094c97882a893f766e898c70dc3b2d",
          "message": "Merge pull request #1354 from yamadashy/chore/pr-resolve-outdated-auto-reply\n\nchore(agents): Skip confirmation and auto-reply on pr-resolve-outdated",
          "timestamp": "2026-03-29T23:08:07+09:00",
          "tree_id": "887b25858afed1fd09c61ab878862e899fe6a885",
          "url": "https://github.com/gaby/repomix/commit/81fc9ebd9e094c97882a893f766e898c70dc3b2d"
        },
        "date": 1774809071099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1417,
            "range": "±89",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1377ms, Q3: 1466ms\nAll times: 1345, 1347, 1350, 1366, 1370, 1374, 1376, 1377, 1387, 1391, 1394, 1402, 1407, 1411, 1414, 1417, 1418, 1424, 1444, 1455, 1460, 1462, 1466, 1497, 1530, 1552, 1594, 1644, 1732, 1762ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2317,
            "range": "±19",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2310ms, Q3: 2329ms\nAll times: 2297, 2300, 2302, 2308, 2308, 2310, 2312, 2314, 2316, 2316, 2317, 2317, 2320, 2323, 2328, 2329, 2335, 2342, 2355, 2368ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3280,
            "range": "±154",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 3224ms, Q3: 3378ms\nAll times: 3165, 3171, 3204, 3208, 3224, 3226, 3238, 3242, 3263, 3280, 3307, 3319, 3364, 3364, 3378, 3414, 3948, 4093, 4121ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3b365232a25c8d8b33e5895107f9a990b632fbc",
          "message": "Merge pull request #1363 from yamadashy/claude/fix-bun-tests-Oj7mE",
          "timestamp": "2026-03-31T20:55:03+09:00",
          "tree_id": "bd3bfbb5764d6326f5c653410fe0df1c5dccfd6f",
          "url": "https://github.com/gaby/repomix/commit/e3b365232a25c8d8b33e5895107f9a990b632fbc"
        },
        "date": 1774960288607,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1454,
            "range": "±142",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1396ms, Q3: 1538ms\nAll times: 1350, 1352, 1366, 1370, 1383, 1384, 1384, 1396, 1397, 1398, 1414, 1415, 1419, 1429, 1447, 1454, 1471, 1479, 1480, 1488, 1494, 1507, 1538, 1543, 1561, 1565, 1569, 1595, 1649, 1780ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2500,
            "range": "±33",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2485ms, Q3: 2518ms\nAll times: 2467, 2473, 2475, 2480, 2481, 2485, 2487, 2493, 2496, 2498, 2500, 2502, 2508, 2511, 2515, 2518, 2520, 2524, 2539, 2551ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2925,
            "range": "±233",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2902ms, Q3: 3135ms\nAll times: 2845, 2870, 2885, 2897, 2897, 2902, 2909, 2914, 2919, 2920, 2925, 2954, 2975, 3016, 3019, 3135, 3162, 3300, 3569, 3794ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8f24b75550514c8c95d60fd2932a92b142f3bd3",
          "message": "Merge pull request #1359 from yamadashy/perf/overlap-security-processing-metrics\n\nperf(core): Overlap security check, file processing, and metrics with output generation",
          "timestamp": "2026-03-31T23:37:19+09:00",
          "tree_id": "d51c32ae3bb051cbab5da166b1ed2753ca9b7f8c",
          "url": "https://github.com/gaby/repomix/commit/c8f24b75550514c8c95d60fd2932a92b142f3bd3"
        },
        "date": 1774981874041,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 2111,
            "range": "±816",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1740ms, Q3: 2556ms\nAll times: 1433, 1445, 1507, 1643, 1644, 1654, 1682, 1740, 1865, 1908, 1934, 1981, 1985, 2062, 2108, 2111, 2120, 2217, 2224, 2232, 2342, 2517, 2556, 2574, 2610, 2923, 2953, 3073, 3413, 3607ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2281,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2267ms, Q3: 2302ms\nAll times: 2254, 2259, 2261, 2266, 2267, 2267, 2272, 2276, 2277, 2279, 2281, 2282, 2285, 2286, 2294, 2302, 2303, 2303, 2304, 2304ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2824,
            "range": "±112",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2813ms, Q3: 2925ms\nAll times: 2787, 2790, 2800, 2806, 2808, 2813, 2815, 2820, 2822, 2822, 2824, 2826, 2826, 2837, 2883, 2925, 2930, 2932, 2946, 2957ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "729427f6ef4ed156877aac555dabde5ea0e02f5a",
          "message": "Merge pull request #1371 from yamadashy/dependabot/npm_and_yarn/npm_and_yarn-282a1442c2",
          "timestamp": "2026-04-01T20:35:20+09:00",
          "tree_id": "fc13a2683bc1565859520dd7b6a5a0e9c45db418",
          "url": "https://github.com/gaby/repomix/commit/729427f6ef4ed156877aac555dabde5ea0e02f5a"
        },
        "date": 1775046717853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 2580,
            "range": "±476",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 2384ms, Q3: 2860ms\nAll times: 2177, 2184, 2197, 2217, 2233, 2328, 2364, 2384, 2402, 2412, 2423, 2479, 2517, 2541, 2577, 2580, 2694, 2714, 2812, 2828, 2851, 2858, 2860, 2939, 2981, 3028, 3041, 3113, 3281, 3333ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2293,
            "range": "±24",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2277ms, Q3: 2301ms\nAll times: 2274, 2275, 2275, 2275, 2276, 2277, 2278, 2289, 2292, 2293, 2293, 2295, 2298, 2299, 2300, 2301, 2302, 2304, 2308, 2309ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2858,
            "range": "±86",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2820ms, Q3: 2906ms\nAll times: 2779, 2807, 2813, 2814, 2816, 2820, 2821, 2833, 2836, 2848, 2858, 2860, 2861, 2861, 2863, 2906, 2914, 2924, 2925, 2932ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d6e224a94df25c1bd06b23455296a70561266d8",
          "message": "Merge pull request #1356 from yamadashy/perf/cache-empty-dir-paths\n\nperf(core): Cache empty directory paths to avoid redundant file search",
          "timestamp": "2026-04-02T00:26:39+09:00",
          "tree_id": "9f39d41e3bdcf3870204b7a48ffc12e284484cde",
          "url": "https://github.com/gaby/repomix/commit/9d6e224a94df25c1bd06b23455296a70561266d8"
        },
        "date": 1775068254641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1843,
            "range": "±181",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1746ms, Q3: 1927ms\nAll times: 1433, 1475, 1498, 1554, 1644, 1666, 1705, 1746, 1753, 1754, 1783, 1808, 1808, 1811, 1830, 1843, 1854, 1856, 1860, 1861, 1871, 1893, 1927, 2031, 2143, 2176, 2183, 2186, 2228, 2278ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2226,
            "range": "±32",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2213ms, Q3: 2245ms\nAll times: 2185, 2197, 2204, 2208, 2211, 2213, 2213, 2214, 2218, 2223, 2226, 2228, 2232, 2234, 2238, 2245, 2252, 2262, 2263, 2418ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2643,
            "range": "±42",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2633ms, Q3: 2675ms\nAll times: 2603, 2613, 2623, 2625, 2625, 2633, 2633, 2638, 2640, 2642, 2643, 2653, 2654, 2658, 2668, 2675, 2684, 2685, 2727, 2740ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7a8979ca1fb344026ee22065279afe86c14125b",
          "message": "Merge pull request #1375 from yamadashy/perf/use-codeload-github-direct\n\nperf(git): Use codeload.github.com directly to skip 302 redirect",
          "timestamp": "2026-04-03T14:52:11+09:00",
          "tree_id": "f39c7776d27dd096dee674ac39f31238bb7265dc",
          "url": "https://github.com/gaby/repomix/commit/d7a8979ca1fb344026ee22065279afe86c14125b"
        },
        "date": 1775197850811,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1194,
            "range": "±102",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1153ms, Q3: 1255ms\nAll times: 1126, 1142, 1148, 1150, 1151, 1151, 1152, 1153, 1165, 1169, 1172, 1173, 1174, 1183, 1190, 1194, 1198, 1204, 1207, 1228, 1238, 1248, 1255, 1290, 1315, 1316, 1323, 1329, 1405, 1416ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2024,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2004ms, Q3: 2032ms\nAll times: 1981, 1988, 1988, 2000, 2000, 2004, 2008, 2016, 2019, 2020, 2024, 2025, 2026, 2029, 2029, 2032, 2037, 2041, 2045, 2049ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3061,
            "range": "±60",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 3042ms, Q3: 3102ms\nAll times: 2990, 3017, 3019, 3027, 3030, 3042, 3044, 3049, 3052, 3057, 3061, 3062, 3062, 3071, 3092, 3102, 3103, 3121, 3132, 3193ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a16edefa163b84f007671ca64330a0f66757b63",
          "message": "Merge pull request #1380 from yamadashy/perf/batch-security-check-tasks\n\nperf(security): Batch security check tasks to reduce IPC overhead",
          "timestamp": "2026-04-04T00:56:53+09:00",
          "tree_id": "8f7ec3a0e4c7089a5894a97423abada05fca30a3",
          "url": "https://github.com/gaby/repomix/commit/2a16edefa163b84f007671ca64330a0f66757b63"
        },
        "date": 1775240948372,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1145,
            "range": "±85",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1111ms, Q3: 1196ms\nAll times: 1071, 1097, 1099, 1105, 1106, 1107, 1108, 1111, 1121, 1121, 1130, 1131, 1134, 1137, 1139, 1145, 1146, 1146, 1159, 1170, 1171, 1174, 1196, 1201, 1207, 1221, 1239, 1245, 1272, 1296ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1881,
            "range": "±19",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1874ms, Q3: 1893ms\nAll times: 1856, 1856, 1864, 1867, 1870, 1874, 1876, 1879, 1879, 1881, 1881, 1886, 1888, 1889, 1891, 1893, 1898, 1900, 1911, 1921ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2453,
            "range": "±46",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2432ms, Q3: 2478ms\nAll times: 2401, 2410, 2422, 2424, 2430, 2432, 2435, 2443, 2450, 2453, 2453, 2454, 2455, 2456, 2461, 2478, 2487, 2502, 2590, 2743ms"
          }
        ]
      }
    ]
  }
}