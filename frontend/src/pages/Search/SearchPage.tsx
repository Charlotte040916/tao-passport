import { useState } from 'react';
import { isLikelySubstrateAddress } from '../../services/wallet';

export function SearchPage() {
  const [walletAddress, setWalletAddress] = useState('');
  const isValid = walletAddress.length === 0 || isLikelySubstrateAddress(walletAddress);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold text-white">Search Wallet Passport</h1>
      <p className="mt-3 text-slate-300">Enter a Substrate wallet address to resolve its TAO Passport profile.</p>
      <form className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <label className="text-sm font-medium text-slate-200" htmlFor="wallet">
          Wallet address
        </label>
        <input
          id="wallet"
          value={walletAddress}
          onChange={(event) => setWalletAddress(event.target.value.trim())}
          placeholder="5FAbc123..."
          className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-blue-400 focus:ring-2"
        />
        {!isValid && <p className="mt-3 text-sm text-amber-300">This does not look like a Substrate SS58 address.</p>}
        <button
          type="button"
          disabled={!walletAddress || !isValid}
          className="mt-5 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-700"
        >
          Resolve Passport
        </button>
      </form>
    </main>
  );
}
