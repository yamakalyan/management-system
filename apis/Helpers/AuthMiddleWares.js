const middleWareForManagementStaff = (role, tableName) => {
    
    if (role == "management" || role == "staff") {

        const staffCreationsAllowed = ['attendance', 'reportcards', 'halltickets']
        const managementCreationsAllowed = ['accounting', 'attendance', 'expanses',
            'events', 'notifications', 'reportcards', 'halltickets', "transactions"
        ]

        let checkingConditionsForInsert = []

        if (role == "management") {
            checkingConditionsForInsert = managementCreationsAllowed
        } else if (role == "staff") {
            checkingConditionsForInsert = staffCreationsAllowed
        }

        if (checkingConditionsForInsert.includes(tableName)) {
            const returnObjectAccess = {
                success: true,
                message: `${role} have access.`
            }
            return returnObjectAccess
        } else {
            const returnObjectAccess = {
                success: false,
                message: `${role} Dont have access in some cases.`
            }
            return returnObjectAccess
        }
    } else {
        const returnObjectAccess = {
            success: false,
            message: `NoAccess`
        }
        return returnObjectAccess
    }
}

const middleWareForStudent = (role, tableName) => {
    if (role == "student") {
        const returnObjectAccess = {
            success: true,
            message: `success`
        }
        return returnObjectAccess
    } else {
        const returnObjectAccess = {
            success: false,
            message: `NoAccess`
        }
        return returnObjectAccess
    }
}

module.exports = {
    middleWareForManagementStaff,
    middleWareForStudent
}