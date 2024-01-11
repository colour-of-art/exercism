// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let count = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
    count += birdsPerDay[i]
  }
  return count
}
const DAYS_IN_WEEK = 7
/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let count = 0
  const startDate = (week-1) * DAYS_IN_WEEK
  for (let i = startDate; i < startDate + DAYS_IN_WEEK; i++) {
    count += birdsPerDay[i]
  }
  return count
}
/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 == 0) {
      birdsPerDay[i]++
    }
  }
  return birdsPerDay
}
Analysis
Tests
Options for iteration 2

No auto suggestions? Try human mentoring.
Get real 1-to-1 human mentoring on the Bird Watcher exercise and start writing better JavaScript.

Get mentoring
