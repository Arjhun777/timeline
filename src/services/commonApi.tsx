const response = [
    { year: '05/25/2003', status: 'start' },
    { year: '01/01/2005', status: '+1' },
    { year: '01/03/2008', status: '+3' },
    { year: '10/03/2010', status: '+5', content: { 
        title: 'Amendment', sub: '', 
        items: [
            {title: '+ Limitation of Liability', info: '-'}, 
            {title: '- Late Payment penality', info: 'Amendment clause from "Quote #21: Colocation"'}, 
            {title: '* Termination Rights', info: '-'}
        ] 
    } },
    { year: '12/10/2010', status: '+5', content: { 
        title: 'Quote #32', sub: 'Colocation', 
        items: [
            {title: '+ 20 Products & Services Sold', info: '-'}, 
            {title: '* 10 Products & Services Sold', info: '-'}
        ] 
    } },
    { year: '07/30/2018', status: 'Today', content: { 
        title: 'Quote #33', sub: 'Colocation', 
        items: [
            {title: '+ 30 Products & Services Sold', info: '-'}, 
            {title: '+ 1 Price Increased', info: '-'}, 
            {title: '- Agreement Term', info: '-'}
        ] 
    } },
    { year: '08/17/2019', status: 'Renewal' },
    { year: '02/05/2021', status: 'Renewal' },
    { year: '04/19/2022', status: 'Last Renewal' }
]

export function getTimeline() {
    return new Promise((resolve, reject) => {
        resolve(response);
    })
}