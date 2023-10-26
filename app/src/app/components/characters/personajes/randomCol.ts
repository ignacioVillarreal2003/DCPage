export function randomColor(): string {
    let colores = ["col1", "col2", "col3", "col4", "col5"];
    return colores[Math.floor(Math.random() * 5)];
}
