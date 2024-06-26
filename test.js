let i = Math.floor(Math.random() * 30);
let values = []
while(i > 0 || i < 30){
    if(!values.includes(i)){
        values.push(i);
        console.log(values.sort())
    }
    i = Math.floor(Math.random() * 20);
}


