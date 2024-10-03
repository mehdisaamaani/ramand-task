import React, { useCallback } from "react";

const useConvertToPersianDate = () => {
  const toJalali = useCallback((date: any) => {
    const gregorianDate = new Date(date);
    const jalaliDate = new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(gregorianDate);
    return jalaliDate.replace(/[۰-۹]/g, (d) =>
      "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()
    );
  }, []);

  return { toJalali };
};

export default useConvertToPersianDate;
