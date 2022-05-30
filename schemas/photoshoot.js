export default {
  name: 'photoshoot',
  title: 'Photoshoot',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{type: 'reference', to: {type: 'imagephotos'}}],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title} = selection
      return Object.assign({}, selection, {
        subtitle: title && `by ${title}`,
      })
    },
  },
}
