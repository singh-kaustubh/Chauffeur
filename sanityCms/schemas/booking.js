import { defineConfig, defineField } from "sanity";

export default defineConfig({
    name: 'bookingHistory',
    title: 'Booking History',
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
            name: 'booking_date',
            title: 'Booking Date',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
            },
            validation: (Rule) => Rule.required()
        }),
    ],
});
