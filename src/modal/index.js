import React from 'react';
import "./modal.css";

export const Modal = (props) => {
    if(!props.open) {
        return null;
    }
    return (
        <div className={`modal text-app-gray-200`} onClick={ props.onClose }>
            <div className="small-modal bg-app-black-500 absolute bottom-0 top-1/2 pt-6 transform -translate-y-1/2 left-1/2 -translate-x-1/2 pb-6 md:rounded-md overflow-hidden w-2/4 lg:h-64" onClick={ e=> e.stopPropagation() }>
                <div className="overflow-y-auto px-6 h-full bg-app-black-400 rounded-md lg:mx-12 mx-auto">
                    {
                        props.content && (
                            <div data-bn-type="text" className="text-lg pt-8 mx-6">
                                <span className='font-semibold text-green-400'>{props.content}</span>
                            </div>
                        )
                    }
                    <div data-bn-type="text" className="text-lg pt-8 pb-8 mx-6">
                        <span className='font-semibold text-gray-300'>{props.message}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};