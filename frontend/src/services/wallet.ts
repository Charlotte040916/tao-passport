export function shortenWallet(address: string): string {
  if (address.length <= 14) {
    return address;
  }

  return `${address.slice(0, 7)}...${address.slice(-6)}`;
}

export function isLikelySubstrateAddress(address: string): boolean {
  return /^[1-9A-HJ-NP-Za-km-z]{40,64}$/.test(address);
}
