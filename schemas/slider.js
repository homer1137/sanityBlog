export default {
  name: 'slider',
  title: 'Slider',
  type: 'document',
  fields: [
    {
      name: 'slider',
      title: 'Slider',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'slider',
        maxLength: 96,
      },
    },
    {
      name: 'sliderImage',
      title: 'Slider image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],

}
