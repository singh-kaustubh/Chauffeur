import { defineConfig, defineField } from "sanity";

export default defineConfig({
    name: 'favourite',
    title: 'Favourite Places',
    type: 'document',
    fields: [
        defineField({
            name: 'user_id',
            title: 'User',
            type: 'reference',
            to: [{ type: 'user' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'name',
            title: 'Name of place',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'icon',
            title: 'Icon type of the place',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'address',
            title: 'Address of the place',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
    ]
})
