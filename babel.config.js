{
  return {
    presets: ["module:metro-react-native-babel-preset"],
    puglins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@styles": "./src/styles",
            "@utils": "./src/utils",
            "@hooks": "./src/hooks",
            "@services": "./src/services",
            "@routes": "./src/routes",
            "@storage": "./src/storage",
            "@theme": "./src/theme",
          },
        },
      ],
    ],
  }
}
