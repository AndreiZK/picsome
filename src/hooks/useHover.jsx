import { useState, useEffect, useRef } from "react";

export default function useHover() {
    const [isHovered, setIsHovered] = useState(false)

    function enter() {
        setIsHovered(true)
    }

    function leave() {
        setIsHovered(false)
    }

    useEffect(() => {
        elementRef.current.addEventListener('mouseenter', enter)

        elementRef.current.addEventListener('mouseleave', leave)

        return () => {
            if (elementRef.current) {
            elementRef.current.removeEventListener('mouseenter', enter)
            elementRef.current.removeEventListener('mouseleave', leave)
        }
        }
    }, [])

    const elementRef = useRef(null)

    return [isHovered, elementRef]
}