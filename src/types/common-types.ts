export type Employee={
    DisplayName:string,
    UserName:string,
    Password:string,
    PhoneNumber:string,
    EmployeeTypeId:number
}
export type EmployeeWithCount={
    EmployeeData:Employee,
    Count:number
}

export type ClientSessionObject={
    EmployeeId:string,
    DisplayName:string,
    IsAdmin:boolean
}