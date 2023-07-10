function countMaxChoco(money, price)
{
    let wrap=3;
    
    if (money < price)
        return 0;
    let choc = parseInt(money / price, 10);
    choc = choc + parseInt((choc - 1) /(wrap - 1), 10);
    return choc;
}
let sol=countMaxChoco(4,1);
console.log(sol);
