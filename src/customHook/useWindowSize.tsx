import React from "react";
interface IWindowSize {
    custom_width: number,
    custom_height: number
};

const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState<IWindowSize>({
        custom_width: window.innerWidth,
        custom_height: window.innerHeight
    });

    React.useEffect(() => {
        const handleResizeSetWindowSizeState = () => {
            setWindowSize({
                custom_width: window.innerWidth,
                custom_height: window.innerHeight
            });
        };
        window.addEventListener("resize", handleResizeSetWindowSizeState);
        return () => window.removeEventListener("resize", handleResizeSetWindowSizeState);
    }, []);

    return windowSize;
};

export default useWindowSize;