import bcrypt from 'bcrypt'
let users={username:"Mounika", password:"Mounika@123",cc:"8475938457",cvv:"888"}
let salt=bcrypt.genSaltSync(10)
let new_cc=bcrypt.hashSync(users.cc,salt)
console.log(new_cc)
let new_p=bcrypt.hashSync(users.password,5)
console.log(new_p)
console.log(users.password)
//upadting the users with new crypted password and cc
users={...users,password:new_p,cc:new_cc}
console.log(users)
//cpmparing entered password and new_p
let flag=bcrypt.compareSync("Mounik@123",users.password)
if(flag){
    console.log("Same password")
}
else{
    console.log("incorrect password")
}