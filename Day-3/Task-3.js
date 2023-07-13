function change(obj){
  let check=new Set();
  Object.entries(obj).map((val)=>{
      let m=val[1].marks;
      if(check.has(m)){

          delete obj[val[0]]
      }
      else{
          check.add(m);
      }
  })
  
  return obj;
  
}

getObject={
0: {age: 18, name: 'john', marks: '400'},
1: {age: 17, name: 'julie', marks: '400'},
2: {age: 16, name: 'Robin', marks: '200'},
3: {age: 16, name: 'Bella', marks: '300'},
4: {age: 16, name: 'john', marks: '250'},
5: {age: 15, name: 'julie', marks: '250'}
}
const ans=change(getObject);
console.log(ans);
