const database = require('./db')
const createProffy = require('./createProffy')

database.then(async(db) => {
    // INSERT DATA
    proffyValue = {
        name: "Bruno Costa",
        avatar: "https://avatars1.githubusercontent.com/u/64209277?s=460&v=4",
        whatsapp: "11999999999",
        bio: "Um gênio, um Einstein enjaulado"
    }

    classValue = {
        subject: 1,
        cost: "40"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // CONSULT THE DATAS

    // ALL THE PROFFYS
    const selectedAllProffys = await db.all("SELECT * FROM proffys");

    // CONSULT THE CLASSES OF A CERTAIN TEACHER AND RETURN THE TEACHER'S DATA TOGETHER

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    const selectClassesSchedules = await db.all(`
        SELECT classe_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300" 
    `)

})