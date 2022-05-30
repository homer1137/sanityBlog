export default {
  name: 'imagephoto',
  title: 'Image',
  type: 'document',
  fields: [
    {
      name: 'imagephoto',
      title: 'Image',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'imagephoto',
        maxLength: 96,
      },
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
      name: 'descriptionImage',
      title: 'Description Image',
      type: 'blockContent',
    },
  ],

}
