export const getRoomCanvasArray = (width: number, height: number) => {
    const arr = [];

    for (let i = 0; i < width; i++) {
        const row = []
        for (let j = 0; j < height; j++) {
            row.push(false);
        }

        arr.push(row);
    }

    return arr
}