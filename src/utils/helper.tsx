export function getYear(date:string, type?: string) {
    if (date?.length) {
        if (type === 'date') return new Date(date)?.getDate(); 
        return new Date(date)?.getFullYear();
    }
    return null;
}

export function getFullMonth(date:string) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    if (date?.length) {
        const month = new Date(date).getMonth();
        return monthNames[month];
    }
    return null;
}