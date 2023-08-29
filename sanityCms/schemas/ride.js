import { defineField, defineConfig } from "sanity";

export default defineConfig({
    name: 'ride',
    title: 'Ride',
    type: 'document',
    fields: [
        defineField({
            name: 'multiplier',
            title: 'Multiplier for base charge',
            type: 'number',
            validation: (Rule) => Rule.positive()
        }),
        defineField({
            name: 'vehicle_type',
            title: 'Vehicle Type',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Image of vehicle',
            type: 'image',
            validation: (Rule) => Rule.required()
        })
    ],
});
