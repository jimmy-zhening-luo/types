import Lint from "@jimbojet/lint";

export default [
  ...new Lint(
    {
      js: ["*.config.js"],
      ts: [
        // "*.config.ts",
        "src/**/*.ts",
        "types/**/*.d.ts",
      ],
      svelte: ["src/**/*.svelte"],
      json: ["package.json"],
      jsonc: ["tsconfig.json"],
      yml: [".github/workflows/*.yml"],
    },
  )
    .configs,
];
