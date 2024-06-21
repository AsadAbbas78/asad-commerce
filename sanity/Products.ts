export default {
    name: "products",
    type: "document",
    title: "Products",
    fields: [
      {
        name: "productname",
        type: "string",
        title: "Product Name",
      },
      {
        name: "producttype",
        type: "string",
        title: "Product Type",
      },
      {
        title: "slug",
        name: "slug",
        type: "slug",
        options: {
          source: "productname",
          maxLength: 200,
          slugify: (input: string) =>
            input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        },
      },
      {
        name: "description",
        type: "array",
        title: "Description",
        of: [
          {
            type: "block",
          },
        ],
      },
      {
        name: "image",
        type: "array",
        title: "Image",
        of: [
          {
            type: "image",
            fields: [
              {
                name: "alt",
                type: "text",
                title: "Alternative Text",
              },
            ],
          },
        ],
      },
      {
        name: "price",
        type: "number",
        title: "Price",
      },
      {
        name: "size",
        type: "array",
        title: "Size",
        of: [{ type: "string" }],
      },
      {
        name: "quantity",
        type: "number",
        title: "Quantity",
      },
    ],
  }; 