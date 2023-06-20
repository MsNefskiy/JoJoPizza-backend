export class QueryProductDto {
    readonly category: string;
    readonly sortBy: string;
    order: string | number;
}