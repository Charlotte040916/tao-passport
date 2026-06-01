import { useEffect, useState } from 'react';
import type { TaoPassport } from '@tao-passport/shared-types';
import { passportApi } from '../services/api';

type PassportState = {
  data: TaoPassport | null;
  error: string | null;
  loading: boolean;
};

export function useSamplePassport(): PassportState {
  const [state, setState] = useState<PassportState>({ data: null, error: null, loading: true });

  useEffect(() => {
    passportApi
      .getSamplePassport()
      .then((data) => setState({ data, error: null, loading: false }))
      .catch((error: Error) => setState({ data: null, error: error.message, loading: false }));
  }, []);

  return state;
}
