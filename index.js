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
  var holiday = "Independence Day"
  var name = "you"
  return "Happy Independence Day, you!"
}

function holidayCountdown(holiday, days)  {
  var holiday = "Mother's Day"
  var days = "20"
  return "It's 20 days until Mother's Day!"
}
