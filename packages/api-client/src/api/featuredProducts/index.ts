// ,params
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-unused-vars
export async function getFeaturedProduct(context, params) {
  // Create URL object containing full endpoint URL
  const url = new URL('/catalogue/product/', context.config.api.url);

  // Use axios to send a GET request
  const { data } = await context.client.get(url.href);
  // Return data from the API
  return data;
}
