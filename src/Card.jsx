import React from 'react'

export default function Card(props) {
    return (
        <div className='w-full'>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-center text-xl mb-2">{props.des}</div>         
                    </div>
            </div>
        </div>
    )
}
