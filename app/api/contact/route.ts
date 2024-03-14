import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST ( req : Request ) {
    if (req.method === 'POST') {
        const {first_name, last_name, email, phone_number, country, info} = await req.json();
    
    
    try {
        const transporter = nodemailer.createTransport ({
            host:'smtp.gmail.com',
            port:465,
            secure: true,
            auth : {
                user : 'adncpamarketing@gmail.com',
                pass : 'oladimeji4life'
            }
        });

        const mailOptions = {
            from: email,
            to: 'adncpamarketing@gmail.com',
            subject: 'Contact form',
            html : `
            <h2> Contact Form Submission </h2>
            <p><strong>First Name:</strong> $(first_name)</p>
            <p><strong>Last Name:</strong> $(last_name)</p>
            <p><strong>Email:</strong> $(email)</p>
            <p><strong>Phone Number:</strong> $(phone_number)</p>
            <p><strong>Country:</strong> $(country)</p>
            <p><strong>Info</strong> $(info)</p>`

        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json ({message : 'email has been sent'})
    }
    catch (error) {
        console.log (error)

        return NextResponse.json({message : 'email has not been sent'})}
    }

    else {
        return NextResponse.json ({message : 'method not allowed'})
    }
    }
