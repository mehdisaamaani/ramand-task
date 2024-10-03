import React from "react";
import useConvertToPersianDate from "../../../hoc/useConvertToPersianDate";

interface IColumns {
  userId: number;
  id: number;
  title: string;
  body: string;
  randomTime: string;
  randomDate: string;
}

const Table = ({ columns }: { columns: IColumns[] }) => {
  const { toJalali } = useConvertToPersianDate();
  console.log("columns", columns);
  const daysOfWeek = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
  ];

  const nextSevenDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      day: daysOfWeek[date.getDay()],
      date: toJalali(date),
    };
  });

  const timeSlots = Array.from({ length: 10 }, (_, i) => `${i + 8}:00`);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-center text-gray-600">
              ساعت
            </th>
            {nextSevenDays.map(({ day, date }) => (
              <th
                key={day}
                className="py-2 px-4 border-b border-gray-200 text-left text-gray-600"
              >
                {`${day} ${date}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200 text-gray-800">
                {time}
              </td>
              {nextSevenDays.map(({ date }, colIndex) => (
                <td
                  key={`${rowIndex}-${colIndex}`}
                  className="py-2 px-4 border-b border-gray-200 text-gray-800"
                >
                  {columns
                    ?.filter(
                      (item) =>
                        toJalali(item.randomDate) === date &&
                        item.randomTime === time
                    )
                    .map((item) => (
                      <>
                        <div key={item.id}>{item.title}</div>
                        <div key={item.id}>{item.randomTime}</div>
                        <div key={item.id}>{toJalali(item.randomDate)}</div>
                      </>
                    ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
