export function formatPrice (price){
    return new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(price)
}
