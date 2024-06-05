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
      html: ["src/**/*.html"],
      jsonc: ["tsconfig.json"],
      json: ["package.json"],
      yml: [".github/workflows/*.yml"],
    },
  )
    .configs,
];
