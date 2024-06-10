import './vat.css';
export default function Vat({productPrice, show}) {


    console.log(productPrice)
    const vat = productPrice/ 100 * 21;


    return (
        <div className={show}><span>Vat: </span><b>{vat} Eur</b></div>
    
    )
}