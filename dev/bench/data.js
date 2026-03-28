window.BENCHMARK_DATA = {
  "lastUpdate": 1774701045014,
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
      }
    ]
  }
}