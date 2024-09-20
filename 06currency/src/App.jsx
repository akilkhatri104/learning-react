import { useState } from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    return (
        <div
            className="w-full h-screen flex bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
            }}
        >
            <div className='w-1/2 flex justify-center items-center h-screen bg-cover bg-no-repeat'
                style={{backgroundImage:`url('https://images.pexels.com/photos/210705/pexels-photo-210705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}
            >
                 <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div> {/* Gradient overlay */}
    <h1 className='relative z-10 text-white text-5xl font-bold bg-blue-500/50 p-5 rounded-lg shadow-lg '>
        Welcome To Currency Converter
    </h1>
            </div>
            <div className='h-screen w-1 bg-blue-100'></div>
            <div className="w-1/2 h-screen flex justify-end items-center pr-4">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
