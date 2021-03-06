export default function dateValidator(fromDate, toDate) {
  if (fromDate < toDate) {
    return true
  } else if (fromDate > toDate){
    return false
  }
}