import { defineField, defineConfig } from "sanity";

export default defineConfig({
    name: 'payment',
    title: 'Payment',
    type: 'document',
    fields: [
        defineField({
            name: 'user_id',
            title: 'User',
            type: 'reference',
            to: [{ type: 'user' }],
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'ride_id',
            title: 'Ride',
            type: 'reference',
            to: [{ type: 'ride' }],
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'payment_date',
            title: 'Payment Date',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'amount',
            title: 'Amount',
            type: 'number',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'payment_status',
            title: 'Payment Status',
            type: 'string',
        }),
    ],
});
