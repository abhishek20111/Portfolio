import React from 'react';

export default function Card(props) {
    return (
        <div className='w-full'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img 
                    className="w-full border-b-2"
                    src={props.img ? props.img : "https://v1.tailwindcss.com/img/card-top.jpg"} 
                    alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-center text-xl mb-2">{props.des}</div>
                </div>
            </div>
        </div>
    );
}
