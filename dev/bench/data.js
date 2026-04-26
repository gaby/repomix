window.BENCHMARK_DATA = {
  "lastUpdate": 1777228273376,
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
          "id": "99535ffa925ae28e8529ba7da439c672b60fe728",
          "message": "Merge pull request #1390 from yamadashy/dependabot/npm_and_yarn/npm_and_yarn-d44e5332ed\n\nchore(deps): bump the npm_and_yarn group across 3 directories with 2 updates",
          "timestamp": "2026-04-04T21:00:38+09:00",
          "tree_id": "6b739110aa664f1f6b901ba50de51c00057054e0",
          "url": "https://github.com/gaby/repomix/commit/99535ffa925ae28e8529ba7da439c672b60fe728"
        },
        "date": 1775305786371,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1172,
            "range": "±70",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1145ms, Q3: 1215ms\nAll times: 1106, 1114, 1127, 1131, 1141, 1143, 1145, 1145, 1153, 1157, 1157, 1160, 1161, 1167, 1172, 1172, 1185, 1193, 1194, 1197, 1214, 1215, 1215, 1269, 1290, 1294, 1310, 1399, 1403, 1506ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1979,
            "range": "±24",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1969ms, Q3: 1993ms\nAll times: 1936, 1966, 1966, 1967, 1967, 1969, 1972, 1975, 1978, 1978, 1979, 1982, 1983, 1987, 1993, 1993, 2001, 2010, 2025, 2040ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2522,
            "range": "±57",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2497ms, Q3: 2554ms\nAll times: 2440, 2456, 2491, 2496, 2497, 2497, 2501, 2510, 2514, 2518, 2522, 2524, 2540, 2541, 2543, 2554, 2554, 2572, 2576, 2583ms"
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
          "id": "208f492ef967a0c683ffe627089c3baf5f279128",
          "message": "Merge pull request #1394 from yamadashy/chore/remove-tower-sponsorship\n\nchore(sponsors): remove Tower sponsorship",
          "timestamp": "2026-04-05T01:09:52+09:00",
          "tree_id": "66c0283cea5cc8168a718a10870c4f3691c2d678",
          "url": "https://github.com/gaby/repomix/commit/208f492ef967a0c683ffe627089c3baf5f279128"
        },
        "date": 1775327404149,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1206,
            "range": "±61",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1180ms, Q3: 1241ms\nAll times: 1123, 1145, 1145, 1148, 1151, 1156, 1173, 1180, 1180, 1183, 1184, 1189, 1198, 1202, 1202, 1206, 1208, 1209, 1210, 1212, 1230, 1238, 1241, 1256, 1268, 1273, 1274, 1286, 1289, 1300ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2015,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1995ms, Q3: 2024ms\nAll times: 1966, 1980, 1984, 1990, 1991, 1995, 2010, 2011, 2014, 2014, 2015, 2015, 2015, 2019, 2020, 2024, 2024, 2024, 2030, 2094ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2557,
            "range": "±42",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2526ms, Q3: 2568ms\nAll times: 2491, 2506, 2510, 2517, 2518, 2526, 2527, 2528, 2538, 2544, 2557, 2559, 2564, 2565, 2568, 2568, 2576, 2578, 2583, 2584ms"
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
          "id": "4acbbc07838d4dcae53b5975211b33ba6c3c17a3",
          "message": "Merge pull request #1400 from yamadashy/perf/eliminate-stat-syscall\n\nperf(core): Eliminate redundant stat() syscall in fileRead",
          "timestamp": "2026-04-05T15:05:20+09:00",
          "tree_id": "122c8bccd1417c1c0eb091821027577c4f26e387",
          "url": "https://github.com/gaby/repomix/commit/4acbbc07838d4dcae53b5975211b33ba6c3c17a3"
        },
        "date": 1775370610170,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1169,
            "range": "±45",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1145ms, Q3: 1190ms\nAll times: 1112, 1116, 1121, 1132, 1138, 1141, 1144, 1145, 1147, 1147, 1147, 1149, 1152, 1160, 1161, 1169, 1172, 1175, 1178, 1178, 1178, 1181, 1190, 1196, 1215, 1265, 1302, 1312, 1352, 1420ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2034,
            "range": "±27",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2028ms, Q3: 2055ms\nAll times: 1982, 1998, 2013, 2019, 2020, 2028, 2031, 2031, 2032, 2033, 2034, 2038, 2043, 2049, 2049, 2055, 2059, 2071, 2133, 2434ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2521,
            "range": "±278",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2462ms, Q3: 2740ms\nAll times: 2431, 2439, 2443, 2456, 2462, 2462, 2466, 2468, 2479, 2503, 2521, 2607, 2637, 2651, 2677, 2740, 2869, 2912, 2918, 3659ms"
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
          "id": "129cfbe9f587607e143de9f89f73226a5548f364",
          "message": "Merge pull request #1410 from yamadashy/perf/use-brotli-for-cache-compression\n\nperf(server): Switch cache compression from deflate to Brotli",
          "timestamp": "2026-04-06T02:16:48+09:00",
          "tree_id": "09b733d02acec7336e3f13eca2e60fea343ae642",
          "url": "https://github.com/gaby/repomix/commit/129cfbe9f587607e143de9f89f73226a5548f364"
        },
        "date": 1775413852954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1175,
            "range": "±66",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1145ms, Q3: 1211ms\nAll times: 1119, 1124, 1129, 1130, 1136, 1144, 1144, 1145, 1146, 1149, 1151, 1155, 1157, 1158, 1167, 1175, 1176, 1178, 1181, 1183, 1191, 1196, 1211, 1226, 1305, 1357, 1369, 1408, 1410, 1503ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1953,
            "range": "±50",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1931ms, Q3: 1981ms\nAll times: 1904, 1904, 1912, 1926, 1926, 1931, 1936, 1940, 1941, 1952, 1953, 1957, 1961, 1968, 1980, 1981, 1982, 1988, 1989, 1997ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2470,
            "range": "±44",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2451ms, Q3: 2495ms\nAll times: 2417, 2439, 2446, 2451, 2451, 2451, 2453, 2456, 2458, 2463, 2470, 2472, 2474, 2475, 2479, 2495, 2514, 2524, 2553, 2554ms"
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
          "id": "ffe67700293394d90da29ef7cccb118ea0dff280",
          "message": "Merge pull request #1411 from yamadashy/perf/batch-metrics-token-counting\n\nperf(metrics): Batch token counting IPC to reduce worker round-trip overhead",
          "timestamp": "2026-04-06T14:37:34+09:00",
          "tree_id": "a425ca19a17d6c4d64b9928e91587add0f6311f7",
          "url": "https://github.com/gaby/repomix/commit/ffe67700293394d90da29ef7cccb118ea0dff280"
        },
        "date": 1775457000490,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1155,
            "range": "±62",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1127ms, Q3: 1189ms\nAll times: 1094, 1102, 1105, 1112, 1112, 1120, 1122, 1127, 1132, 1132, 1133, 1135, 1139, 1148, 1149, 1155, 1158, 1172, 1173, 1179, 1180, 1181, 1189, 1238, 1247, 1251, 1281, 1286, 1328, 1347ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1862,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1849ms, Q3: 1884ms\nAll times: 1825, 1843, 1844, 1845, 1849, 1849, 1854, 1858, 1859, 1860, 1862, 1867, 1867, 1869, 1879, 1884, 1888, 1908, 1921, 1922ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2396,
            "range": "±72",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2359ms, Q3: 2431ms\nAll times: 2320, 2340, 2343, 2343, 2348, 2359, 2375, 2378, 2380, 2391, 2396, 2406, 2417, 2421, 2426, 2431, 2439, 2449, 2461, 2492ms"
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
          "id": "eca9ad78cdcb222c8e545b60953bbbc4930c231d",
          "message": "Merge pull request #1419 from yamadashy/chore/website-update-repomix-dep\n\nchore(website): Update repomix dependency to latest main",
          "timestamp": "2026-04-06T18:44:45+09:00",
          "tree_id": "93d21cb9f6190905ac9414a7c8422dbe0c0497fb",
          "url": "https://github.com/gaby/repomix/commit/eca9ad78cdcb222c8e545b60953bbbc4930c231d"
        },
        "date": 1775478648497,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1140,
            "range": "±36",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1123ms, Q3: 1159ms\nAll times: 1094, 1095, 1099, 1117, 1118, 1122, 1122, 1123, 1125, 1125, 1127, 1130, 1133, 1137, 1139, 1140, 1144, 1148, 1151, 1152, 1154, 1154, 1159, 1170, 1187, 1205, 1257, 1274, 1376, 1531ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1908,
            "range": "±58",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1896ms, Q3: 1954ms\nAll times: 1881, 1884, 1889, 1889, 1894, 1896, 1901, 1903, 1903, 1904, 1908, 1910, 1915, 1921, 1926, 1954, 1956, 2140, 2183, 2345ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2442,
            "range": "±231",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2311ms, Q3: 2542ms\nAll times: 2283, 2286, 2290, 2291, 2303, 2311, 2352, 2368, 2377, 2436, 2442, 2481, 2482, 2483, 2498, 2542, 2651, 2656, 2909, 3198ms"
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
          "id": "6a645d86637bab9cb670a7a297944039384000f5",
          "message": "Merge pull request #1425 from yamadashy/chore/improve-claude-md\n\nchore(agents): Improve CLAUDE.md clarity and conciseness",
          "timestamp": "2026-04-06T23:24:46+09:00",
          "tree_id": "bc3d4c5050625f199762755f04bc43ac27f3f858",
          "url": "https://github.com/gaby/repomix/commit/6a645d86637bab9cb670a7a297944039384000f5"
        },
        "date": 1775500331162,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 2083,
            "range": "±406",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1821ms, Q3: 2227ms\nAll times: 1684, 1689, 1716, 1746, 1751, 1778, 1794, 1821, 1950, 2012, 2025, 2035, 2065, 2071, 2079, 2083, 2105, 2108, 2115, 2158, 2174, 2187, 2227, 2241, 2276, 2330, 2375, 2395, 2409, 2557ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1882,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1873ms, Q3: 1894ms\nAll times: 1841, 1846, 1858, 1866, 1873, 1873, 1877, 1879, 1880, 1881, 1882, 1883, 1885, 1888, 1888, 1894, 1910, 1930, 1944, 1970ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2331,
            "range": "±37",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 2313ms, Q3: 2350ms\nAll times: 2298, 2301, 2307, 2311, 2313, 2315, 2323, 2330, 2330, 2331, 2334, 2341, 2344, 2345, 2350, 2350, 2361, 2386, 2434ms"
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
          "id": "eafa70a7ca875f6737a86349397d3233c2d9fa13",
          "message": "Merge pull request #1430 from yamadashy/dependabot/npm_and_yarn/npm_and_yarn-8578f1e909\n\nchore(deps): Bump the npm_and_yarn group across 3 directories with 3 updates",
          "timestamp": "2026-04-08T22:37:37+09:00",
          "tree_id": "3d87db94a20a0f2feff45bacc1f036810046d91c",
          "url": "https://github.com/gaby/repomix/commit/eafa70a7ca875f6737a86349397d3233c2d9fa13"
        },
        "date": 1775673066719,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1495,
            "range": "±316",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1284ms, Q3: 1600ms\nAll times: 1132, 1170, 1183, 1188, 1200, 1256, 1257, 1284, 1349, 1353, 1365, 1373, 1379, 1419, 1494, 1495, 1531, 1540, 1573, 1581, 1588, 1597, 1600, 1608, 1707, 1717, 1723, 1793, 1795, 1867ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1935,
            "range": "±51",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1908ms, Q3: 1959ms\nAll times: 1872, 1893, 1902, 1906, 1908, 1908, 1912, 1917, 1919, 1925, 1935, 1937, 1949, 1949, 1956, 1959, 2001, 2092, 2184, 2323ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2461,
            "range": "±55",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2436ms, Q3: 2491ms\nAll times: 2400, 2402, 2415, 2422, 2431, 2436, 2439, 2449, 2459, 2460, 2461, 2472, 2478, 2483, 2491, 2491, 2535, 2777, 2910, 3217ms"
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
          "id": "afbab35a6d9fee3ef9f99dc871d498d3d024716f",
          "message": "Merge pull request #1436 from yamadashy/perf/lazy-load-heavy-modules\n\nperf(core): Lazy-load handlebars, fast-xml-builder, and @clack/prompts",
          "timestamp": "2026-04-11T12:59:11+09:00",
          "tree_id": "e029b0add1a0b86d923d238fcf85c197932b73d7",
          "url": "https://github.com/gaby/repomix/commit/afbab35a6d9fee3ef9f99dc871d498d3d024716f"
        },
        "date": 1775889069543,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1274,
            "range": "±235",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1203ms, Q3: 1438ms\nAll times: 1117, 1159, 1163, 1183, 1194, 1197, 1201, 1203, 1216, 1216, 1220, 1233, 1233, 1239, 1251, 1274, 1275, 1320, 1368, 1392, 1403, 1408, 1438, 1440, 1460, 1540, 1709, 1716, 1805, 1880ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1781,
            "range": "±41",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1757ms, Q3: 1798ms\nAll times: 1735, 1743, 1743, 1752, 1756, 1757, 1770, 1772, 1774, 1774, 1781, 1787, 1793, 1795, 1798, 1798, 1803, 1816, 1827, 1849ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2421,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2405ms, Q3: 2430ms\nAll times: 2365, 2378, 2395, 2395, 2403, 2405, 2407, 2412, 2414, 2419, 2421, 2424, 2424, 2424, 2427, 2430, 2437, 2441, 2458, 2465ms"
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
          "id": "c05836ac8442587ce16dd21a5dd15d4848277052",
          "message": "Merge pull request #1455 from yamadashy/fix/codecov-badge-token\n\ndocs(readme): Fix Codecov badge token",
          "timestamp": "2026-04-11T19:46:51+09:00",
          "tree_id": "aa9e743ad7e9c905a1d1981714aeb535d54893e6",
          "url": "https://github.com/gaby/repomix/commit/c05836ac8442587ce16dd21a5dd15d4848277052"
        },
        "date": 1775910614681,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1134,
            "range": "±67",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1113ms, Q3: 1180ms\nAll times: 1073, 1076, 1077, 1089, 1097, 1099, 1106, 1113, 1116, 1117, 1117, 1119, 1120, 1122, 1130, 1134, 1137, 1146, 1152, 1154, 1164, 1167, 1180, 1183, 1191, 1198, 1216, 1241, 1284, 1501ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1797,
            "range": "±31",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1777ms, Q3: 1808ms\nAll times: 1734, 1759, 1760, 1771, 1775, 1777, 1784, 1787, 1792, 1795, 1797, 1797, 1800, 1806, 1808, 1808, 1825, 1826, 1827, 2006ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2322,
            "range": "±216",
            "unit": "ms",
            "extra": "Median of 18 runs\nQ1: 2244ms, Q3: 2460ms\nAll times: 2166, 2199, 2226, 2230, 2244, 2267, 2288, 2296, 2309, 2322, 2355, 2361, 2379, 2460, 2570, 2704, 2722, 2753ms"
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
          "id": "9b8a46fa135972fcf81eee7784e121fea21fa909",
          "message": "Merge pull request #1456 from yamadashy/perf/security-neutralize-profiler-via-perf-hooks\n\nperf(security): Patch perf_hooks.performance.mark to neutralize duplicate @secretlint/profiler singletons",
          "timestamp": "2026-04-12T14:32:33+09:00",
          "tree_id": "60517fe20d1566b026620d79c20c15600ec69698",
          "url": "https://github.com/gaby/repomix/commit/9b8a46fa135972fcf81eee7784e121fea21fa909"
        },
        "date": 1775996946477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1402,
            "range": "±187",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1351ms, Q3: 1538ms\nAll times: 1283, 1289, 1291, 1327, 1330, 1337, 1346, 1351, 1364, 1365, 1378, 1379, 1382, 1388, 1388, 1402, 1406, 1463, 1467, 1486, 1490, 1499, 1538, 1545, 1568, 1572, 1582, 1624, 1725, 2013ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1754,
            "range": "±46",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1730ms, Q3: 1776ms\nAll times: 1709, 1714, 1718, 1724, 1727, 1730, 1732, 1734, 1736, 1745, 1754, 1755, 1763, 1767, 1774, 1776, 1779, 1783, 1789, 1797ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2286,
            "range": "±43",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2259ms, Q3: 2302ms\nAll times: 2236, 2241, 2242, 2251, 2258, 2259, 2259, 2266, 2272, 2273, 2286, 2287, 2293, 2296, 2299, 2302, 2309, 2332, 2332, 2341ms"
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
          "id": "4c356f73251746c2cc3edcc68dbe19204aa1e950",
          "message": "Merge pull request #1457 from yamadashy/perf/fast-output-tokenization\n\nperf(core): Skip redundant full-output tokenization via wrapper-extraction fast path (-13.2%)",
          "timestamp": "2026-04-13T00:20:10+09:00",
          "tree_id": "905174e4806045dbff1efb20decd1259331b2189",
          "url": "https://github.com/gaby/repomix/commit/4c356f73251746c2cc3edcc68dbe19204aa1e950"
        },
        "date": 1776018642977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 913,
            "range": "±27",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 900ms, Q3: 927ms\nAll times: 881, 882, 888, 890, 892, 892, 897, 900, 902, 904, 904, 907, 908, 909, 911, 913, 914, 917, 918, 918, 925, 925, 927, 936, 941, 958, 960, 990, 1015, 1096ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1538,
            "range": "±87",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1527ms, Q3: 1614ms\nAll times: 1484, 1513, 1515, 1526, 1526, 1527, 1527, 1530, 1531, 1531, 1538, 1540, 1546, 1546, 1565, 1614, 1623, 1700, 1802, 1835ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2455,
            "range": "±361",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2195ms, Q3: 2556ms\nAll times: 1985, 1991, 1997, 2041, 2178, 2195, 2244, 2261, 2345, 2402, 2455, 2467, 2477, 2510, 2522, 2556, 2584, 2600, 2816, 3260ms"
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
          "id": "1c01d6951c6494ef226637bb83d5c70cd7e0716f",
          "message": "Merge pull request #1467 from yamadashy/perf/prefetch-sort-data\n\nperf(core): Prefetch git sort data to overlap with file search and collection",
          "timestamp": "2026-04-15T00:41:41+09:00",
          "tree_id": "cba49da97f353c479f12fcb5d8418cbefe43c759",
          "url": "https://github.com/gaby/repomix/commit/1c01d6951c6494ef226637bb83d5c70cd7e0716f"
        },
        "date": 1776191445934,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1514,
            "range": "±261",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1415ms, Q3: 1676ms\nAll times: 1281, 1325, 1377, 1383, 1396, 1397, 1398, 1415, 1432, 1454, 1464, 1475, 1478, 1495, 1500, 1514, 1516, 1547, 1577, 1590, 1595, 1638, 1676, 1765, 1771, 1772, 1844, 1857, 1929, 2297ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1478,
            "range": "±51",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1457ms, Q3: 1508ms\nAll times: 1437, 1441, 1441, 1442, 1454, 1457, 1462, 1466, 1473, 1475, 1478, 1486, 1488, 1491, 1496, 1508, 1515, 1546, 1547, 1560ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1951,
            "range": "±263",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1916ms, Q3: 2179ms\nAll times: 1879, 1888, 1888, 1902, 1916, 1916, 1916, 1923, 1930, 1930, 1951, 1953, 1989, 2006, 2167, 2179, 2458, 2569, 2598, 2876ms"
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
          "id": "c55528df3718b5adb0952da0a72efcb7772cc482",
          "message": "Merge pull request #1469 from yamadashy/perf/reduce-module-overhead\n\nperf(core): Remove redundant minimatch and parallelize wrapper tokenization",
          "timestamp": "2026-04-15T22:24:43+09:00",
          "tree_id": "435703feb2ba6845db791f74a54749dcaf047bb4",
          "url": "https://github.com/gaby/repomix/commit/c55528df3718b5adb0952da0a72efcb7772cc482"
        },
        "date": 1776277856146,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1207,
            "range": "±247",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1095ms, Q3: 1342ms\nAll times: 965, 1006, 1041, 1048, 1056, 1086, 1088, 1095, 1128, 1129, 1140, 1168, 1190, 1195, 1196, 1207, 1220, 1233, 1236, 1271, 1297, 1312, 1342, 1346, 1386, 1398, 1400, 1403, 1424, 1516ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1500,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1482ms, Q3: 1511ms\nAll times: 1461, 1461, 1467, 1480, 1482, 1482, 1483, 1484, 1486, 1499, 1500, 1503, 1504, 1507, 1509, 1511, 1512, 1513, 1518, 1519ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1892,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1879ms, Q3: 1904ms\nAll times: 1855, 1863, 1867, 1869, 1876, 1879, 1881, 1882, 1884, 1885, 1892, 1892, 1897, 1898, 1902, 1904, 1905, 1912, 1917, 1969ms"
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
          "id": "b8ef0ec8336415f77a9d181f36f90e5a237111a2",
          "message": "Merge pull request #1491 from yamadashy/renovate/major-scripts-major-dependencies\n\nchore(deps): update dependency typescript to v6",
          "timestamp": "2026-04-18T15:22:05+09:00",
          "tree_id": "b0c40b91473f246d5d6cb147195a5625c80f8952",
          "url": "https://github.com/gaby/repomix/commit/b8ef0ec8336415f77a9d181f36f90e5a237111a2"
        },
        "date": 1776493845462,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 891,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 877ms, Q3: 906ms\nAll times: 867, 869, 870, 871, 873, 873, 875, 877, 878, 880, 881, 882, 883, 884, 887, 891, 893, 894, 894, 899, 902, 906, 906, 918, 920, 922, 980, 1017, 1023, 1187ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1517,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1498ms, Q3: 1527ms\nAll times: 1474, 1477, 1489, 1490, 1491, 1498, 1499, 1501, 1512, 1513, 1517, 1519, 1522, 1524, 1525, 1527, 1535, 1536, 1545, 1573ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1937,
            "range": "±41",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1927ms, Q3: 1968ms\nAll times: 1917, 1919, 1920, 1923, 1924, 1927, 1927, 1929, 1932, 1933, 1937, 1942, 1950, 1950, 1959, 1968, 1969, 1979, 1981, 1981ms"
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
          "id": "f2de8219ecf8a2283b38883aeffc38da980a588f",
          "message": "Merge pull request #1493 from yamadashy/feat/observability-phase2\n\nfeat(server): Log pack options and validation reject reasons",
          "timestamp": "2026-04-18T23:17:47+09:00",
          "tree_id": "e643bd20dca6c1428c334812f554f5e42269ab71",
          "url": "https://github.com/gaby/repomix/commit/f2de8219ecf8a2283b38883aeffc38da980a588f"
        },
        "date": 1776537004228,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1485,
            "range": "±317",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1377ms, Q3: 1694ms\nAll times: 1165, 1182, 1227, 1234, 1257, 1298, 1315, 1377, 1378, 1380, 1391, 1406, 1425, 1429, 1461, 1485, 1501, 1502, 1601, 1611, 1648, 1673, 1694, 1804, 1816, 1858, 1858, 1890, 1918, 1933ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1535,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1523ms, Q3: 1558ms\nAll times: 1494, 1506, 1509, 1509, 1515, 1523, 1526, 1527, 1533, 1534, 1535, 1537, 1538, 1542, 1547, 1558, 1572, 1598, 1818, 1823ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2070,
            "range": "±59",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 2053ms, Q3: 2112ms\nAll times: 2028, 2032, 2039, 2047, 2053, 2054, 2054, 2055, 2064, 2070, 2077, 2078, 2092, 2109, 2112, 2123, 2129, 2139, 2139ms"
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
          "id": "9f6d0b5bdba0d8bea746d065cb28cff2b444b1ce",
          "message": "Merge pull request #1489 from yamadashy/perf/try-valibot\n\nperf(config): Migrate configSchema from zod to valibot (experimental)",
          "timestamp": "2026-04-19T10:39:01+09:00",
          "tree_id": "3bc3369dd07cdd1654ae8481861ab5069086eb5a",
          "url": "https://github.com/gaby/repomix/commit/9f6d0b5bdba0d8bea746d065cb28cff2b444b1ce"
        },
        "date": 1776580189081,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 906,
            "range": "±93",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 890ms, Q3: 983ms\nAll times: 866, 866, 875, 879, 880, 881, 882, 890, 893, 896, 900, 902, 902, 905, 906, 906, 922, 924, 931, 934, 956, 966, 983, 984, 985, 988, 996, 1021, 1021, 1066ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1377,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1359ms, Q3: 1382ms\nAll times: 1326, 1338, 1339, 1351, 1353, 1359, 1363, 1367, 1368, 1372, 1377, 1377, 1378, 1380, 1380, 1382, 1384, 1391, 1421, 1454ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1918,
            "range": "±47",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1907ms, Q3: 1954ms\nAll times: 1875, 1876, 1880, 1883, 1890, 1907, 1908, 1910, 1918, 1918, 1918, 1921, 1927, 1928, 1944, 1954, 1956, 1961, 2157, 2362ms"
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
          "id": "6dc0b0d446074771f9a1f1f7e2cffbac470dc137",
          "message": "Merge pull request #1497 from yamadashy/refactor/website-server-valibot\n\nrefactor(server): Migrate request validation from zod to valibot",
          "timestamp": "2026-04-19T22:46:59+09:00",
          "tree_id": "189208a3ecb34e596c518fe9bedd60c7d1f9305c",
          "url": "https://github.com/gaby/repomix/commit/6dc0b0d446074771f9a1f1f7e2cffbac470dc137"
        },
        "date": 1776623478424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 864,
            "range": "±36",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 850ms, Q3: 886ms\nAll times: 821, 823, 834, 838, 844, 846, 850, 850, 851, 853, 854, 854, 857, 862, 863, 864, 864, 864, 865, 866, 879, 881, 886, 909, 937, 938, 975, 987, 989, 1013ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1425,
            "range": "±22",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1414ms, Q3: 1436ms\nAll times: 1392, 1393, 1413, 1413, 1413, 1414, 1414, 1419, 1421, 1423, 1425, 1430, 1432, 1435, 1435, 1436, 1443, 1450, 1458, 1466ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1813,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1807ms, Q3: 1825ms\nAll times: 1799, 1799, 1801, 1803, 1805, 1807, 1812, 1812, 1812, 1813, 1813, 1814, 1819, 1819, 1820, 1825, 1830, 1833, 1850, 1852ms"
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
          "id": "99ea7d2de7a5730498cac249c70f520e485cd92a",
          "message": "Merge pull request #1505 from yamadashy/chore/temp-disable-website-auto-pack\n\nchore(website): Temporarily disable auto-pack on repo query param",
          "timestamp": "2026-04-24T00:44:21+09:00",
          "tree_id": "87a8740ca2718ea06aada55e42ae49584c201325",
          "url": "https://github.com/gaby/repomix/commit/99ea7d2de7a5730498cac249c70f520e485cd92a"
        },
        "date": 1776969039979,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 880,
            "range": "±53",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 866ms, Q3: 919ms\nAll times: 847, 851, 851, 859, 862, 864, 865, 866, 868, 868, 877, 878, 878, 879, 879, 880, 885, 885, 900, 903, 917, 918, 919, 933, 943, 974, 983, 985, 1015, 1119ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1376,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1362ms, Q3: 1383ms\nAll times: 1343, 1349, 1352, 1355, 1359, 1362, 1362, 1365, 1373, 1374, 1376, 1376, 1377, 1380, 1381, 1383, 1384, 1388, 1391, 1398ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1967,
            "range": "±44",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 1936ms, Q3: 1980ms\nAll times: 1906, 1906, 1928, 1934, 1936, 1942, 1948, 1951, 1958, 1967, 1971, 1972, 1975, 1977, 1980, 1982, 1987, 2045, 2209ms"
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
          "id": "3ea06cb1080fa18ad421b4886f7e5deba06998cb",
          "message": "Merge pull request #1513 from yamadashy/dependabot/npm_and_yarn/browser/npm_and_yarn-87d6b5a2fd\n\nchore(deps): Bump the npm_and_yarn group across 2 directories with 1 update",
          "timestamp": "2026-04-25T20:07:33+09:00",
          "tree_id": "d387086ba4496e01b616543a304cfa0fd133a83f",
          "url": "https://github.com/gaby/repomix/commit/3ea06cb1080fa18ad421b4886f7e5deba06998cb"
        },
        "date": 1777120244460,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 881,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 863ms, Q3: 891ms\nAll times: 847, 856, 858, 860, 861, 861, 863, 863, 867, 868, 874, 877, 879, 879, 881, 881, 883, 886, 886, 889, 890, 890, 891, 893, 894, 900, 906, 910, 931, 1000ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1488,
            "range": "±43",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1472ms, Q3: 1515ms\nAll times: 1451, 1458, 1458, 1461, 1470, 1472, 1482, 1483, 1483, 1487, 1488, 1491, 1496, 1501, 1511, 1515, 1526, 1536, 1537, 1558ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1981,
            "range": "±120",
            "unit": "ms",
            "extra": "Median of 18 runs\nQ1: 1936ms, Q3: 2056ms\nAll times: 1890, 1927, 1932, 1935, 1936, 1944, 1972, 1973, 1973, 1981, 1982, 1984, 1988, 2056, 2090, 2132, 2151, 2348ms"
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
          "id": "28b57679262ee6816d8f937dc87e70369e84ff44",
          "message": "Merge pull request #1516 from yamadashy/claude/sleepy-tesla-vUjfm\n\nperf(core): Automated performance tuning by Claude",
          "timestamp": "2026-04-26T18:41:58+09:00",
          "tree_id": "72fabf0e3792edffa560070757abd7c5378e9340",
          "url": "https://github.com/gaby/repomix/commit/28b57679262ee6816d8f937dc87e70369e84ff44"
        },
        "date": 1777206650845,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 856,
            "range": "±82",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 821ms, Q3: 903ms\nAll times: 791, 806, 806, 812, 815, 817, 821, 821, 829, 830, 832, 836, 837, 839, 842, 856, 859, 866, 875, 875, 880, 885, 903, 908, 917, 922, 926, 956, 1023, 1289ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1407,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1388ms, Q3: 1423ms\nAll times: 1343, 1359, 1362, 1370, 1382, 1388, 1396, 1402, 1402, 1407, 1407, 1412, 1413, 1419, 1419, 1423, 1423, 1437, 1440, 1464ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1862,
            "range": "±51",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1845ms, Q3: 1896ms\nAll times: 1832, 1841, 1841, 1841, 1844, 1845, 1851, 1851, 1854, 1860, 1862, 1875, 1877, 1881, 1889, 1896, 1899, 1924, 1926, 1947ms"
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
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "distinct": true,
          "id": "7dfd2b96657cc88ff60b8ec1fd88b467aa1f8aba",
          "message": "1.14.0",
          "timestamp": "2026-04-26T23:04:36+09:00",
          "tree_id": "32caaa33ce128e019313d6503d78fe49367f33c5",
          "url": "https://github.com/gaby/repomix/commit/7dfd2b96657cc88ff60b8ec1fd88b467aa1f8aba"
        },
        "date": 1777228273045,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1216,
            "range": "±190",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1164ms, Q3: 1354ms\nAll times: 938, 948, 1055, 1087, 1110, 1118, 1142, 1164, 1171, 1172, 1188, 1188, 1188, 1192, 1208, 1216, 1221, 1230, 1253, 1254, 1300, 1307, 1354, 1357, 1364, 1401, 1577, 1643, 1706, 1792ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1489,
            "range": "±46",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1460ms, Q3: 1506ms\nAll times: 1426, 1426, 1436, 1450, 1451, 1460, 1462, 1469, 1476, 1478, 1489, 1491, 1496, 1500, 1501, 1506, 1551, 1656, 1810, 1837ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1926,
            "range": "±320",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 1885ms, Q3: 2205ms\nAll times: 1851, 1855, 1861, 1866, 1885, 1895, 1895, 1899, 1925, 1926, 1926, 1926, 1928, 2162, 2205, 2226, 2242, 2253, 2332ms"
          }
        ]
      }
    ]
  }
}