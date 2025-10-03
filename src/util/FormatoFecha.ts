export class FormatoFecha {
    static formatea(valor: Date): string {
        console.log(valor);
        const fecha = new Date(valor);

        return Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(fecha);
    }
}