import { format } from "date-fns";

export const formatDate = (isoDate: string | null | undefined): string => {
  const defaultDate = "Could Not Parse Date";

  if(isoDate === null || isoDate === undefined){
    return defaultDate;
  }

  const date = new Date(isoDate);

  try {
    return format(date, "yyyy-MM-dd HH:mm:ss");
  } catch(e) {
    console.error(e);
    return defaultDate;
  }
};