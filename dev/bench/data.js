window.BENCHMARK_DATA = {
  "lastUpdate": 1774809071534,
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
      }
    ]
  }
}