import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST (req : Request) {
    if (req.method === 'POST') {
        try {
            const{
                first_name,
                last_name,
                age,
                gender,
                nationality,
                state,               
                previous_school,
                disability,
                religion,
                parent_name,
                email,
                phone_number,
                residential_address,
                parent_occupation,
                info,
            } = await req.json();

            const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
             user: "adncpamarketing@gmail.com",
             pass: "ssyz cfqv nrdw tzrf",}
        });
        const mailOptions = {
            from: email,
            to: "adncpamarketing@gmail.com",
            subject: "VMS Application Form",
            html: `
                <h1 className="text-vms">NEW STUDENT APPLICATION FORM</h1>
                <p>First Name: ${first_name}</p>
                <p>Last Name: ${last_name}</p>
                <p>Age: ${age}</p>
                <p>Gender: ${gender}</p>
                <p>Nationality: ${nationality}</p>
                <p>State: ${state}</p>
                <p>Previous School: ${previous_school}</p>
                <p>Disability: ${disability}</p>
                <p>Religion: ${religion}</p>
                <p>Parent Name: ${parent_name}</p>
                <p>Phone Number: ${phone_number}</p>
                <p>Residential Adrress: ${residential_address}</p>
                <p>Parent Occupation: ${parent_occupation}</p>
                <p>Info: ${info}</p>
            `
                
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json("application submitted");

    } catch (error) {
        return NextResponse.json('application not sent');

        }
    } else {
        return NextResponse.json("method not allowed");
    }
}