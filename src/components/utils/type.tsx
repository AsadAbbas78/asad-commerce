import { Image } from "sanity"

export interface singleProductTypeDescription{

    
        markDefs: [],
        children:any[],
        level: number,
        _type: string,
        style: string,
        _key:  string,
        listItem: 'bullet'
      

}

export interface singleProductTypeSlug{
    
    current: string,
  _type: string

}

export interface singleProductTypeImage{

    
      assest: {_key: string,
        asset: {
          _type: string,
          _ref: string
        },
        _type: string,
        alt: string
    }
      

}

export interface singleProductType{

    size: string[],
    description: singleProductTypeDescription[],
    producttype: string,
    image: Image[],
    productname: string,
    quantity: number,
    price: number,
    slug: singleProductTypeSlug

}
export interface allProductFetherFromSanityType {
    qurey:string,
result :Array<singleProductType>
} 