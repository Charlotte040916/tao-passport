export function scoreColor(score: number): string {
  if (score >= 90) {
    return 'text-emerald-300';
  }

  if (score >= 70) {
    return 'text-blue-300';
  }

  return 'text-amber-300';
}
