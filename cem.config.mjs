function hidePrivatesPlugin() {
  return {
    name: "hide-privates-plugin",
    packageLinkPhase({ customElementsManifest }) {
      customElementsManifest?.modules?.forEach((mod) => {
        mod?.declarations?.forEach((dec) => {
          if (dec.kind === "class" || dec.kind === "mixin") {
            // eslint-disable-next-line no-param-reassign
            dec.members = dec?.members
              ?.filter((i) => i?.privacy !== "protected")
              ?.filter((i) => i?.privacy !== "private");
          }
        });
      });
    },
  };
}

export default {
  globs: ["src/**/*.ts"],
  exclude: ["src/**/*.stories.ts", "src/**/*.styles.ts"],
  outdir: "./",
  dev: false,
  litelement: true,
  plugins: [hidePrivatesPlugin()],
};
