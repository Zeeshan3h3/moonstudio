import useCursor from '../../hooks/useCursor';

export default function Cursor() {
    const { dotRef, ringRef } = useCursor();

    return (
        <>
            <div
                ref={dotRef}
                className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[99999] transition-transform duration-75"
            />
            <div
                ref={ringRef}
                className="cursor-ring fixed top-0 left-0 w-9 h-9 border border-gold rounded-full pointer-events-none z-[99999] transition-[width,height,transform,border-color] duration-150"
            />
        </>
    );
}
