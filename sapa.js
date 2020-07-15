function getGreeting() {
    var curDateTime = new Date()
    var curHour = curDateTime.getHours()
    var greeting = "selamat malam"
    if (curHour < 12 && curHour >= 0)
        greeting = "selamat pagi"
    if (curHour >= 12 && curHour < 18)
        greeting = "selamat sore"
    return greeting
}