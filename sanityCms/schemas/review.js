import { defineConfig, defineField } from "sanity"

export default defineConfig({
    name: 'review',
    title: 'Review',
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
            name: 'driver_id',
            title: 'Driver',
            type: 'reference',
            to: [{ type: 'driver' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'ride_id',
            title: 'Ride',
            type: 'reference',
            to: [{ type: 'ride' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule) => Rule.required().min(1).max(5)
        }),
        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'text',
        }),
        defineField({
            name: 'timestamp',
            title: 'Timestamp',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
            },
        }),
    ],
});
