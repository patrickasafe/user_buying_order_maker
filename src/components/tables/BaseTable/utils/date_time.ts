type ZeroToFive = 0 | 1 | 2 | 3 | 4 | 5
type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
/**
 * Years
 */
type YYYY = `19${ZeroToNine}${ZeroToNine}` | `20${ZeroToNine}${ZeroToNine}`
/**
 * Months
 */
type MM = `0${OneToNine}` | `1${0 | 1 | 2}`
/**
 * Days
 */
type DD = `0${OneToNine}` | `${1 | 2}${ZeroToNine}` | `3${0 | 1}`
/**
* Hours
*/
type hh = `0${ZeroToNine}` | `1${ZeroToNine}` | `2${0 | 1 | 2 | 3}`
/**
 * Minutes
 */
type mm = `${ZeroToFive}${ZeroToNine}`
/**
 * Seconds
 */
type ss = mm
/**
 * Nanoseconds
 */
type uu = `${ZeroToNine}${ZeroToNine}${ZeroToNine}${ZeroToNine}${ZeroToNine}`
/**
 * YYYY-MM-DDThh:mm:ss:uuZ
 */
type RawDateString = `${YYYY}-${MM}-${DD}`;

type RawTimeString = `${hh}:${mm}:${ss}.${uu}`

export type RawDateTimeString = `${RawDateString}T${RawTimeString}Z`
