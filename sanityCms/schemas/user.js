import { defineConfig, defineField } from "sanity";

export default defineConfig({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        defineField({
            name: 'username',
            title: 'Username',
            type: 'string',
            validation: (Rule) => Rule.required().min(5)
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required().email()
        }),
        defineField({
            name: 'phone_number',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule) => Rule.required().length(10)
        }),
        defineField({
            name: 'password',
            title: 'Password',
            type: 'string',
            validation: (Rule) => Rule.required().min(5).max(20)
        }),
        defineField({
            name: 'profile_picture',
            title: 'Profile Picture',
            type: 'image',
        }),
        defineField({
            name: 'registration_date',
            title: 'Registration Date',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
            },
            validation: (Rule) => Rule.required()
        }),
    ],
});