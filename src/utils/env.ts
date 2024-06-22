export const env = process.env.ENV;

if (!env) {
  console.error('Missing env!');
  process.exit(1);
}
