
export const CurrencyCard = ({currency, label}:{currency:"rial"|"dollar"; label: string}) => {

    const isRial = currency==="rial"

  return (
    <div className='flex flex-col gap-1 flex-1'>
        <h3 className="absolute -top-8">{label}</h3>
        <div className='border border-border px-6 py-3 rounded-xl flex gap-3'>
            <img className='w-6 ' src={isRial? "./assets/rial.svg": "./assets/dollar.svg"} alt={currency} />
            <p>{isRial?"ریال": "دلار"}</p>
        </div>
    </div>
  )
}
