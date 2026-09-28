const monthYearFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export const formatMonthYear = (value: Temporal.PlainYearMonth): string =>
  monthYearFormat.format(value.toPlainDate({ day: 1 }));
