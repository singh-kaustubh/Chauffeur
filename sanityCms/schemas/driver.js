import { defineConfig, defineField } from "sanity";

const allowedVehicleTypes = ["thrift", "modern", "utility", "luxury"];

export default defineConfig({
    name: 'driver',
    title: 'Driver',
    type: 'document',
    fields: [
        defineField({
            name: 'username',
            title: 'Username',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'phone_number',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule) => Rule.required().length(10),
        }),
        defineField({
            name: 'password',
            title: 'Password',
            type: 'string',
            validation: (Rule) => Rule.required().min(5).max(20),
        }),
        defineField({
            name: 'profile_picture',
            title: 'Profile Picture',
            type: 'image',
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
        }),
        defineField({
            name: 'availability_status',
            title: 'Availability Status',
            type: 'boolean',
            initialValue: true
        }),
        defineField({
            name: 'vehicle_type',
            title: 'Vehicle Type',
            type: 'string',
            validation: (Rule) => Rule.custom((vehicleType) => {
                if (!allowedVehicleTypes.includes(vehicleType.toLowerCase())) {
                    return 'Invalid vehicle type. Allowed types are: thrift, modern, utility and luxury';
                }
                return true;
            })
        }),
        defineField({
            name: 'vehicle_plate_number',
            title: 'Vehicle Plate Number',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
    ],
});