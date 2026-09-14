type Product = {
    name: string;
    price: number;
    inStock: boolean;
};

const products: Product[] = [
    { name: "Keyboard", price: 80, inStock: true },
    { name: "Mouse", price: 35, inStock: false },
    { name: "Monitor", price: 250, inStock: true }
];

function totalPrice(product:Product[]):number{
    const filteredProduct =product.filter(prod=>prod.inStock===true)
    const totalPrice =filteredProduct.reduce((tot,pr)=>(tot+pr.price),0)
    return totalPrice
}
function getProducts(product:Product[]):string[]
{
    let products:string[]=[]
    for(let i=0; i<product.length; i++)
    {
        products.push(product[i].name)
    }
    return products

}

function getLowProductName(product:Product[]):string[]
{
    const lowStock:string[]=[]
    const lowproduct=product.filter(prod=>prod.inStock===false)

   for(let i=0 ; i<lowproduct.length; i++)
   {
    if(lowproduct.length>0)
    {
        lowStock.push(lowproduct[i].name)
    }
   }
   return lowStock

}
function countExpensiveInStockProducts(products: Product[]): number {
    const highCostProducts =products.filter(pr=>pr.price>100 && pr.inStock===true)
    let count =highCostProducts.length
    return count
}

type InventoryReport = {
    inStockCount: number;
    outOfStockCount: number;
    totalInStockValue: number;
    mostExpensiveInStockProduct: string;
};
function createInventoryReport(products: Product[]): InventoryReport {
     const inStockProducts =products.filter(pr=>pr.inStock===true)
     const inStockCount=inStockProducts.length
     const outOfStockCount=products.length-inStockProducts.length
     const totalInStockValue=inStockProducts.reduce((tot, pr)=>(tot+pr.price),0 )
     const sortedProducts =inStockProducts.sort((a,b)=>b.price-a.price)
     let mostExpensiveInStockProduct=""
     if(sortedProducts.length>0)
     {
      mostExpensiveInStockProduct=sortedProducts[0].name
     }
     else
     {
        mostExpensiveInStockProduct="none"
     }
     return {
        inStockCount,
        outOfStockCount,
        totalInStockValue,
        mostExpensiveInStockProduct
     }

}