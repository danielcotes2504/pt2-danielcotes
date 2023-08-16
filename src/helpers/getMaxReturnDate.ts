import { DateTime } from "luxon";

export const getMaxReturnDate = (userType: number): string => {
  const today = DateTime.now();
  const userTypeDays = [10, 8, 7];

  let finalDate = today.plus({ days: userTypeDays[userType - 1] });

  while (finalDate.weekday === 6 || finalDate.weekday === 7) {
    finalDate = finalDate.plus({ days: 1 });
  }

  return finalDate.toSQL() as string;
};
