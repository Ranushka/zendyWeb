import useSWR, { mutate } from "swr";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    return res.json();
  });

export const setDiscountCode = async (couponCode: string) => {
  console.log(couponCode);

  if (!couponCode) {
    return mutate("/api/coupon/", "");
  }

  const url = `/api/coupon/${couponCode}`;
  const data = await fetcher(url);
  mutate("/api/coupon/", data);
};

const useDiscountCode = () => {
  return useSWR("/api/coupon/");
};

export default useDiscountCode;
