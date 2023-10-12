const BCV_URL = 'https://api.exchangedyn.com/markets/quotes/usdves/bcv';

type GetBcvUsdReturn = {
  bcvUsd: Ref<number>;
  error: Ref<any>;
  pending: Ref<boolean>;
  amountRate: Ref<number>;
};

export default async function useGetBcvUsd(
  amount: number
): Promise<GetBcvUsdReturn> {
  const { data, error, pending } = await useFetch<BcvUsdResponse>(BCV_URL);
  const bcvUsd = useState('mountBcvUsd', () =>
    parseFloat(data.value!.sources!.BCV.quote.substring(0, 5))
  );
  const amountRate = useState('amountRate', () => bcvUsd.value * amount);

  return {
    bcvUsd,
    error,
    pending,
    amountRate,
  };
}
