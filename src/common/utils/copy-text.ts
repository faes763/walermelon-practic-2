
export async function copyText(text: string | number, callback?: () => void) {
    try {
        if(navigator?.clipboard['writeText']) {
            await navigator.clipboard.writeText(`${text}`);
            if(callback) callback();
        } else {
            console.log('provider no have clipboard copy');
        }
    } catch (error) {
        console.error('copy error');
    }
}