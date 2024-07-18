export function ProductCardSkeleton() {
    return (
        <div className="animate-pulse flex space-x-4">
            <div className="rounded-md bg-gray-200 h-56 w-56"></div>
            <div className="flex-1 space-y-4 py-1">
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                </div>  
            </div>
        </div>
    )
}

export function ProductHomeSkeleton() {
    return (
        <div className="animate-pulse flex space-x-4">
            <div className="rounded-md bg-gray-200 h-56 w-56"></div>
            <div className="flex-1 space-y-4 py-1">
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                </div>  
            </div>
        </div>
    )
}

export function ProductPagesSkeleton(amount) {
    const skeletons = [];
    for(let index = 0; index < amount ; index++) {
        skeletons.push(<ProductCardSkeleton key={index} />);
    }
    return (
        <>
            {skeletons}
        </>
    );
}

export function CartSkeleton() {
    return (
        <div className="animate-pulse flex space-x-4">
            <div className="rounded-md bg-gray-200 h-56 w-56"></div>
            <div className="flex-1 space-y-4 py-1">
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                </div>  
            </div>
        </div>
    )
}
