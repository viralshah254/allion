import axios from 'axios';

export interface Claim {
  id: string;
  customerName: string;
  date: string;
  status: string;
  amount: number;
}

// Fetch all claims
export const fetchClaims = () => axios.get<Claim[]>('/api/claims');
