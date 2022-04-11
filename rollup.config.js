import copy from "rollup-plugin-copy";

export default [
  {
    input: ['./src/tailwindConfig.js'],
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: false,
    },
    plugins: [
      copy({
        targets: [
          { src: 'src/styles/idsk3_theme.css', dest: 'dist/styles' },
          { src: 'src/assets', dest: 'dist/assets' },
        ]
      })
    ],
  },
];
