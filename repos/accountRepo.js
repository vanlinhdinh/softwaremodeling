var db = require('../fn/db');
exports.loadUser = (userID) => {
    var sql = `select * from user where ID = ${userID}`;
    return db.load(sql);
}
exports.login = user => {
    var sql = `select * from user where f_Username = '${user.username}' and f_Password = '${user.password}'`;
    return db.load(sql);
}
exports.isUserExsits = username => {
    var sql = `select * from user where f_Username = '${username}' `;
    return db.load(sql);
}
exports.add = user => {
    var sql = `insert into user(f_Username, f_Password, FullName,Address, DoB, Email) 
    values('${user.username}', '${user.password}','${user.fullname}','${user.address}','${user.dob}', '${user.email}')`;
    return db.save(sql);
}

exports.edit = (user) => {
    var sql = `update user set FullName = '${user.fullname}',Address = '${user.address}', DoB = '${user.dob}', Email = '${user.email}' 
    where ID = ${user.id}`;
    return db.save(sql);
}

exports.loadAll = () =>{
    var sql = `select * from user`;
    return db.load(sql);
}

exports.delete = (userID) =>{
    var sql = `update user set Status = 0 where ID = ${userID}`;
    return db.save(sql);
}

exports.AdminEdit = (user) =>{
    var sql = `update user set f_Username = '${user.username}', f_Password = '${user.password}',
     FullName = '${user.fullname}',Address = '${user.address}', DoB = '${user.dob}', 
     Email = '${user.email}' ,PhoneNumber = '${user.phone}',Role = '${user.role}'
    where ID = ${user.id}`;
    return db.save(sql);
}