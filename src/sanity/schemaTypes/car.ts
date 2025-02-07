export default {
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    {
      name: 'make',
      title: 'Make',
      type: 'string',
    },
    {
      name: 'model',
      title: 'Model',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'stockStatus',
      title: 'Stock Status',
      type: 'string',
      options: {
        list: ['In Stock', 'Out of Stock'],
      },
    },
    {
      name: 'description', 
      title: 'Description',
      type: 'text',  
    },
    {
      name: 'shortdescription', 
      title: 'ShortDescription',
      type: 'text',
    },
  ],
};
