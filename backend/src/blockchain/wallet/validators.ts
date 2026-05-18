export function isSubstrateAddress(address: string): boolean {
  return /^[1-9A-HJ-NP-Za-km-z]{40,64}$/.test(address);
}
