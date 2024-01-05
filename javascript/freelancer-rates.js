const HOURS_IN_WORKDAY = 8
const BILLABLE_DAYS_PER_MONTH = 22
export function dayRate(ratePerHour) {
  return ratePerHour * HOURS_IN_WORKDAY
}
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour))
}
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const monthsWorked = Math.floor(numDays / BILLABLE_DAYS_PER_MONTH)
  const monthsWorkedAsDays = monthsWorked * BILLABLE_DAYS_PER_MONTH
  const discountedMonthsPrice = monthsWorkedAsDays * (1 - discount) * dayRate(ratePerHour)
  const surplusDays = numDays % BILLABLE_DAYS_PER_MONTH
  const surplusDaysCost = surplusDays * dayRate(ratePerHour)
  return Math.ceil(discountedMonthsPrice + surplusDaysCost)
}
