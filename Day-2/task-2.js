function countMaxChoco(money, price)
{
    let wrap=3;
    
    if (money < price|| money<0)
        return "Invalid input";
    let choc = parseInt(money / price, 10);
    choc = choc + parseInt((choc - 1) /(wrap - 1), 10);
    return choc;
}
let sol=countMaxChoco(4,1);
console.log(sol);
