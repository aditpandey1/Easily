export const jobs= [
    
    {  
        "id":1,
        "name":"Coding Ninjas",
        "category":"Tech",
        "job":"SDE",
        "location":"Gurgaon HR IND Remote",
        "salary": "6-10",
        "positions":2 ,
        "skills":["REACT","NodeJs","JS","SQL","MangoDB","Express"],
        "date":"2023-12-21",
        "applicants":0,
    },
    {
        "id":2,
        "name":"Go Digit",
        "category":"Tech",
        "job":"Angular Developer",
        "location":"Pune IND On-Site",
        "salary": "6-10",
        "positions":2 ,
        "skills":["Angular","JS","SQL","MangoDB","Express"],
        "date":"2023-12-21",
        "applicants":0,
    },
    {
        "id":3,
        "name":"Juspay",
        "category":"Tech",
        "job":"SDE",
        "location":"Bangalore IND",
        "salary": "20-26",
        "positions":2 ,
        "skills":["REACT","NodeJs","JS","SQL","MangoDB","Express"],
        "date":"2023-12-21",
        "applicants":0,
    },
]
const users = [];
export const registerUser = (user) => {
    users.push(user);
    return users;
};
export const authenticateUser = (reqUser) => {
    // const res = users.find((u) => {
    //   return u.email === reqUser.email && u.password === reqUser.password;
    // });
    const res = users.find(user => user.email === reqUser.email && user.password === reqUser.password);
    return res;
}
export const add = (data) =>{
    data.id=jobs.length+1;
    data.applicants=0;
    jobs.push(data);
    return jobs;
}
