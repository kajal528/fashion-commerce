export interface imageCarouselItemInterface{
    text: string;
    id: number;
    image: string;
}
export interface imageCarouselInterface{
    productData: imageCarouselItemInterface[],
    filter:string,
    query?:string
}