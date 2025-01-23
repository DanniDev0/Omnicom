import { useEffect } from 'react';
import Typed from 'typed.js';

const useTyped = (elementId, options) => {
    useEffect(() => {
        const typed = new Typed(elementId, options);

        return () => {
            typed.destroy();
        };
    }, [elementId, options]);
};

export default useTyped;
