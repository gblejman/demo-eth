export const getAccountPrivateKey = (networkName: string): string => {
  const key = `${networkName.toUpperCase()}_ACCOUNT_PRIVATE_KEY`;
  const privateKey = process.env[key];

  if (!privateKey) {
    throw new Error(
      `Missing account private key for network  ${networkName}: ${key} in .env`
    );
  }

  return privateKey;
};

export const getRpcUrl = (networkName: string): string => {
  const key = `${networkName.toUpperCase()}_RPC_URL`;
  const url = process.env[key];

  if (!url) {
    throw new Error(
      `Missing rpc  private url for network ${networkName}: ${key} in .env`
    );
  }

  return url;
};
