module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          utils: './src/utils',
          screens: './src/screens',
          navigation: './src/navigation',
          hooks: './src/hooks',
          components: './src/components',
          assets: './src/assets',
          constants: './src/constants',
          configs: './src/configs',
          types: './src/types',
          reduxs: './src/reduxs',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
