export default {
  name: "tour",
  title: "Tour",
  type: "document",
  fields: [

    //For tour card
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      of: [{type: "image"}],
      options: {
        hotspot: true,
      }
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options:{
        source:"name",
        maxLenght: 25
      }
    },
    {
      name: "description",
      title: "Short Description",
      type: "string",
      options: {
        maxLenght: 45,
      }
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime"
    },
    {
      name: "duration",
      title: "Duration",
      type: "number",
    },
    {
      name: "availability",
      title: "Availability",
      type: "boolean",
    },

    //For tour page
    
    {
      name: "details",
      title: "Details",
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'}
          ]
        },
        {
          type: 'image'
        }
      ]
    },
    {
      name: "program",
      title: "Program",
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'}
          ]
        },
        {
          type: 'image'
        }
      ]
    },
    {
      name: "informations",
      title: "Additional Informations",
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'}
          ]
        },
        {
          type: 'image'
        }
      ]
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{type: "image"}],
      options: {
        hotspot: true,
      }
    },
  ]
}