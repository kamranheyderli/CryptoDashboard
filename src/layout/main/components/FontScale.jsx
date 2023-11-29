import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFontSize } from '../../../redux/root/FontScale';

const FontScale = () => {

    const dispatch = useDispatch();
    const fontSize = useSelector((state) => state.fontSize.value);

    const handleFontSizeChange = (event) => {
        dispatch(setFontSize(parseInt(event.target.value, 10)));
    };
    return (
        <div className='font_size'>
            <span>Font-size</span>
            <input type="range"
                min="10"
                max="24"
                value={fontSize}
                onChange={handleFontSizeChange} />
        </div>
    )
}

export default FontScale