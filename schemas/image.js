export default {
  name: 'imagephotos',
  title: 'Image',
  type: 'document',
  fields: [
    {
      name: 'imagephotos',
      title: 'Image',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'imagephotos',
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
