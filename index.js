// writer code below!
function happyHolidays()  {
  return "Happy holidays!"
}

function happyHolidaysTo(name)  {
  var name1 = "everyone"
  var name2 = "you"
  return(`Happy holidays, ${name}!`)
  expect(`Happy holidays, ${name1}!`).toEqual("Happy holidays, everyone!")
  expect(`Happy holidays, ${name2}!`).toEqual("Happy holidays, you!")
}

function happyCustomHolidayTo(holiday, name)  {
  var holiday1 = "Independence Day"
  var holiday2 = "New Year"
  var name1 = "you"
  var name2 = "everyone"
  return(`Happy ${holiday}, ${name}!`)
  expect(`Happy ${holiday1}, ${name1}!`).toEqual("Happy Independence Day, you!")
  expect(`Happy ${holiday2}, ${name2}!`).toEqual("Happy New Year, everyone!")
}

function holidayCountdown(holiday, days)  {
  var holiday = "Mother's Day"
  var days = "20"
  return "It's 20 days until Mother's Day!"
}
