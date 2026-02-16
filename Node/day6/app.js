// const fetchData=new Promise((resolve,reject)=>{
//     const success=true;
//     if(success){
//         resolve("Data Fetched");
//         console.log("data fetched,");
//     }else{
//         console.log("data rejeted-Data not found,");
//         reject("Data----not ----Found");
//     }
// });

// fetchData.catch((err)=>{
//     console.log(err);
// })

// fetchData.then((succ)=>{
//     console.log(succ);
// })

// const login=()=>{
//     return Promise.resolve("Login Success");
// }
// const getUser=()=>{
//     return Promise.resolve("User name not found");
// }

// login().then((err,resp)=>{
//     if(err){
//         console.log(err);
//     }
//     getUser().then((err,succ)=>{
//         console.log();
//     })
// })


//chaining

// login()
//     .then(getUser)
//     .then(getUser)
//     .then(console.log)
//     .then(getUser)
//     .catch((err)=>console.log(err));

// Promise.resolve(10)
//     .then((x)=>{
//         return x+20;
//     })
//     .then(console.log);

// //ASync await -->simple arroe functions
// const example=async()=>{
//     console.log("'Started'");
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((resp)=> resp.json())
//         .then((json)=> console.log(json));
//     console.log("Ended");
// };

// console.log("'Started' -------1");
// example();
// console.log("'Started' -------2");

//Sequential execution Parallel execution

// const sample=async()=>{
//     //Parallel execution
//     console.log("'Started'");
//     const a=await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((resp)=> resp.json())
//         .then((json)=> console.log(json));
//      const b=await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((resp)=> resp.json())
//         .then((json)=> console.log(json));
//     console.log("Ended");
//     console.log(a);
//     console.log(b);
// };


const sample2=async()=>{
    //Parallel execution
    //value return is one time access so store it 
    console.log("'Started'");
    const func1=fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((resp)=> resp.json())
        // .then((json)=> console.log(json));
     const func2=fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((resp)=> resp.json())
        // .then((json)=> console.log(json));

    const a=await func1;
    const b=await func2;
    console.log("Ended");
    console.log(a);
    console.log(b);
};

console.log("'Started' -------1");
sample2();
console.log("'Started' -------2");


