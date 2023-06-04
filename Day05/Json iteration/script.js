const json=[{
    "name":"Raksath",
    "age":"20",
    "Id":"1",
    "email":"raksath@gmail.com"
},
]

//for loop
for(let i=0;i<json.length;i++){
    console.log(json[i])
}

//for in
for(let i in json){
    console.log(json[i])
}

//for of
for(let i of Object.keys(json)){
    console.log(json[i])
}

//for each
Object.keys(json).forEach(key =>{
    console.log(json[key])
})
